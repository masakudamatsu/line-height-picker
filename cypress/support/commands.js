import 'cypress-file-upload'; // to use .attachFile()
import {getFontSize, getLineHeight, getMarginTop} from './utils';

Cypress.Commands.add('checkHeaderFooterRendering', () => {
  cy.get('h1').should('have.text', 'Line-height Picker');
  cy.findByTitle(/logo/i).should('exist');
  cy.findByTestId('stepIndicator').should('exist');
  cy.findByTestId('footer').should('exist');
});

Cypress.Commands.add('upload', (testId, fontFileName) => {
  cy.findByTestId(testId).attachFile({
    filePath: fontFileName,
    mimeType: 'font/ttf',
    encoding: 'binary',
  }); // This command does not exactly reflect how the user interacts with our UI. But there's no other way to simulate it.
});

Cypress.Commands.add('EnterValidXHeight', () => {
  const userData = {
    xHeight: 10,
  };
  cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
});

Cypress.Commands.add('EnterValidModularScale', () => {
  const userData = {
    xHeightRatio: 1,
    lineHeightRatio: 3,
  };
  cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
  cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
});

// Assertions on font name, font-family and font-weight
Cypress.Commands.add(
  'assertFontNameFromPreviewPageOn',
  (expectedFontName, expectedFontSubfamily, expectedFontWeight) => {
    cy.findByTestId('font-family-name').should('have.text', expectedFontName);
    cy.findByTestId('font-subfamily-name').should(
      'have.text',
      expectedFontSubfamily,
    );

    cy.findByTestId('sampleParagraphs')
      .should('have.css', 'font-family', `"${expectedFontName}"`)
      .should('have.css', 'font-weight', expectedFontWeight);

    cy.findByText(/css/i).click();
    cy.findByTestId('cssCode')
      .contains(`font-family: '${expectedFontName}'`)
      .contains(`font-weight: ${expectedFontWeight}`);
  },
);

Cypress.Commands.add(
  'assertFontNameFromModularScalePageOn',
  (expectedFontName, expectedFontSubfamily, expectedFontWeight) => {
    cy.findByTestId('font-family-name').should('have.text', expectedFontName);
    cy.findByTestId('font-subfamily-name').should(
      'have.text',
      expectedFontSubfamily,
    );
    cy.EnterValidModularScale();
    cy.findByText(/preview/i).click();
    cy.assertFontNameFromPreviewPageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  },
);

Cypress.Commands.add(
  'assertFontNameFromXheightPageOn',
  (expectedFontName, expectedFontSubfamily, expectedFontWeight) => {
    cy.findByTestId('font-family-name').should('have.text', expectedFontName);
    cy.findByTestId('font-subfamily-name').should(
      'have.text',
      expectedFontSubfamily,
    );
    cy.EnterValidXHeight();
    cy.findByText(/scale/i).click();
    cy.assertFontNameFromModularScalePageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  },
);

// Assertions on x-height and font-size
Cypress.Commands.add('assertFontSize', (xHeight, FontMetrics) => {
  const fontSize = getFontSize(xHeight, FontMetrics);
  cy.findByTestId('sampleParagraphs').should(
    'have.css',
    'font-size',
    `${fontSize}px`,
  );
  cy.findByText(/css/i).click();
  cy.findByTestId('cssCode').contains(`font-size: ${fontSize}px`);
});
Cypress.Commands.add(
  'assertXheightFontSizeFromPreviewPageOn',
  (xHeight, FontMetrics) => {
    cy.findByTestId('x-height-in-pixel').should(
      'have.value',
      xHeight.toString(),
    );
    cy.assertFontSize(xHeight, FontMetrics);
  },
);

Cypress.Commands.add(
  'assertXheightFontSizeFromModularScalePageOn',
  (xHeight, FontMetrics) => {
    cy.findByTestId('XheightDisplay').contains(`${xHeight}px`);
    cy.EnterValidModularScale();
    cy.findByText(/preview/i).click();
    cy.assertXheightFontSizeFromPreviewPageOn(xHeight, FontMetrics);
  },
);

// Assertions on modular scale and line-height
Cypress.Commands.add(
  'assertLineHeight',
  (xHeightRatio, lineHeightRatio, xHeight, FontMetrics) => {
    // setup
    const expectedLineHeight = getLineHeight(
      xHeight,
      lineHeightRatio,
      xHeightRatio,
      FontMetrics,
    );
    const expectedLineHeightInPx = (
      expectedLineHeight * getFontSize(xHeight, FontMetrics)
    ).toFixed(4);

    // verify
    cy.findByTestId('sampleParagraphs').should(
      'have.css',
      'line-height',
      `${expectedLineHeightInPx}px`,
    );
    cy.findByText(/css/i).click();
    cy.findByTestId('cssCode').contains(`line-height: ${expectedLineHeight}`);
  },
);

Cypress.Commands.add(
  'assertModularScaleLineHeightFromPreviewPageOn',
  (xHeightRatio, lineHeightRatio, xHeight, FontMetrics) => {
    // verify
    cy.findByTestId('x-height-for-ratio').should(
      'have.value',
      xHeightRatio.toString(),
    );
    cy.findByTestId('line-height-for-ratio').should(
      'have.value',
      lineHeightRatio.toString(),
    );
    cy.assertLineHeight(xHeightRatio, lineHeightRatio, xHeight, FontMetrics);
  },
);

Cypress.Commands.add(
  'assertModularScaleLineHeightFromModularScalePageOn',
  (xHeightRatio, lineHeightRatio, xHeight, FontMetrics) => {
    cy.findByTestId('x-height-for-ratio').should(
      'have.value',
      xHeightRatio.toString(),
    );
    cy.findByTestId('line-height-for-ratio').should(
      'have.value',
      lineHeightRatio.toString(),
    );

    cy.findByText(/preview/i).click();
    cy.assertModularScaleLineHeightFromPreviewPageOn(
      xHeightRatio,
      lineHeightRatio,
      xHeight,
      FontMetrics,
    );
  },
);

// Assertions on margin-top
Cypress.Commands.add(
  'assertMarginTop',
  (fontMetrics, xHeightPx, xHeightRatio, lineHeightRatio) => {
    const marginTop = getMarginTop(
      fontMetrics,
      xHeightPx,
      xHeightRatio,
      lineHeightRatio,
    );
    cy.findByTestId('sampleParagraph2').should(
      'have.css',
      'margin-top',
      `${marginTop}px`,
    );
    cy.findByText(/css/i).click();
    cy.findByTestId('cssCode').contains(`margin-top: ${marginTop}px`);
  },
);

// Assertions on error messages
Cypress.Commands.add('assertIfDecimalPlaceMessageTurnsRed', testId => {
  cy.findByTestId(testId).should('have.css', 'color', 'rgb(228, 98, 152)');
});

Cypress.Commands.add('assertIfDecimalPlaceMessageTurnsNormal', testId => {
  cy.findByTestId(testId).should('have.css', 'color', 'rgb(245, 245, 245)');
});

Cypress.Commands.add('assertIfErrorMessageAppears', testId => {
  cy.findByTestId(testId)
    .should('be.visible')
    .should('have.css', 'color', 'rgb(228, 98, 152)');
});

Cypress.Commands.add('assertIfErrorMessageDisappears', testId => {
  cy.findByTestId(testId).should('be.hidden');
});

// Tests on alert
Cypress.Commands.add('testAlertForDecimalPlaces', testId => {
  // setup
  const invalidUserData = {
    xHeight: 10.12345,
  };
  let errorMessageTestId;
  if (testId === 'x-height-in-pixel') {
    errorMessageTestId = 'instruction-x-height';
  } else {
    errorMessageTestId = 'instruction-modular-scale';
  }

  // wrong input, but not yet blur
  cy.findByTestId(testId).type(invalidUserData.xHeight);
  cy.assertIfDecimalPlaceMessageTurnsNormal(errorMessageTestId);

  // wrong input and blur
  cy.findByTestId(testId).blur();
  cy.assertIfDecimalPlaceMessageTurnsRed(errorMessageTestId);

  // correct input, but not yet blur
  cy.findByTestId(testId).type('{backspace}'); // eliminate the 5th decimal place
  cy.assertIfDecimalPlaceMessageTurnsRed(errorMessageTestId);

  // correct input and blur
  cy.findByTestId(testId).blur();
  cy.assertIfDecimalPlaceMessageTurnsNormal(errorMessageTestId);
});

Cypress.Commands.add('testAlertForValuesLessThanOne', testId => {
  // setup
  const invalidUserData = {
    negativeValue: -1,
    zero: 0,
  };
  const validUserData = '2';
  let errorMessageTestId;
  if (testId === 'x-height-in-pixel') {
    errorMessageTestId = 'error-message-x-height';
  } else {
    errorMessageTestId = 'error-message-modular-scale';
  }
  // wrong input, but not yet blur
  cy.findByTestId(testId).type(invalidUserData.negativeValue);
  cy.assertIfErrorMessageDisappears(errorMessageTestId);

  // wrong input and blur
  cy.findByTestId(testId).blur();
  cy.assertIfErrorMessageAppears(errorMessageTestId);

  // delete input, but not yet blur
  cy.findByTestId(testId).clear();
  cy.assertIfErrorMessageAppears(errorMessageTestId);

  // delete input and blur
  cy.findByTestId(testId).blur();
  cy.assertIfErrorMessageDisappears(errorMessageTestId);

  // wrong input again, not yet blur
  cy.findByTestId(testId).type(invalidUserData.zero);
  cy.assertIfErrorMessageDisappears(errorMessageTestId);

  // wrong input and blur
  cy.findByTestId(testId).blur();
  cy.assertIfErrorMessageAppears(errorMessageTestId);

  // correct input and not yet blur
  cy.findByTestId(testId)
    .clear()
    .type(validUserData);
  cy.assertIfErrorMessageAppears(errorMessageTestId);

  // correct input and blur
  cy.findByTestId(testId).blur();
  cy.assertIfErrorMessageDisappears(errorMessageTestId);
});

Cypress.Commands.add('testAlertForValuesMoreThanHundred', testId => {
  // setup
  const invalidUserData = '101';
  let errorMessageTestId;
  if (testId === 'x-height-in-pixel') {
    errorMessageTestId = 'error-message-x-height';
  } else {
    errorMessageTestId = 'error-message-modular-scale';
  }

  // Wrong input and not yet blur
  cy.findByTestId(testId).type(invalidUserData);
  cy.assertIfErrorMessageDisappears(errorMessageTestId);

  // Wrong input and blur
  cy.findByTestId(testId).blur();
  cy.assertIfErrorMessageAppears(errorMessageTestId);

  // Correct input and not yet blur
  cy.findByTestId(testId).type('{backspace}');
  cy.assertIfErrorMessageAppears(errorMessageTestId);

  // Correct input and blur
  cy.findByTestId(testId).blur();
  cy.assertIfErrorMessageDisappears(errorMessageTestId);
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

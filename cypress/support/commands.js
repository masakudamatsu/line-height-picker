import 'cypress-file-upload'; // to use .attachFile()
import {getFontSize, getLineHeight} from './utils';

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

    cy.findByText(/scale/i).click();
    cy.assertFontNameFromModularScalePageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  },
);

// Assertions on x-height and font-size
Cypress.Commands.add(
  'assertXheightFontSizeFromPreviewPageOn',
  (xHeight, FontMetrics) => {
    cy.findByTestId('x-height-in-pixel').should(
      'have.value',
      xHeight.toString(),
    );
    const fontSize = getFontSize(xHeight, FontMetrics);
    cy.findByTestId('sampleParagraphs').should(
      'have.css',
      'font-size',
      `${fontSize}px`,
    );
    cy.findByText(/css/i).click();
    cy.findByTestId('cssCode').contains(`font-size: ${fontSize}px`);
  },
);

Cypress.Commands.add(
  'assertXheightFontSizeFromModularScalePageOn',
  (xHeight, FontMetrics) => {
    cy.findByTestId('XheightDisplay').contains(`${xHeight}px`);
    cy.findByText(/preview/i).click();
    cy.assertXheightFontSizeFromPreviewPageOn(xHeight, FontMetrics);
  },
);

// Assertions on modular scale and line-height
Cypress.Commands.add(
  'assertModularScaleLineHeightFromPreviewPageOn',
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
    cy.findByTestId('x-height-for-ratio').should(
      'have.value',
      xHeightRatio.toString(),
    );
    cy.findByTestId('line-height-for-ratio').should(
      'have.value',
      lineHeightRatio.toString(),
    );
    cy.findByTestId('sampleParagraphs').should(
      'have.css',
      'line-height',
      `${expectedLineHeightInPx}px`,
    );
    cy.findByText(/css/i).click();
    // verify
    cy.findByTestId('cssCode').contains(`line-height: ${expectedLineHeight}`);
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

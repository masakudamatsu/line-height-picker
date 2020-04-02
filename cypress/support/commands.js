import 'cypress-file-upload';

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

Cypress.Commands.add(
  'assertFontNameFromPreviewPageOn',
  (expectedFontName, expectedFontWeight) => {
    cy.findByTestId('UserDataDisplay').should('have.text', expectedFontName);

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
  (expectedFontName, expectedFontWeight) => {
    cy.findByTestId('UserDataDisplay').should('have.text', expectedFontName);

    cy.findByText(/preview/i).click();
    cy.assertFontNameFromPreviewPageOn(expectedFontName, expectedFontWeight);
  },
);

Cypress.Commands.add(
  'assertFontNameFromXheightPageOn',
  (expectedFontName, expectedFontWeight) => {
    cy.findByTestId('UserDataDisplay').should('have.text', expectedFontName);

    cy.findByText(/scale/i).click();
    cy.assertFontNameFromModularScalePageOn(
      expectedFontName,
      expectedFontWeight,
    );
  },
);

Cypress.Commands.add(
  'assertXheightFontSizeFromPreviewPageOn',
  (xHeight, FontMetrics) => {
    cy.findByTestId('x-height-in-pixel').should(
      'have.value',
      xHeight.toString(),
    );
    const fontSize = xHeight => {
      return (
        xHeight *
        (FontMetrics.unitsPerEm / FontMetrics.sxHeight)
      ).toFixed(4);
    };
    cy.findByTestId('sampleParagraphs').should(
      'have.css',
      'font-size',
      `${fontSize(xHeight)}px`,
    );
    cy.findByText(/css/i).click();
    cy.findByTestId('cssCode').contains(`font-size: ${fontSize(xHeight)}px`);
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

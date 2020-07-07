import {pageTitle, pageDescription} from '../../src/helper/metaData';

describe('Landing Page', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
  });

  it('shows the non-interactive UI components correctly', () => {
    cy.title().should('eq', pageTitle.home);
    cy.get('h1').should('have.text', pageTitle.home);
    cy.findAllByAltText(/logo/i).should('exist'); // The logo exists both in the header and the body.
    cy.findByTestId('stepIndicator').should('exist');
    cy.findByTestId('footer').should('exist');
    cy.findByTestId('description').should('exist');
  });

  it('describes the page content for search engines as expected', () => {
    cy.get('head meta[name="description"]').should(
      'have.attr',
      'content',
      pageDescription.home,
    );
  });

  it('Clicking the demo button takes users to x-height page and shows "Open Sans" as the chosen font name in all subsequent pages', () => {
    // set up
    const expectedFontName = 'Open Sans';
    const expectedFontSubfamily = 'Regular';
    const expectedFontWeight = '400';
    // execute
    cy.findByTestId('demo-start-button').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.assertFontNameFromXheightPageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });

  it('Uploading a font file takes users to x-height page and shows its font name in all successive pages', () => {
    // Setup
    const fontFileName = 'RobotoSlab-Light.ttf';
    const expectedFontName = 'Roboto Slab';
    const expectedFontSubfamily = 'Light';
    const expectedFontWeight = '300';
    // execute
    cy.findByTestId('font-button').click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // Verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.assertFontNameFromXheightPageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });
});

describe('Landing Page: Error-handling', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
  });

  it('Uploading a file with an invalid extension alerts the user without moving to x-height page', () => {
    // set up
    const invalidFile = 'invalidFile.txt';
    // execute
    cy.upload('hiddenFileInput', invalidFile); // see support/commands.js
    // Verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.findByTestId('error-message-font-file')
      .should('contain', '.ttf')
      .should('contain', '.otf')
      .should('contain', '.woff');
  });

  it('Uploading a wrong file with the valid extension alerts the user without moving to x-height page', () => {
    // set up
    const invalidFile = 'invalidFile.ttf';
    // execute
    cy.upload('hiddenFileInput', invalidFile); // see support/commands.js
    // Verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.findByTestId('error-message-font-file')
      .should('contain', '.ttf')
      .should('contain', '.otf')
      .should('contain', '.woff');
  });

  it('Clicking the demo button removes the font file error message on the x-height page', () => {
    // set up
    const invalidFile = 'invalidFile.ttf';
    // execute
    cy.upload('hiddenFileInput', invalidFile); // see support/commands.js
    cy.findByTestId('demo-start-button').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.findByTestId('error-message-font-file').should('be.hidden');
  });
});

describe('Landing page: Navigation bar', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
  });

  it('does not take the user to the x-height page after clicking number 2 in the header', () => {
    cy.findByText('2').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
  it('DOES NOT take the user to the modular-scale page after clicking number 3 in the header', () => {
    cy.findByText('3').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
  it('DOES NOT take the user to the preview page after clicking number 4 in the header', () => {
    cy.findByText('4').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
  it('DOES NOT take the user to the css page after clicking number 5 in the header', () => {
    cy.findByText('5').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });

  const userData = {
    xHeight: 10,
    xHeightRatio: 1,
    lineHeightRatio: 3,
  };

  it('DOES take the user to the x-height page after clicking number 2 in the header, if the user has already visited', () => {
    // set up
    cy.findByTestId('demo-start-button').click();
    cy.findByText('1').click();
    // execute
    cy.findByText('2').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });

  it('DOES take the user to the modular-scale page after clicking number 3 in the header, if the user has already visited', () => {
    // set up
    cy.findByTestId('demo-start-button').click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/next/i).click();
    cy.findByText('1').click();
    // execute
    cy.findByText('3').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
  });

  it('DOES take the user to the preview page after clicking number 4 in the header, if the user has already visited', () => {
    // set up
    cy.findByTestId('demo-start-button').click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/next/i).click();
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
    cy.findByText('1').click();
    // execute
    cy.findByText('4').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);
  });

  it('DOES take the user to the get CSS page after clicking number 5 in the header, if the user has already visited', () => {
    // set up
    cy.findByTestId('demo-start-button').click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/next/i).click();
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
    cy.findByTestId('get-css-code-button').click();
    cy.findByText('1').click();
    // execute
    cy.findByText('5').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/css`);
  });
});

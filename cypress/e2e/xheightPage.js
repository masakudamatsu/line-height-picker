describe('X-height page in demo', () => {
  beforeEach(() => {
    cy.visit('/x-height');
  });

  it('shows the UI components correctly', () => {
    cy.checkHeaderFooterRendering();
    cy.findByLabelText(/x-height/i).should('exist');
    cy.findByTestId('FontNameDisplay').should('exist');
  });

  it('takes the user to the modular-scale page after clicking the button for it', () => {
    cy.findByText(/scale/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
  });

  it('allows the user to change font by clicking the "change font" button', () => {
    // Setup
    const fontFileName = 'RobotoSlab-Light.ttf';
    const expectedFontName = 'Roboto Slab';
    const expectedFontWeight = '300';

    // Execute
    cy.findByText(/change font/i).click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // Verify
    cy.assertFontNameFromXheightPageOn(expectedFontName, expectedFontWeight);
  });

  it('The chosen x-height value will be reflected in subsequent pages', () => {});
});

describe('X-height page after uploading a font file', () => {
  beforeEach(() => {
    const fontFileName = 'RobotoSlab-Light.ttf';
    cy.visit('/');
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js
  });

  it('allows the user to change font by clicking the "change font" button', () => {
    // Setup
    const fontFileName = 'OpenSans-Regular.ttf';
    const expectedFontName = 'Open Sans';
    const expectedFontWeight = '400';

    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // Verify
    cy.assertFontNameFromXheightPageOn(expectedFontName, expectedFontWeight);
  });
});

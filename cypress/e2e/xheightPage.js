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

  it('allows the user to set x-height, which will be shown in all subsequent pages and used to calculate font-size', () => {
    // setup
    const OpenSansFontMetrics = {
      unitsPerEm: 2048,
      sxHeight: 1096,
    };
    const userData = {
      xHeight: 10,
    };
    // execute
    cy.findByLabelText(/x-height/i).type(userData.xHeight);
    cy.findByText(/scale/i).click();
    // verify
    cy.assertXheightFontSizeFromModularScalePageOn(
      userData.xHeight,
      OpenSansFontMetrics,
    );
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
});

describe('X-height page after uploading a font file', () => {
  beforeEach(() => {
    const fontFileName = 'RobotoSlab-Light.ttf';
    cy.visit('/');
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js
  });

  it('allows the user to set x-height, which will be shown in all subsequent pages and used to calculate font-size', () => {
    // setup
    const RobotoSlabFontMetrics = {
      unitsPerEm: 2048,
      sxHeight: 1082,
    };
    const userData = {
      xHeight: 11,
    };
    // execute
    cy.findByLabelText(/x-height/i).type(userData.xHeight);
    cy.findByText(/scale/i).click();
    // verify
    cy.assertXheightFontSizeFromModularScalePageOn(
      userData.xHeight,
      RobotoSlabFontMetrics,
    );
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

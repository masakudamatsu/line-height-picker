const userData = {
  xHeight: 10,
  xHeightRatio: 1,
  lineHeightRatio: 3,
};
const OpenSansFontMetrics = {
  unitsPerEm: 2048,
  sxHeight: 1096,
};
const RobotoSlabFontMetrics = {
  unitsPerEm: 2048,
  sxHeight: 1082,
};

describe('Modular Scale Page in demo', () => {
  beforeEach(() => {
    cy.visit('/x-height');
    cy.findByLabelText(/x-height/i).type(userData.xHeight);
    cy.findByText(/scale/i).click();
  });

  it('shows the UI components correctly', () => {
    cy.checkHeaderFooterRendering(); // See support/commands.js
    cy.findByText(/pick modular scale/i).should('exist');
    cy.findByLabelText(/line-height/i, {selector: 'input'}).should('exist');
    cy.findByLabelText(/x-height/i).should('exist');
    cy.findByTestId('FontNameDisplay').should('exist');
    cy.findByText(/change font/i).should('exist');
    cy.findByTestId('XheightDisplay').should('exist');
  });

  it('allows the user to enter the x-height-to-line-height ratio, which will be shown in subsequent pages and used to calculate line-height', () => {
    // execute
    cy.findByLabelText(/x-height/i).type(userData.xHeightRatio);
    cy.findByLabelText(/line-height/i, {selector: 'input'}).type(
      userData.lineHeightRatio,
    );
    // verify
    cy.assertModularScaleLineHeightFromModularScalePageOn(
      userData.xHeightRatio,
      userData.lineHeightRatio,
      userData.xHeight,
      OpenSansFontMetrics,
    );
  });

  it('allows the user to change font by clicking the "change font" button', () => {
    // Setup
    const fontFileName = 'RobotoSlab-Light.ttf';
    const expectedFontName = 'Roboto Slab';
    const expectedFontSubfamily = 'Light';
    const expectedFontWeight = '300';

    // Execute
    cy.findByText(/change font/i).click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // Verify
    cy.assertFontNameFromModularScalePageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });

  it('takes the user to the preview page after clicking the button for it', () => {
    cy.findByText(/preview/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);
  });

  it('takes the user back to the x-height page after clicking the button for it', () => {
    cy.findByText(/x-height/i, {selector: 'a'}).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });
});

describe('Modular Scale Page after uploading a font file', () => {
  beforeEach(() => {
    const fontFileName = 'RobotoSlab-Light.ttf';
    cy.visit('/');
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js
    cy.findByLabelText(/x-height/i).type(userData.xHeight);
    cy.findByText(/scale/i).click();
  });

  it('allows the user to enter the x-height-to-line-height ratio, which will be shown in subsequent pages and used to calculate line-height', () => {
    // execute
    cy.findByLabelText(/x-height/i).type(userData.xHeightRatio);
    cy.findByLabelText(/line-height/i, {selector: 'input'}).type(
      userData.lineHeightRatio,
    );
    // verify
    cy.assertModularScaleLineHeightFromModularScalePageOn(
      userData.xHeightRatio,
      userData.lineHeightRatio,
      userData.xHeight,
      RobotoSlabFontMetrics,
    );
  });

  it('allows the user to change font by clicking the "change font" button', () => {
    // Setup
    const fontFileName = 'OpenSans-Regular.ttf';
    const expectedFontName = 'Open Sans';
    const expectedFontSubfamily = 'Regular';
    const expectedFontWeight = '400';

    // Execute
    cy.findByText(/change font/i).click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // Verify
    cy.assertFontNameFromModularScalePageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });
});

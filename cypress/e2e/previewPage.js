const userData = {
  xHeight: 10,
  xHeightRatio: 1,
  lineHeightRatio: 3,
};

describe('Preview Page in demo', () => {
  // setup
  const fontFamily = `Open Sans`;
  const fontWeight = `400`;
  const OpenSansFontMetrics = {
    unitsPerEm: 2048,
    sxHeight: 1096,
  };

  beforeEach(() => {
    cy.visit('/x-height');
    cy.findByLabelText(/x-height/i).type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByLabelText(/x-height/i).type(userData.xHeightRatio);
    cy.findByLabelText(/line-height/i, {selector: 'input'}).type(
      userData.lineHeightRatio,
    );
    cy.findByText(/preview/i).click();
  });

  it('shows the UI components correctly', () => {
    cy.checkHeaderFooterRendering(); // See support/commands.js
    cy.findByText(/preview/i).should('exist');
    cy.findByTestId('sampleParagraph1').should('exist');
    cy.findByTestId('sampleParagraph2').should('exist');
    cy.findByText(/excerpt/i).should('exist');
    cy.findByTestId('FontNameDisplay').should('exist');
    cy.findByText(/change font/i).should('exist');
    cy.findByLabelText(/line-height/i, {selector: 'input'}).should('exist');
  });

  it('takes the user to the CSS page after clicking the button for it', () => {
    cy.findByText(/css/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/css`);
  });

  it('allows the user to change font by clicking the "change font" button', () => {
    // Setup
    const fontFileName = 'RobotoSlab-Light.ttf';
    const expectedFontName = 'Roboto Slab';
    const expectedFontWeight = '300';

    // Execute
    cy.findByText(/change font/i).click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // verify
    cy.assertFontNameFromPreviewPageOn(expectedFontName, expectedFontWeight);
  });

  it('allows the user to change x-height, which will be shown immediately and used to calculate font-size', () => {
    const newUserData = {
      xHeight: 12,
    };
    // execute
    cy.findByTestId('x-height-in-pixel')
      .clear()
      .type(newUserData.xHeight);
    // verify
    cy.assertXheightFontSizeFromPreviewPageOn(
      newUserData.xHeight,
      OpenSansFontMetrics,
    );
  });
});

describe('Preview Page after uploading a font file', () => {
  // setup
  const fontFamily = `Roboto Slab`;
  const fontWeight = `300`;
  const RobotoSlabFontMetrics = {
    unitsPerEm: 2048,
    sxHeight: 1082,
  };

  beforeEach(() => {
    const fontFileName = 'RobotoSlab-Light.ttf';
    cy.visit('/');
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js
    cy.findByLabelText(/x-height/i).type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByLabelText(/x-height/i).type(userData.xHeightRatio);
    cy.findByLabelText(/line-height/i, {selector: 'input'}).type(
      userData.lineHeightRatio,
    );
    cy.findByText(/preview/i).click();
  });

  it('allows the user to change font by clicking the "change font" button', () => {
    // Setup
    const fontFileName = 'OpenSans-Regular.ttf';
    const expectedFontName = 'Open Sans';
    const expectedFontWeight = '400';

    // Execute
    cy.findByText(/change font/i).click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // verify
    cy.assertFontNameFromPreviewPageOn(expectedFontName, expectedFontWeight);
  });

  it('allows the user to change x-height, which will be shown immediately and used to calculate font-size', () => {
    const newUserData = {
      xHeight: 13,
    };
    // execute
    cy.findByTestId('x-height-in-pixel')
      .clear()
      .type(newUserData.xHeight);
    // verify
    cy.assertXheightFontSizeFromPreviewPageOn(
      newUserData.xHeight,
      RobotoSlabFontMetrics,
    );
  });
});

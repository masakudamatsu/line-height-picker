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

  it('alerts the user if they enter more than 4 decimal places, but the alert disappears when they correct it', () => {
    // setup
    const invalidUserData = {
      xHeightRatio: 1.12345,
      lineHeightRatio: 3.12345,
    };
    // x-height ratio
    // execute
    cy.findByLabelText(/x-height/i).type(invalidUserData.xHeightRatio);
    // verify
    cy.assertIfDecimalPlaceMessageTurnsRed('instruction-modular-scale');
    // execute
    cy.findByLabelText(/x-height/i).type('{backspace}'); // eliminate the 5th decimal place
    // verify
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');

    // line-height ratio
    // execute
    cy.findByLabelText(/line-height/i, {selector: 'input'}).type(
      invalidUserData.lineHeightRatio,
    );
    // verify
    cy.assertIfDecimalPlaceMessageTurnsRed('instruction-modular-scale');
    // execute
    cy.findByLabelText(/line-height/i, {selector: 'input'}).type(
      '{backspace}', // eliminate the 5th decimal place
    );
    // verify
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
  });

  it('alerts the user if they enter a value less than 1, but the alert disappears when they delete the invalid value', () => {
    // setup
    const invalidUserData = {
      negativeValue: -1,
      zero: 0,
    };
    const validUserData = '2';
    // execute
    cy.findByLabelText(/x-height/i).type(invalidUserData.negativeValue);
    // verify
    cy.assertIfErrorMessageAppears('error-message-modular-scale');
    // execute
    cy.findByLabelText(/x-height/i).clear();
    // verify
    cy.findByText(/between/i).should('be.hidden');
    // execute
    cy.findByLabelText(/x-height/i).type(invalidUserData.zero);
    // verify
    cy.assertIfErrorMessageAppears('error-message-modular-scale');

    // execute
    cy.findByLabelText(/line-height/i, {selector: 'input'}).type(
      invalidUserData.negativeValue,
    );
    // verify
    cy.assertIfErrorMessageAppears('error-message-modular-scale');
    // execute
    cy.findByLabelText(/line-height/i, {selector: 'input'}).clear();
    // verify
    cy.findByText(/between/i).should('be.hidden');
    // execute
    cy.findByLabelText(/line-height/i, {selector: 'input'}).type(
      invalidUserData.zero,
    );
    // verify
    cy.assertIfErrorMessageAppears('error-message-modular-scale');
  });

  it('alerts the user if they enter a value more than 100, but the alert disappears when they delete the last digit', () => {
    // setup
    const invalidUserData = '101';
    // execute
    cy.findByLabelText(/x-height/i).type(invalidUserData);
    // verify
    cy.assertIfErrorMessageAppears('error-message-modular-scale');
    // execute
    cy.findByLabelText(/x-height/i).type('{backspace}');
    // verify
    cy.findByText(/between/i).should('be.hidden');
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

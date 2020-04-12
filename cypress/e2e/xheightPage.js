import colorPalette from '../../src/theme/colorPalette';

const validInputs = [{xHeight: 10}, {xHeight: 11}];

describe('X-height page in demo', () => {
  const OpenSansFontMetrics = {
    unitsPerEm: 2048,
    sxHeight: 1096,
  };

  beforeEach(() => {
    cy.visit('/x-height');
  });

  it('shows the non-interactive UI components correctly', () => {
    cy.checkHeaderFooterRendering();
    cy.findByTestId('FontNameDisplay').should('exist');
  });

  validInputs.forEach(validInput => {
    it('allows the user to set x-height, which will be shown in all subsequent pages and used to calculate font-size', () => {
      // execute
      cy.findByTestId('x-height-in-pixel').type(validInput.xHeight);
      cy.findByText(/scale/i).click();
      // verify
      cy.assertXheightFontSizeFromModularScalePageOn(
        validInput.xHeight,
        OpenSansFontMetrics,
      );
    });
  });

  it('does not allow the user to move on to the modular-scale page if the user has not entered an x-height value, and shows an error message', () => {
    // execute
    cy.findByText(/scale/i).click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.assertIfErrorMessageAppears('error-message-x-height');
  });

  it('takes the user to the modular-scale page after clicking the button for it, when the user has entered a valid x-height value', () => {
    // execute
    const validInput = '12';
    cy.findByTestId('x-height-in-pixel').type(validInput);
    cy.findByText(/scale/i).click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
  });

  it('does not show alert when the user deletes an input', () => {
    cy.findByTestId('x-height-in-pixel')
      .type('1')
      .clear();
    cy.assertIfErrorMessageDisappears('error-message-x-height');
  });

  it('alerts the user if they enter more than 4 decimal places, but the alert disappears when they correct it', () => {
    cy.testAlertForDecimalPlaces('x-height-in-pixel');
  });

  it('alerts the user if they enter a value less than 1, but the alert disappears when they delete the invalid value', () => {
    cy.testAlertForValuesLessThanOne('x-height-in-pixel');
  });

  it('alerts the user if they enter a value more than 100, but the alert disappears when they delete the last digit', () => {
    cy.testAlertForValuesMoreThanHundred('x-height-in-pixel');
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
    cy.assertFontNameFromXheightPageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });

  it('Uploading a file with an invalid extension alerts the user', () => {
    // set up
    const invalidFile = 'invalidFile.txt';
    // execute
    cy.upload('hiddenFileInput', invalidFile); // see support/commands.js
    // Verify
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
    cy.findByTestId('error-message-font-file')
      .should('contain', '.ttf')
      .should('contain', '.otf')
      .should('contain', '.woff');
  });
});

describe('X-height page after uploading a font file', () => {
  // setup
  const RobotoSlabFontMetrics = {
    unitsPerEm: 2048,
    sxHeight: 1082,
  };

  beforeEach(() => {
    const fontFileName = 'RobotoSlab-Light.ttf';
    cy.visit('/');
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js
  });

  validInputs.forEach(validInput => {
    it('allows the user to set x-height, which will be shown in all subsequent pages and used to calculate font-size', () => {
      // execute
      cy.findByTestId('x-height-in-pixel').type(validInput.xHeight);
      cy.findByText(/scale/i).click();
      // verify
      cy.assertXheightFontSizeFromModularScalePageOn(
        validInput.xHeight,
        RobotoSlabFontMetrics,
      );
    });
  });

  it('allows the user to change font by clicking the "change font" button', () => {
    // Setup
    const fontFileName = 'OpenSans-Regular.ttf';
    const expectedFontName = 'Open Sans';
    const expectedFontSubfamily = 'Regular';
    const expectedFontWeight = '400';

    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // Verify
    cy.assertFontNameFromXheightPageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });
});

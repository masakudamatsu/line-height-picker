import colorPalette from '../../src/theme/colorPalette';

const validInputs = [{xHeight: 10}, {xHeight: 11}];

describe('X-height page in demo', () => {
  const OpenSansFontMetrics = {
    unitsPerEm: 2048,
    sxHeight: 1096,
  };

  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
  });

  it('shows the non-interactive UI components correctly', () => {
    cy.checkHeaderFooterRendering();
    cy.findByTestId('FontNameDisplay').should('exist');
  });

  validInputs.forEach(validInput => {
    it(`allows the user to set x-height (to ${validInput.xHeight}px), which will be shown in all subsequent pages and used to calculate font-size`, () => {
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

  it('takes the user to the modular-scale page after clicking the button for it, when the user has entered a valid x-height value', () => {
    // execute
    const validInput = '12';
    cy.findByTestId('x-height-in-pixel').type(validInput);
    cy.findByText(/scale/i).click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
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
});

describe('X-height page after uploading a font file', () => {
  // setup
  const RobotoSlabFontMetrics = {
    unitsPerEm: 2048,
    sxHeight: 1082,
  };

  beforeEach(() => {
    sessionStorage.clear();
    const fontFileName = 'RobotoSlab-Light.ttf';
    cy.visit('/');
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js
  });

  validInputs.forEach(validInput => {
    it(`allows the user to set x-height (to ${validInput.xHeight}px), which will be shown in all subsequent pages and used to calculate font-size`, () => {
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

describe('X-height page: Error-handling', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
  });

  it.only('does not allow the user to move on to the modular-scale page if the user has not entered an x-height value, and shows an error message with the input field focused', () => {
    // execute
    cy.findByText(/scale/i).click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.focused().should('have.attr', 'id', 'x-height-in-pixel');
  });

  it.only('does not show alert when the user deletes an input', () => {
    cy.findByTestId('x-height-in-pixel')
      .type('1')
      .clear();
    cy.assertIfErrorMessageDisappears('error-message-x-height');
  });

  it.only('alerts the user if they enter more than 4 decimal places AND blur the input field, but the alert disappears when they correct it AND blur the input field', () => {
    cy.testAlertForDecimalPlaces('x-height-in-pixel');
  });

  it.only('alerts the user if they enter a value less than 1 AND blur the input field, but the alert disappears when they delete the invalid value AND blur the input field', () => {
    cy.testAlertForValuesLessThanOne('x-height-in-pixel');
  });

  it.only('alerts the user if they enter a value more than 100 AND blur the input field, but the alert disappears when they correct the input value AND blur the input field', () => {
    cy.testAlertForValuesMoreThanHundred('x-height-in-pixel');
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

describe('X-height page: Navigation bar', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
  });

  it('takes the user to the landing page after clicking number 1 in the header', () => {
    cy.findByText('1').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
  it('DOES NOT take the user to the modular-scale page after clicking number 3 in the header', () => {
    cy.findByText('3').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });
  it('DOES NOT take the user to the preview page after clicking number 4 in the header', () => {
    cy.findByText('4').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });
  it('DOES NOT take the user to the css page after clicking number 5 in the header', () => {
    cy.findByText('5').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });

  const userData = {
    xHeight: 10,
    xHeightRatio: 1,
    lineHeightRatio: 3,
  };

  it('DOES take the user to the modular-scale page after clicking number 3 in the header, if the user has already visited', () => {
    // set up
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByText('2').click();
    // execute
    cy.findByText('3').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
  });

  it('DOES take the user to the preview page after clicking number 4 in the header, if the user has already visited', () => {
    // set up
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
    cy.findByText('2').click();
    // execute
    cy.findByText('4').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);
  });

  it('DOES take the user to the get CSS page after clicking number 5 in the header, if the user has already visited', () => {
    // set up
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
    cy.findByText(/css/i).click();
    cy.findByText('2').click();
    // execute
    cy.findByText('5').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/css`);
  });
});

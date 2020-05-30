import colorPalette from '../../src/theme/colorPalette';

const validInputs = [{xHeight: 10}, {xHeight: 11}];

describe('X-height page in demo', () => {
  const OpenSansFontMetrics = {
    fontFamily: 'Open Sans',
    fontSubfamily: 'Regular',
    unitsPerEm: 2048,
    sxHeight: 1096,
    sCapHeight: 1462,
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
      cy.findByText(/next/i).click();
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
    cy.findByText(/next/i).click();
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
    cy.findByTestId('font-button').click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // Verify
    cy.assertFontNameFromXheightPageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });

  it('keeps the x-height input field empty, and does not show alerts, when the user reloads the page', () => {
    cy.reload();
    cy.findByTestId('x-height-in-pixel').should('have.value', '');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.assertIfErrorMessageDisappears('error-message-x-height');
  });

  it('keeps the entered x-height value and the font information after the user reloads the page', () => {
    const validInput = '12';
    cy.findByTestId('x-height-in-pixel').type(validInput);
    cy.reload();
    // verify
    cy.findByTestId('x-height-in-pixel').should('have.value', validInput);
    cy.findByTestId('FontNameDisplay').contains(OpenSansFontMetrics.fontFamily);
    cy.findByTestId('FontNameDisplay').contains(
      OpenSansFontMetrics.fontSubfamily,
    );
    // Verify the other font metrics
    cy.findByText(/next/i).click();
    cy.assertXheightFontSizeFromModularScalePageOn(
      validInput,
      OpenSansFontMetrics,
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
      cy.findByText(/next/i).click();
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

describe('X-height page: Handle error for missing input', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').clear();
  });

  it('does not show alert before blurring or clicking the next button without any input value', () => {
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
  });

  it('does not show alert when the user blurs without any input value', () => {
    cy.findByTestId('x-height-in-pixel').blur();
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
  });

  it('shows relevant alert, disables the next button, and focuses the input field, when the user clicks the next button without an input value; and reloading the page will not change any of these', () => {
    cy.findByText(/next/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.findByText(/next/i).should('be.disabled');
    cy.focused().should('have.attr', 'id', 'x-height-in-pixel');
    cy.reload();
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.findByText(/next/i).should('be.disabled');
  });

  it('hides relevant alert and enables the next button as soon as the user turns an invalid input value into a valid one', () => {
    cy.findByText(/next/i).click();
    cy.findByTestId('x-height-in-pixel').type(validInputs[0].xHeight);
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.findByText(/next/i).should('be.enabled');
  });
});

describe('X-height page: Handle error for values over 100', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').type('123');
  });

  it('does not show alert before blurring or clicking the next button', () => {
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
  });

  it('shows relevant alert when the user blurs with an input value outside the range; and reloading the page will not change any of these', () => {
    cy.findByTestId('x-height-in-pixel').blur();
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.reload();
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
  });

  it('shows relevant alert, disables the next button, and focuses the input field, when the user clicks the next button with an input value outside the range; and reloading the page will not change any of these', () => {
    cy.findByText(/next/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.findByText(/next/i).should('be.disabled');
    cy.focused().should('have.attr', 'id', 'x-height-in-pixel');
    cy.reload();
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.findByText(/next/i).should('be.disabled');
  });

  it('hides relevant alert and enables the next button as soon as the user turns an invalid input value into a valid one', () => {
    cy.findByText(/next/i).click();
    cy.findByTestId('x-height-in-pixel').type('{backspace}'); // turn 123 into 12
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.findByText(/next/i).should('be.enabled');
  });
});

describe('X-height page: Handle error for values below 1', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').type('0');
  });

  it('does not show alert before blurring or clicking the next button', () => {
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
  });

  it('shows relevant alert when the user blurs with an input value outside the range; and reloading the page will not change any of these', () => {
    cy.findByTestId('x-height-in-pixel').blur();
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.reload();
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
  });

  it('shows relevant alert, disables the next button, and focuses the input field, when the user clicks the next button with an input value outside the range; and reloading the page will not change any of these', () => {
    cy.findByText(/next/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.findByText(/next/i).should('be.disabled');
    cy.focused().should('have.attr', 'id', 'x-height-in-pixel');
    cy.reload();
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.findByText(/next/i).should('be.disabled');
  });

  it('hides relevant alert and enables the next button as soon as the user turns an invalid input value into a valid one', () => {
    cy.findByText(/next/i).click();
    cy.findByTestId('x-height-in-pixel').type(`{home}1`); // turn 0 into 10 ({home} moves the cursor to the start of the line; see https://docs.cypress.io/api/commands/type.html#Arguments)
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.findByText(/next/i).should('be.enabled');
  });
});

describe('X-height page: Handle error for too many decimal places', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').type('1.12345');
  });

  it('does not show alert before blurring or clicking the next button', () => {
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
  });

  it('shows relevant alert when the user blurs with an input value with too many decimal places; and reloading the page will not change any of these', () => {
    cy.findByTestId('x-height-in-pixel').blur();
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsRed('instruction-x-height');
    cy.reload();
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsRed('instruction-x-height');
  });

  it('shows relevant alert, disables the next button, and focuses the input field, when the user clicks the next button with an input value with too many decimal places; and reloading the page will not change any of these', () => {
    cy.findByText(/next/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsRed('instruction-x-height');
    cy.findByText(/next/i).should('be.disabled');
    cy.focused().should('have.attr', 'id', 'x-height-in-pixel');
    cy.reload();
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsRed('instruction-x-height');
    cy.findByText(/next/i).should('be.disabled');
  });

  it('hides relevant alert and enables the next button as soon as the user turns an invalid input value into a valid one', () => {
    cy.findByText(/next/i).click();
    cy.findByTestId('x-height-in-pixel').type('{backspace}'); // turn 1.12345 into 1.1234
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.findByText(/next/i).should('be.enabled');
  });
});

describe('X-height page: Handle error for string input values', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').type('string');
  });

  it('does not show alert before blurring or clicking the next button', () => {
    cy.assertIfErrorMessageDisappears('error-message-x-height');
  });

  it('shows relevant alert when the user blurs with a string input value; and reloading the page will not change any of these', () => {
    cy.findByTestId('x-height-in-pixel').blur();
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.reload();
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
  });

  it('shows relevant alert, disables the next button, and focuses the input field, when the user clicks the next button with a string input value; and reloading the page will not change any of these', () => {
    cy.findByText(/next/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.findByText(/next/i).should('be.disabled');
    cy.focused().should('have.attr', 'id', 'x-height-in-pixel');
    cy.reload();
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.findByText(/next/i).should('be.disabled');
  });

  it('hides relevant alert and enables the next button as soon as the user deletes the invalid input value', () => {
    cy.findByText(/next/i).click();
    cy.findByTestId('x-height-in-pixel').clear();
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-x-height');
    cy.findByText(/next/i).should('be.enabled');
  });
});

describe('X-height page: Handle error for font files', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
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

  it('Uploading a wrong file with the valid extension alerts the user', () => {
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
    cy.findByText(/next/i).click();
    cy.findByText('2').click();
    // execute
    cy.findByText('3').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
  });

  it('DOES take the user to the preview page after clicking number 4 in the header, if the user has already visited', () => {
    // set up
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/next/i).click();
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
    cy.findByText(/next/i).click();
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

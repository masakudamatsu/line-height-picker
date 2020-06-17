const userData = {
  xHeight: 10,
  xHeightRatio: 1,
  lineHeightRatio: 3,
};
const OpenSansFontMetrics = {
  fontFamily: 'Open Sans',
  fontSubfamily: 'Regular',
  unitsPerEm: 2048,
  sxHeight: 1096,
};
const RobotoSlabFontMetrics = {
  unitsPerEm: 2048,
  sxHeight: 1082,
};

describe('Modular Scale Page in demo', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByTestId('demo-start-button').click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/next/i).click();
  });

  it('shows the non-interactive UI components correctly', () => {
    cy.checkHeaderFooterRendering(); // See support/commands.js
    cy.findByText(/line spacing/i).should('exist');
    cy.findByTestId('FontNameDisplay').should('exist');
  });

  it('keeps input fields empty, and does not show alerts, when the user reloads the page', () => {
    cy.reload();
    cy.findByTestId('x-height-for-ratio').should('have.value', '');
    cy.findByTestId('line-height-for-ratio').should('have.value', '');
    cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
    cy.assertIfErrorMessageDisappears('error-message-modular-scale');
  });

  it('allows the user to enter the x-height-to-line-height ratio, which will be shown in subsequent pages and used to calculate line-height', () => {
    // execute
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    // verify
    cy.assertModularScaleLineHeightFromModularScalePageOn(
      userData.xHeightRatio,
      userData.lineHeightRatio,
      userData.xHeight,
      OpenSansFontMetrics,
    );
  });

  it('keeps the entered x-height-to-line-height ratio and the other user inputs after the user reloads the page', () => {
    // execute
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.reload();
    // verify
    cy.findByTestId('x-height-for-ratio').should(
      'have.value',
      `${userData.xHeightRatio}`,
    );
    cy.findByTestId('line-height-for-ratio').should(
      'have.value',
      `${userData.lineHeightRatio}`,
    );
    cy.findByTestId('FontNameDisplay').contains(OpenSansFontMetrics.fontFamily);
    cy.findByTestId('FontNameDisplay').contains(
      OpenSansFontMetrics.fontSubfamily,
    );
    // Verify the other font metrics
    cy.findByText(/preview/i).click();
    cy.assertModularScaleLineHeightFromPreviewPageOn(
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
    cy.findByTestId('font-button').click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // Verify
    cy.assertFontNameFromModularScalePageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });

  it('takes the user to the preview page after clicking the button for it, when the user has entered valid modular scale values', () => {
    // execute
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);
  });

  it('allows the user to change x-height, and it will be reflected in the subsequent pages', () => {
    // setup
    const newUserData = {
      xHeight: 9,
    };
    // execute
    cy.findByTestId('x-height-in-pixel')
      .clear()
      .type(newUserData.xHeight);
    // verify
    cy.assertXheightFontSizeFromModularScalePageOn(
      newUserData.xHeight,
      OpenSansFontMetrics,
    );
  });
});

describe('Modular Scale Page after uploading a font file', () => {
  beforeEach(() => {
    sessionStorage.clear();
    const fontFileName = 'RobotoSlab-Light.ttf';
    cy.visit('/');
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/next/i).click();
  });

  it('allows the user to enter the x-height-to-line-height ratio, which will be shown in subsequent pages and used to calculate line-height', () => {
    // execute
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
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
    cy.findByTestId('font-button').click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // Verify
    cy.assertFontNameFromModularScalePageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });
});

['x-height-for-ratio', 'line-height-for-ratio'].forEach(inputField => {
  const otherInputField =
    inputField === 'x-height-for-ratio'
      ? 'line-height-for-ratio'
      : 'x-height-for-ratio';

  describe(`Modular-scale page: Handle error for missing input to ${inputField}`, () => {
    beforeEach(() => {
      sessionStorage.clear();
      cy.visit('/');
      cy.findByTestId('demo-start-button').click();
      cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
      cy.findByText(/next/i).click();
      cy.findByTestId(otherInputField).type('3');
      cy.findByTestId(inputField).clear();
    });

    it('does not show alert before blurring or clicking the next button without any input value', () => {
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
    });

    it('does not show alert when the user blurs without any input value', () => {
      cy.findByTestId(inputField).blur();
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
    });

    it('shows relevant alert, disables the next button, and focuses the input field, when the user clicks the next button without an input value; and reloading the page will not change any of these', () => {
      cy.findByText(/preview/i).click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.disabled');
      cy.focused().should('have.attr', 'id', inputField);
      cy.reload();
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.disabled');
    });

    it('hides relevant alert and enables the next button as soon as the user turns an invalid input value into a valid one', () => {
      cy.findByText(/preview/i).click();
      cy.findByTestId(inputField).type('2');
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.enabled');
    });
  });

  describe('Modular-scale page: Handle error for values over 100', () => {
    beforeEach(() => {
      sessionStorage.clear();
      cy.visit('/');
      cy.findByTestId('demo-start-button').click();
      cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
      cy.findByText(/next/i).click();
      cy.findByTestId(otherInputField).type('3');
      cy.findByTestId(inputField).type('101');
    });

    it('does not show alert before blurring or clicking the next button', () => {
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
    });

    it('shows relevant alert when the user blurs with an input value outside the range; and reloading the page will not change any of these', () => {
      cy.findByTestId(inputField).blur();
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.reload();
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
    });

    it('shows relevant alert, disables the next button, and focuses the input field, when the user clicks the next button with an input value outside the range; and reloading the page will not change any of these', () => {
      cy.findByText(/preview/i).click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.disabled');
      cy.focused().should('have.attr', 'id', inputField);
      cy.reload();
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.disabled');
    });

    it('hides relevant alert and enables the next button as soon as the user turns an invalid input value into a valid one', () => {
      cy.findByText(/preview/i).click();
      cy.findByTestId(inputField).type('{backspace}'); // turn 101 into 10
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.enabled');
    });
  });

  describe('Modular-scale page: Handle error for values below 1', () => {
    beforeEach(() => {
      sessionStorage.clear();
      cy.visit('/');
      cy.findByTestId('demo-start-button').click();
      cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
      cy.findByText(/next/i).click();
      cy.findByTestId(otherInputField).type('3');
      cy.findByTestId(inputField).type('0');
    });

    it('does not show alert before blurring or clicking the next button', () => {
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
    });

    it('shows relevant alert when the user blurs with an input value outside the range; and reloading the page will not change any of these', () => {
      cy.findByTestId(inputField).blur();
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.reload();
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
    });

    it('shows relevant alert, disables the next button, and focuses the input field, when the user clicks the next button with an input value outside the range; and reloading the page will not change any of these', () => {
      cy.findByText(/preview/i).click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.disabled');
      cy.focused().should('have.attr', 'id', inputField);
      cy.reload();
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.disabled');
    });

    it('hides relevant alert and enables the next button as soon as the user turns an invalid input value into a valid one', () => {
      cy.findByText(/preview/i).click();
      cy.findByTestId(inputField).type(`{home}1`); // turn 0 into 10 ({home} moves the cursor to the start of the line; see https://docs.cypress.io/api/commands/type.html#Arguments)
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.enabled');
    });
  });

  describe('Modular-scale page: Handle error for too many decimal places', () => {
    beforeEach(() => {
      sessionStorage.clear();
      cy.visit('/');
      cy.findByTestId('demo-start-button').click();
      cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
      cy.findByText(/next/i).click();
      cy.findByTestId(otherInputField).type('3');
      cy.findByTestId(inputField).type('1.12345');
    });

    it('does not show alert before blurring or clicking the next button', () => {
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
    });

    it('shows relevant alert when the user blurs with an input value with too many decimal places; and reloading the page will not change any of these', () => {
      cy.findByTestId(inputField).blur();
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsRed('instruction-modular-scale');
      cy.reload();
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsRed('instruction-modular-scale');
    });

    it('shows relevant alert, disables the next button, and focuses the input field, when the user clicks the next button with an input value with too many decimal places; and reloading the page will not change any of these', () => {
      cy.findByText(/preview/i).click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsRed('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.disabled');
      cy.focused().should('have.attr', 'id', inputField);
      cy.reload();
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsRed('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.disabled');
    });

    it('hides relevant alert and enables the next button as soon as the user turns an invalid input value into a valid one', () => {
      cy.findByText(/preview/i).click();
      cy.findByTestId(inputField).type('{backspace}'); // turn 1.12345 into 1.1234
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.enabled');
    });
  });

  describe('Modular-scale page: Handle error for string input values', () => {
    beforeEach(() => {
      sessionStorage.clear();
      cy.visit('/');
      cy.findByTestId('demo-start-button').click();
      cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
      cy.findByText(/next/i).click();
      cy.findByTestId(otherInputField).type('3');
      cy.findByTestId(inputField).type('string');
    });

    it('does not show alert before blurring or clicking the next button', () => {
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
    });

    it('shows relevant alert when the user blurs with a string input value; and reloading the page will not change any of these', () => {
      cy.findByTestId(inputField).blur();
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.reload();
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
    });

    it('shows relevant alert, disables the next button, and focuses the input field, when the user clicks the next button with a string input value; and reloading the page will not change any of these', () => {
      cy.findByText(/preview/i).click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.disabled');
      cy.focused().should('have.attr', 'id', inputField);
      cy.reload();
      cy.assertIfErrorMessageAppears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.disabled');
    });

    it('hides relevant alert and enables the next button as soon as the user deletes the invalid input value', () => {
      cy.findByText(/preview/i).click();
      cy.findByTestId(inputField).clear();
      cy.assertIfErrorMessageDisappears('error-message-modular-scale');
      cy.assertIfDecimalPlaceMessageTurnsNormal('instruction-modular-scale');
      cy.findByText(/preview/i).should('be.enabled');
    });
  });
});

describe('Modular-scale page: Handle error for x-height value', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByTestId('demo-start-button').click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/next/i).click();
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByTestId('x-height-in-pixel').type('9'); // Make the x-height value exceed 100
  });

  it('prevents the move to the preview page, shows alert, disables the preview button, and focus the x-height input field when the user enters an invalid x-height value and clicks the preview button', () => {
    cy.findByText(/preview/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
    cy.assertIfErrorMessageAppears('error-message-x-height');
    cy.findByText(/preview/i).should('be.disabled');
    cy.focused().should('have.attr', 'id', 'x-height-in-pixel');
  });

  it('hides alert and enables the preview button as soon as the user corrects the x-height value', () => {
    cy.findByText(/preview/i).click();
    cy.findByTestId('x-height-in-pixel').type('{backspace}');
    cy.assertIfErrorMessageDisappears('error-message-x-height');
    cy.findByText(/preview/i).should('be.enabled');
  });
});

describe('Modular-scale page: Handle error for font files', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByTestId('demo-start-button').click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/next/i).click();
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

describe('Modular-scale page: Navigation bar', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByTestId('demo-start-button').click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/next/i).click();
  });

  it('takes the user to the landing page after clicking number 1 in the header', () => {
    cy.findByText('1').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
  it('takes the user to the x-height page after clicking number 2 in the header', () => {
    cy.findByText('2').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });
  it('DOES NOT take the user to the preview page after clicking number 4 in the header', () => {
    cy.findByText('4').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
  });
  it('DOES NOT take the user to the css page after clicking number 5 in the header', () => {
    cy.findByText('5').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
  });

  it('DOES take the user to the preview page after clicking number 4 in the header, if the user has already visited', () => {
    // set up
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
    cy.findByText('3').click();
    // execute
    cy.findByText('4').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);
  });

  it('DOES take the user to the get CSS page after clicking number 5 in the header, if the user has already visited', () => {
    // set up
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
    cy.findByTestId('get-css-code-button').click();
    cy.findByText('3').click();
    // execute
    cy.findByText('5').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/css`);
  });
});

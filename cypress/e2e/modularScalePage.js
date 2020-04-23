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
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
  });

  it('shows the non-interactive UI components correctly', () => {
    cy.checkHeaderFooterRendering(); // See support/commands.js
    cy.findByText(/pick modular scale/i).should('exist');
    cy.findByTestId('FontNameDisplay').should('exist');
    cy.findByTestId('XheightDisplay').should('exist');
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
    cy.findByTestId('font-family-name').should(
      'have.text',
      OpenSansFontMetrics.fontFamily,
    );
    cy.findByTestId('font-subfamily-name').should(
      'have.text',
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
    cy.findByText(/change font/i).click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
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

  it('takes the user back to the x-height page after clicking the button for it', () => {
    cy.findByText(/x-height/i, {selector: 'a'}).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });
});

describe('Modular Scale Page after uploading a font file', () => {
  beforeEach(() => {
    sessionStorage.clear();
    const fontFileName = 'RobotoSlab-Light.ttf';
    cy.visit('/');
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
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

describe('Modular Scale Page: Error-handling', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
  });

  it('does not show alert when the user deletes an input', () => {
    cy.findByTestId('x-height-for-ratio')
      .type('1')
      .clear();
    cy.assertIfErrorMessageDisappears('error-message-modular-scale');
  });

  it('alerts the user if they enter more than 4 decimal places AND blur the input field, but the alert disappears when they correct it AND blur the input field', () => {
    cy.testAlertForDecimalPlaces('x-height-for-ratio', 'modular-scale');
    cy.testAlertForDecimalPlaces('line-height-for-ratio', 'modular-scale');
  });

  it('alerts the user if they enter a value less than 1 AND blur the input field, but the alert disappears when they delete the invalid value AND blur the input field', () => {
    cy.testAlertForValuesLessThanOne('x-height-for-ratio', 'modular-scale');
    cy.testAlertForValuesLessThanOne('line-height-for-ratio', 'modular-scale');
  });

  it('lerts the user if they enter a value more than 100 AND blur the input field, but the alert disappears when they correct the input value AND blur the input field', () => {
    cy.testAlertForValuesMoreThanHundred('x-height-for-ratio', 'modular-scale');
    cy.testAlertForValuesMoreThanHundred(
      'line-height-for-ratio',
      'modular-scale',
    );
  });

  it('alerts the user if they enter a string AND blur the input field, but the alert disappears when they correct it AND blur the input field', () => {
    cy.testAlertForString('x-height-for-ratio', 'modular-scale');
    cy.testAlertForString('line-height-for-ratio', 'modular-scale');
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

  it('does not allow the user to move on to the preview page if the user has not entered an x-height ratio value, and shows an error message with the invalid field focused', () => {
    // execute
    cy.findByTestId('x-height-for-ratio').clear();
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
    cy.assertIfErrorMessageAppears('error-message-modular-scale');
    cy.focused().should('have.attr', 'id', 'x-height-for-ratio');
  });

  it('does not allow the user to move on to the preview page if the user has not entered a line-height ratio value, and shows an error message with the invalid field focused', () => {
    // execute
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').clear();
    cy.findByText(/preview/i).click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
    cy.assertIfErrorMessageAppears('error-message-modular-scale');
    cy.focused().should('have.attr', 'id', 'line-height-for-ratio');
  });
});

describe('Modular-scale page: Navigation bar', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
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
    cy.findByText(/css/i).click();
    cy.findByText('3').click();
    // execute
    cy.findByText('5').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/css`);
  });
});

describe('Landing Page', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
  });

  it('shows the non-interactive UI components correctly', () => {
    cy.get('h1').should('have.text', 'Line-height Picker');
    cy.findAllByTitle(/logo/i).should('exist'); // The logo exists both in the header and the body.
    cy.findByTestId('stepIndicator').should('exist');
    cy.findByTestId('footer').should('exist');
    cy.findByTestId('description').should('exist');
  });

  it('Clicking the demo button takes users to x-height page and shows "Open Sans" as the chosen font name in all subsequent pages', () => {
    // set up
    const expectedFontName = 'Open Sans';
    const expectedFontSubfamily = 'Regular';
    const expectedFontWeight = '400';
    // execute
    cy.findByText(/demo/i).click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.assertFontNameFromXheightPageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });

  it('Uploading a font file takes users to x-height page and shows its font name in all successive pages', () => {
    // Setup
    const fontFileName = 'RobotoSlab-Light.ttf';
    const expectedFontName = 'Roboto Slab';
    const expectedFontSubfamily = 'Light';
    const expectedFontWeight = '300';
    // execute
    cy.findByText(/upload/i).click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // Verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.assertFontNameFromXheightPageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });
});

describe('Landing Page: Direct entry', () => {
  const userInput = {
    sCapHeight: '1456',
    preferredFamily: 'Roboto Slab',
    preferredSubfamily: 'Light',
    unitsPerEm: '2048',
    usWeightClass: '300',
    sxHeight: '1082',
    xHeight: 10,
    xHeightRatio: 1,
    lineHeightRatio: 3,
  };
  const userFontMetrics = {
    sCapHeight: userInput.sCapHeight,
    sxHeight: userInput.sxHeight,
    unitsPerEm: userInput.unitsPerEm,
  };
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByLabelText('sxHeight').type(userInput.sxHeight);
    cy.findByLabelText('sCapHeight').type(userInput.sCapHeight);
    cy.findByLabelText('unitsPerEm').type(userInput.unitsPerEm);
    cy.findByLabelText('preferredFamily').type(userInput.preferredFamily);
    cy.findByLabelText('preferredSubfamily').type(userInput.preferredSubfamily);
    cy.findByLabelText('usWeightClass').type(userInput.usWeightClass);
  });

  it('takes the user to the x-height page after clicking the NEXT button', () => {
    // execute
    cy.findByText(/next/i).click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });

  it('shows the entered font name in all subsequent pages', () => {
    //setup
    const expectedFontName = 'Roboto Slab';
    const expectedFontSubfamily = 'Light';
    const expectedFontWeight = '300';
    // execute
    cy.findByText(/next/i).click();
    // verify
    cy.assertFontNameFromXheightPageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });

  it('calculates the font-size value based on the entered sxHeight and unitsPerEm values', () => {
    // setup
    // execute
    cy.findByText(/next/i).click();
    cy.findByTestId('x-height-in-pixel').type(userInput.xHeight);
    cy.findByText(/scale/i).click();
    // verify
    cy.assertXheightFontSizeFromModularScalePageOn(
      userInput.xHeight,
      userFontMetrics,
    );
  });

  it('calculates the line-height value based on the entered sxHeight and unitsPerEm values', () => {
    // setup
    // execute
    cy.findByText(/next/i).click();
    cy.findByTestId('x-height-in-pixel').type(userInput.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByTestId('x-height-for-ratio').type(userInput.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userInput.lineHeightRatio);
    // verify
    cy.assertModularScaleLineHeightFromModularScalePageOn(
      userInput.xHeightRatio,
      userInput.lineHeightRatio,
      userInput.xHeight,
      userFontMetrics,
    );
  });

  it('calculates the vertical space between paragraphs based on the entered cap height etc.', () => {
    // execute
    cy.findByText(/next/i).click();
    cy.findByTestId('x-height-in-pixel').type(userInput.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByTestId('x-height-for-ratio').type(userInput.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userInput.lineHeightRatio);
    cy.findByText(/preview/i).click();
    // verify
    cy.assertMarginTop(
      userFontMetrics,
      userInput.xHeight,
      userInput.xHeightRatio,
      userInput.lineHeightRatio,
    );
  });

  ['preferredFamily', 'preferredSubfamily', 'usWeightClass'].forEach(
    fontMetric => {
    it.only(`shows an error message for ${fontMetric} if the user clicks the next button without entering its input field, and hides the error message if the use enters a valid input`, () => {
    // execute 1
      cy.findByLabelText(fontMetric).clear();
    cy.findByText(/next/i).click();
    // verify
      cy.assertIfErrorMessageAppears(`error-message-${fontMetric}`);
    // execute 2
      cy.findByLabelText(fontMetric).type(userInput[fontMetric]);
    // verify
      cy.assertIfErrorMessageDisappears(`error-message-${fontMetric}`);
});
    },
  );
});

describe('Landing Page: Error-handling', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
  });

  it('Uploading a file with an invalid extension alerts the user without moving to x-height page', () => {
    // set up
    const invalidFile = 'invalidFile.txt';
    // execute
    cy.upload('hiddenFileInput', invalidFile); // see support/commands.js
    // Verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
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
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.findByTestId('error-message-font-file')
      .should('contain', '.ttf')
      .should('contain', '.otf')
      .should('contain', '.woff');
  });
});

describe('Landing page: Navigation bar', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
  });

  it('does not take the user to the x-height page after clicking number 2 in the header', () => {
    cy.findByText('2').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
  it('DOES NOT take the user to the modular-scale page after clicking number 3 in the header', () => {
    cy.findByText('3').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
  it('DOES NOT take the user to the preview page after clicking number 4 in the header', () => {
    cy.findByText('4').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
  it('DOES NOT take the user to the css page after clicking number 5 in the header', () => {
    cy.findByText('5').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });

  const userData = {
    xHeight: 10,
    xHeightRatio: 1,
    lineHeightRatio: 3,
  };

  it('DOES take the user to the x-height page after clicking number 2 in the header, if the user has already visited', () => {
    // set up
    cy.findByText(/demo/i).click();
    cy.findByText('1').click();
    // execute
    cy.findByText('2').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });

  it('DOES take the user to the modular-scale page after clicking number 3 in the header, if the user has already visited', () => {
    // set up
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByText('1').click();
    // execute
    cy.findByText('3').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
  });

  it('DOES take the user to the preview page after clicking number 4 in the header, if the user has already visited', () => {
    // set up
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
    cy.findByText('1').click();
    // execute
    cy.findByText('4').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);
  });

  it('DOES take the user to the get CSS page after clicking number 5 in the header, if the user has already visited', () => {
    // set up
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
    cy.findByText(/css/i).click();
    cy.findByText('1').click();
    // execute
    cy.findByText('5').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/css`);
  });
});

const userData = {
  xHeight: 10,
  xHeightRatio: 1,
  lineHeightRatio: 3,
};

const newUserData = {
  xHeight: 12,
  xHeightRatio: 2,
  lineHeightRatio: 7,
};

const OpenSansFontMetrics = {
  unitsPerEm: 2048,
  sxHeight: 1096,
  sCapHeight: 1462,
};

const RobotoSlabFontMetrics = {
  unitsPerEm: 2048,
  sxHeight: 1082,
  sCapHeight: 1456,
};

describe('Preview Page in demo', () => {
  // setup
  const fontFamily = `Open Sans`;
  const fontWeight = `400`;

  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
  });

  it('shows the non-interactive UI components correctly', () => {
    cy.checkHeaderFooterRendering(); // See support/commands.js
    cy.findByText(/preview/i).should('exist');
    cy.findByTestId('sampleParagraph1').should('exist');
    cy.findByTestId('sampleParagraph2').should('exist');
    cy.findByText(/excerpt/i).should('exist');
    cy.findByTestId('FontNameDisplay').should('exist');
  });

  it('Reloading the page does not alter the font size', () => {
    cy.reload();
    cy.assertFontSize(userData.xHeight, OpenSansFontMetrics);
  });

  it('Reloading the page does not alter the vertical space between paragraphs', () => {
    cy.reload();
    cy.assertMarginTop(
      OpenSansFontMetrics,
      userData.xHeight,
      userData.xHeightRatio,
      userData.lineHeightRatio,
    );
  });

  it('takes the user to the CSS page after clicking the button for it', () => {
    cy.findByText(/css/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/css`);
  });

  it('correctly shows the vertical space between paragraphs', () => {
    cy.assertMarginTop(
      OpenSansFontMetrics,
      userData.xHeight,
      userData.xHeightRatio,
      userData.lineHeightRatio,
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

    // verify
    cy.assertFontNameFromPreviewPageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });

  it('updates font-size after the user changes font', () => {
    // Setup
    const fontFileName = 'RobotoSlab-Light.ttf';

    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // verify
    cy.assertFontSize(userData.xHeight, RobotoSlabFontMetrics);
  });

  it('updates line-height after the user changes font', () => {
    // Setup
    const fontFileName = 'RobotoSlab-Light.ttf';

    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // verify
    cy.assertLineHeight(
      userData.xHeightRatio,
      userData.lineHeightRatio,
      userData.xHeight,
      RobotoSlabFontMetrics,
    );
  });

  it('updates the vertical space between paragraphs after the user changes font', () => {
    // Setup
    const fontFileName = 'OpenSans-Regular.ttf';

    // Execute
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // verify
    cy.assertMarginTop(
      OpenSansFontMetrics,
      userData.xHeight,
      userData.xHeightRatio,
      userData.lineHeightRatio,
    );
  });

  it('allows the user to change x-height, which will be shown immediately and used to calculate font-size', () => {
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

  // NOTE: Line-height won't change with x-height
  it('updates the vertical space between paragraphs after the user changes x-height', () => {
    // execute
    cy.findByTestId('x-height-in-pixel')
      .clear()
      .type(newUserData.xHeight);
    // verify
    cy.assertMarginTop(
      OpenSansFontMetrics,
      newUserData.xHeight,
      userData.xHeightRatio,
      userData.lineHeightRatio,
    );
  });

  it('allows the user to change the x-height-to-line-height ratio, which will be shown immeidately and used to calculate line-height', () => {
    // execute
    cy.findByTestId('x-height-for-ratio')
      .clear()
      .type(newUserData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio')
      .clear()
      .type(newUserData.lineHeightRatio);
    // verify
    cy.assertModularScaleLineHeightFromPreviewPageOn(
      newUserData.xHeightRatio,
      newUserData.lineHeightRatio,
      userData.xHeight,
      OpenSansFontMetrics,
    );
  });

  it('updates the vertical space between paragraphs after the user changes x-height-to-line-height ratio', () => {
    // execute
    cy.findByTestId('x-height-for-ratio')
      .clear()
      .type(newUserData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio')
      .clear()
      .type(newUserData.lineHeightRatio);
    // verify
    cy.assertMarginTop(
      OpenSansFontMetrics,
      userData.xHeight,
      newUserData.xHeightRatio,
      newUserData.lineHeightRatio,
    );
  });
});

describe('Preview Page after uploading a font file', () => {
  // setup
  const fontFamily = `Roboto Slab`;
  const fontWeight = `300`;

  beforeEach(() => {
    sessionStorage.clear();
    const fontFileName = 'RobotoSlab-Light.ttf';
    cy.visit('/');
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
  });

  it('correctly shows the vertical space between paragraphs', () => {
    cy.assertMarginTop(
      RobotoSlabFontMetrics,
      userData.xHeight,
      userData.xHeightRatio,
      userData.lineHeightRatio,
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

    // verify
    cy.assertFontNameFromPreviewPageOn(
      expectedFontName,
      expectedFontSubfamily,
      expectedFontWeight,
    );
  });

  it('allows the user to change x-height, which will be shown immediately and used to calculate font-size', () => {
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

  it('allows the user to change the x-height-to-line-height ratio, which will be shown immeidately and used to calculate line-height', () => {
    // execute
    cy.findByTestId('x-height-for-ratio')
      .clear()
      .type(newUserData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio')
      .clear()
      .type(newUserData.lineHeightRatio);
    // verify
    cy.assertModularScaleLineHeightFromPreviewPageOn(
      newUserData.xHeightRatio,
      newUserData.lineHeightRatio,
      userData.xHeight,
      RobotoSlabFontMetrics,
    );
  });
});

describe('Preview Page: Error-handling', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
  });

  ['x-height-in-pixel', 'x-height-for-ratio', 'line-height-for-ratio'].forEach(
    testId => {
      it(`disables the button to get the CSS code, focuses the invalid field, and shows the error message, if the user deletes the ${testId} value`, () => {
        cy.findByTestId(testId).clear();
        cy.findByText(/css/i).click();
        cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);
        cy.focused().should('have.attr', 'id', testId);
        if (testId === 'x-height-in-pixel') {
          cy.assertIfErrorMessageAppears('error-message-x-height');
        } else {
          cy.assertIfErrorMessageAppears('error-message-modular-scale');
        }
      });
    },
  );

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

  ['x-height-in-pixel', 'x-height-for-ratio', 'line-height-for-ratio'].forEach(
    testId => {
      it(`alerts the user if they enter more than 4 decimal places AND blur the input field, but the alert disappears when they correct it AND blur the input field, for ${testId}`, () => {
        cy.findByTestId(testId).clear();
        cy.testAlertForDecimalPlaces(testId, 'preview');
      });
      it(`alerts the user if they enter a value less than 1 AND blur the input field, but the alert disappears when they delete the invalid value AND blur the input field, for ${testId}`, () => {
        cy.findByTestId(testId).clear();
        cy.testAlertForValuesLessThanOne(testId, 'preview');
      });
      it(`alerts the user if they enter a value more than 100 AND blur the input field, but the alert disappears when they delete the last digit AND blur the input field, for ${testId}`, () => {
        cy.findByTestId(testId).clear();
        cy.testAlertForValuesMoreThanHundred(testId, 'preview');
      });
      it(`alerts the user if they enter a string AND blur the input field, but the alert disappears when they correct it AND blur the input field, for ${testId}`, () => {
        cy.findByTestId(testId).clear();
        cy.testAlertForString(testId, 'preview');
      });
    },
  );
});

describe('Preview page: Navigation bar', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
  });

  it('takes the user to the landing page after clicking number 1 in the header', () => {
    cy.findByText('1').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
  it('takes the user to the x-height page after clicking number 2 in the header', () => {
    cy.findByText('2').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });
  it('takes the user to the modular-scale page after clicking number 3 in the header', () => {
    cy.findByText('3').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
  });
  it('DOES NOT take the user to the css page after clicking number 5 in the header', () => {
    cy.findByText('5').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);
  });
  it('DOES take the user to the get CSS page after clicking number 5 in the header, if the user has already visited', () => {
    // set up
    cy.findByText(/css/i).click();
    cy.findByText('4').click();
    // execute
    cy.findByText('5').click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/css`);
  });
});

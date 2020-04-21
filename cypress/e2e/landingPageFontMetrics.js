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
  });

  it('takes the user to the x-height page after clicking the NEXT button', () => {
    // execute
    cy.findByLabelText('sxHeight').type(userInput.sxHeight);
    cy.findByLabelText('sCapHeight').type(userInput.sCapHeight);
    cy.findByLabelText('unitsPerEm').type(userInput.unitsPerEm);
    cy.findByLabelText('preferredFamily').type(userInput.preferredFamily);
    cy.findByLabelText('preferredSubfamily').type(userInput.preferredSubfamily);
    cy.findByLabelText('usWeightClass').type(userInput.usWeightClass);
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
    cy.findByLabelText('sxHeight').type(userInput.sxHeight);
    cy.findByLabelText('sCapHeight').type(userInput.sCapHeight);
    cy.findByLabelText('unitsPerEm').type(userInput.unitsPerEm);
    cy.findByLabelText('preferredFamily').type(userInput.preferredFamily);
    cy.findByLabelText('preferredSubfamily').type(userInput.preferredSubfamily);
    cy.findByLabelText('usWeightClass').type(userInput.usWeightClass);
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
    cy.findByLabelText('sxHeight').type(userInput.sxHeight);
    cy.findByLabelText('sCapHeight').type(userInput.sCapHeight);
    cy.findByLabelText('unitsPerEm').type(userInput.unitsPerEm);
    cy.findByLabelText('preferredFamily').type(userInput.preferredFamily);
    cy.findByLabelText('preferredSubfamily').type(userInput.preferredSubfamily);
    cy.findByLabelText('usWeightClass').type(userInput.usWeightClass);
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
    cy.findByLabelText('sxHeight').type(userInput.sxHeight);
    cy.findByLabelText('sCapHeight').type(userInput.sCapHeight);
    cy.findByLabelText('unitsPerEm').type(userInput.unitsPerEm);
    cy.findByLabelText('preferredFamily').type(userInput.preferredFamily);
    cy.findByLabelText('preferredSubfamily').type(userInput.preferredSubfamily);
    cy.findByLabelText('usWeightClass').type(userInput.usWeightClass);
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
    cy.findByLabelText('sxHeight').type(userInput.sxHeight);
    cy.findByLabelText('sCapHeight').type(userInput.sCapHeight);
    cy.findByLabelText('unitsPerEm').type(userInput.unitsPerEm);
    cy.findByLabelText('preferredFamily').type(userInput.preferredFamily);
    cy.findByLabelText('preferredSubfamily').type(userInput.preferredSubfamily);
    cy.findByLabelText('usWeightClass').type(userInput.usWeightClass);
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

  [
    'preferredFamily',
    'preferredSubfamily',
    'usWeightClass',
    'unitsPerEm',
    'sxHeight',
    'sCapHeight',
  ].forEach(fontMetric => {
    it(`shows an error message for ${fontMetric} if the user clicks the next button without entering its input field, and hides the error message if the use enters a valid input`, () => {
      // execute 1
      cy.findByLabelText('sxHeight').type(userInput.sxHeight);
      cy.findByLabelText('sCapHeight').type(userInput.sCapHeight);
      cy.findByLabelText('unitsPerEm').type(userInput.unitsPerEm);
      cy.findByLabelText('preferredFamily').type(userInput.preferredFamily);
      cy.findByLabelText('preferredSubfamily').type(
        userInput.preferredSubfamily,
      );
      cy.findByLabelText('usWeightClass').type(userInput.usWeightClass);
      cy.findByLabelText(fontMetric).clear();
      cy.findByText(/next/i).click();
      // verify
      cy.url().should('eq', `${Cypress.config().baseUrl}/`);
      cy.assertIfErrorMessageAppears(`error-message-${fontMetric}`);
      // execute 2
      cy.findByLabelText(fontMetric).type(userInput[fontMetric]);
      // verify
      cy.assertIfErrorMessageDisappears(`error-message-${fontMetric}`);
    });
  });

  ['usWeightClass', 'unitsPerEm', 'sxHeight', 'sCapHeight'].forEach(
    fontMetric => {
      it.only(`shows alert for ${fontMetric} if the user enters the value outside the required range, but not until the user clicks somewhere else to blur the focused input element`, () => {
        // setup
        const invalidInputValue = 0;
        const validInputValue = 1000;

        // without blurring doesn't reveal the message
        cy.findByLabelText(fontMetric).type(invalidInputValue);
        cy.assertIfErrorMessageDisappears(`error-message-${fontMetric}`);

        // blurring reveals the message
        cy.findByLabelText(fontMetric).blur();
        // verify
        cy.assertIfErrorMessageAppears(`error-message-${fontMetric}`);

        // correcting a value doesn't hide the message yet
        cy.findByLabelText(fontMetric)
          .clear()
          .type(validInputValue);
        // verify
        cy.assertIfErrorMessageAppears(`error-message-${fontMetric}`);

        // blurring finally hides the message
        cy.findByLabelText(fontMetric).blur();
        cy.assertIfErrorMessageDisappears(`error-message-${fontMetric}`);
      });
    },
  );
});

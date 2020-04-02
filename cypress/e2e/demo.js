describe('Demo', () => {
  it('styles sample paragraphs correctly, allows the user to change styles on the preview page, and then shows the CSS code correctly', () => {
    // setup
    const fontFamily = `Open Sans`;
    const fontWeight = `400`;
    const userData = {
      xHeight: 10,
      xHeightRatio: 1,
      lineHeightRatio: 3,
    };
    const OpenSansFontMetrics = {
      unitsPerEm: 2048,
      sxHeight: 1096,
    };
    const fontSize = xHeight => {
      return (
        xHeight *
        (OpenSansFontMetrics.unitsPerEm / OpenSansFontMetrics.sxHeight)
      ).toFixed(4);
    };
    const lineHeight = (xHeight, lineHeightRatio, xHeightRatio) => {
      return (
        (xHeight * (lineHeightRatio / xHeightRatio)) /
        fontSize(xHeight)
      ).toFixed(4);
    };
    // execute
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByLabelText(/x-height/i).type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByLabelText(/x-height/i).type(userData.xHeightRatio);
    cy.findByLabelText(/line-height/i, {selector: 'input'}).type(
      userData.lineHeightRatio,
    );
    cy.findByText(/preview/i).click();
    cy.findByTestId('sampleParagraphs')
      .should('have.css', 'font-family', `"${fontFamily}"`)
      .should('have.css', 'font-size', `${fontSize(userData.xHeight)}px`)
      .should('have.css', 'font-weight', fontWeight)
      .should(
        'have.css',
        'line-height',
        `${(
          fontSize(userData.xHeight) *
          lineHeight(
            userData.xHeight,
            userData.lineHeightRatio,
            userData.xHeightRatio,
          )
        ).toFixed(4)}px`,
      );
    cy.findByText(/css/i).click();
    // verify
    cy.findByTestId('cssCode')
      .contains(`font-family: '${fontFamily}'`)
      .contains(`font-weight: ${fontWeight}`)
      .contains(`font-size: ${fontSize(userData.xHeight)}px`)
      .contains(
        `line-height: ${lineHeight(
          userData.xHeight,
          userData.lineHeightRatio,
          userData.xHeightRatio,
        )}`,
      );
    // setup for changing inputs
    const newUserData = {
      xHeight: 11,
      xHeightRatio: 2,
      lineHeightRatio: 5,
    };
    // execute
    cy.findByText(/preview/i).click();
    cy.findByTestId('x-height-in-pixel')
      .should('have.value', userData.xHeight.toString())
      .clear()
      .type(newUserData.xHeight)
      .should('have.value', newUserData.xHeight.toString());
    cy.findByTestId('sampleParagraphs').should(
      'have.css',
      'font-size',
      `${fontSize(newUserData.xHeight)}px`,
    );
    cy.findByTestId('x-height-for-ratio')
      .should('have.value', userData.xHeightRatio.toString())
      .clear()
      .type(newUserData.xHeightRatio)
      .should('have.value', newUserData.xHeightRatio.toString());
    cy.findByTestId('sampleParagraphs').should(
      'have.css',
      'line-height',
      `${(
        fontSize(newUserData.xHeight) *
        lineHeight(
          newUserData.xHeight,
          userData.lineHeightRatio,
          newUserData.xHeightRatio,
        )
      ).toFixed(4)}px`,
    );
    cy.findByTestId('line-height-for-ratio')
      .should('have.value', userData.lineHeightRatio.toString())
      .type(`{backspace}${newUserData.lineHeightRatio}`)
      .should('have.value', newUserData.lineHeightRatio.toString());
    cy.findByTestId('sampleParagraphs').should(
      'have.css',
      'line-height',
      `${(
        fontSize(newUserData.xHeight) *
        lineHeight(
          newUserData.xHeight,
          newUserData.lineHeightRatio,
          newUserData.xHeightRatio,
        )
      ).toFixed(4)}px`,
    );
    cy.findByText(/css/i).click();
    // verify
    cy.findByTestId('cssCode')
      .contains(`font-family: '${fontFamily}'`)
      .contains(`font-weight: ${fontWeight}`)
      .contains(`font-size: ${fontSize(newUserData.xHeight)}px`)
      .contains(
        `line-height: ${lineHeight(
          newUserData.xHeight,
          newUserData.lineHeightRatio,
          newUserData.xHeightRatio,
        )}`,
      );
  });
});

describe('Demo', () => {
  it('styles sample paragraphs correctly and then shows the CSS code correctly', () => {
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
    const fontSize = (
      userData.xHeight *
      (OpenSansFontMetrics.unitsPerEm / OpenSansFontMetrics.sxHeight)
    ).toFixed(4);
    const lineHeight = (
      (userData.xHeight * (userData.lineHeightRatio / userData.xHeightRatio)) /
      fontSize
    ).toFixed(4);
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
      .should('have.css', 'font-size', `${fontSize}px`)
      .should('have.css', 'font-weight', fontWeight)
      .should(
        'have.css',
        'line-height',
        `${(fontSize * lineHeight).toFixed(4)}px`,
      );
    cy.findByText(/css/i).click();
    // verify
    cy.findByTestId('cssCode')
      .contains(`font-family: '${fontFamily}'`)
      .contains(`font-weight: ${fontWeight}`)
      .contains(`font-size: ${fontSize}px`)
      .contains(`line-height: ${lineHeight}`);
  });
});

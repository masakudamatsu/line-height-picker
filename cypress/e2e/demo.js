describe('Demo', () => {
  it('shows the CSS code correctly', () => {
    // setup
    const fontFamily = `font-family: 'Open Sans'`;
    const fontWeight = `font-weight: 400`;
    const userData = {
      xHeight: 10,
      xHeightRatio: 1,
      lineHeightRatio: 3,
    };
    const OpenSansFontMetrics = {
      unitsPerEm: 2048,
      sxHeight: 1096,
    };
    const fontSizeValue = (
      userData.xHeight *
      (OpenSansFontMetrics.unitsPerEm / OpenSansFontMetrics.sxHeight)
    ).toFixed(4);
    const fontSize = `font-size: ${fontSizeValue}px`;
    const lineHeight = `line-height: ${(
      (userData.xHeight * (userData.lineHeightRatio / userData.xHeightRatio)) /
      fontSizeValue
    ).toFixed(4)}`;
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
    cy.findByText(/css/i).click();
    // verify
    cy.findByTestId('cssCode')
      .contains(fontFamily)
      .contains(fontWeight)
      .contains(fontSize)
      .contains(lineHeight);
  });
});

describe('Demo', () => {
  it('shows the CSS code correctly', () => {
    const fontFamily = `font-family: 'Open Sans'`;
    const fontWeight = `font-weight: 400`;
    const userData = {
      xHeight: 10,
    };
    const OpenSansFontMetrics = {
      unitsPerEm: 2048,
      sxHeight: 1096,
    };
    const fontSize = `font-size: ${(
      (userData.xHeight * OpenSansFontMetrics.unitsPerEm) /
      OpenSansFontMetrics.sxHeight
    ).toFixed(4)}px`;
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByLabelText(/x-height/i).type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByText(/preview/i).click();
    cy.findByText(/css/i).click();
    cy.findByTestId('cssCode')
      .contains(fontFamily)
      .contains(fontWeight)
      .contains(fontSize);
  });
});

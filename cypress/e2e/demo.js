describe('Demo', () => {
  it('shows the CSS code correctly', () => {
    const fontFamily = `font-family: 'Open Sans'`;
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByText(/scale/i).click();
    cy.findByText(/preview/i).click();
    cy.findByText(/css/i).click();
    cy.findByTestId('cssCode').contains(fontFamily);
  });
});

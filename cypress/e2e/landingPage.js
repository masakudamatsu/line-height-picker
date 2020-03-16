describe('Landing Page', () => {
  it('shows the UI components correctly', () => {
    cy.visit('/')
      .get('h1')
      .should('have.text', 'Line-height Picker');
  });
});

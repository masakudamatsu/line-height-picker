describe('Landing Page', () => {
  it('shows the UI components correctly', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Line-height Picker');
    cy.findByTitle(/logo/i).should('exist');
    cy.findByTestId('description').should('exist');
    cy.findByText(/upload/i).should('exist');
    cy.findByText(/demo/i).should('exist');
    cy.findByTestId('footer').should('exist');
  });

  it('allows the user to choose x-height after clicking the demo button', () => {
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.findByText(/x-height/i).should('exist');
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });
});

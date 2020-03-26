describe('The 404 Page', () => {
  it('shows up when the URL contains random text', () => {
    cy.visit('/random-text');
    cy.findByText(/404/).should('exist');
    cy.get('h1').should('have.text', 'Line-height Picker');
    cy.findByTitle(/logo/i).should('exist');
  });
  it('guides the user to the landing page', () => {
    cy.visit('/random-text');
    cy.findByText(/click/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.findByTitle(/logo/i).should('exist');
    cy.findByTestId('description').should('exist');
    cy.findByText(/upload/i).should('exist');
    cy.findByText(/demo/i).should('exist');
    cy.findByTestId('footer').should('exist');
  });
  it('shows other UI components', () => {
    cy.visit('/random-text');
    cy.findByTestId('footer').should('exist');
  });
});
describe('The 404 Page', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/random-text');
  });

  it('shows up when the URL contains random text', () => {
    cy.findByText(/404/).should('exist');
    cy.get('h1').should('have.text', 'Line-height Picker');
    cy.findByTitle(/logo/i).should('exist');
  });
  it('guides the user to the landing page', () => {
    cy.findByText(/click/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
  it('shows other UI components', () => {
    cy.findByTestId('footer').should('exist');
  });
});

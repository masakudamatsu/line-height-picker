describe('X-height page', () => {
  it('shows the UI components correctly', () => {
    cy.visit('/x-height');
    cy.checkHeaderFooterRendering();
    cy.findByLabelText(/x-height/i).should('exist');
    cy.findByTestId('FontNameDisplay').should('exist');
    cy.findByText(/change font/i).should('exist');
  });

  it('takes the user to the modular-scale page after clicking the button for it', () => {
    cy.visit('/x-height');
    cy.findByText(/scale/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
  });
});

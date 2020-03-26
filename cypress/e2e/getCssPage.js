describe('Get CSS Page', () => {
  it('shows the UI components correctly', () => {
    cy.visit('/css');
    cy.checkHeaderFooterRendering(); // See support/commands.js
    cy.findByText(/css/i, {selector: 'h2'}).should('exist');
    cy.findByTestId('cssCode').should('exist');
    cy.findByText(/copy/i).should('exist');
  });

  it('takes the user back to the preview page after clicking the button for it', () => {
    cy.visit('/css');
    cy.findByText(/preview/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);
  });
});

describe('Get CSS Page', () => {
  beforeEach(() => {
    cy.visit('/css');
  });

  it('shows the non-interactive UI components correctly', () => {
    cy.checkHeaderFooterRendering(); // See support/commands.js
    cy.findByText(/css/i, {selector: 'h2'}).should('exist');
    cy.findByTestId('cssCode').should('exist');
    cy.findByTestId('copy-button').should('exist');
  });

  it('allows the user to copy the CSS code onto their clipboard', () => {
    // This feature cannot be tested with Cypress. See https://github.com/cypress-io/cypress/issues/2752
  });

  it('takes the user back to the preview page after clicking the button for it', () => {
    cy.findByText(/preview/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);
  });
});

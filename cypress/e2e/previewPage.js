describe('Preview Page', () => {
  it('shows the UI components correctly', () => {
    cy.visit('/preview');
    cy.checkHeaderFooterRendering(); // See support/commands.js
    cy.findByText(/preview/i).should('exist');
    cy.findByTestId('sampleParagraph1').should('exist');
    cy.findByTestId('sampleParagraph2').should('exist');
    cy.findByText(/excerpt/i).should('exist');
    cy.findByTestId('FontNameDisplay').should('exist');
    cy.findByText(/change font/i).should('exist');
    cy.findAllByLabelText(/x-height/i).should('exist');
    cy.findByLabelText(/line-height/i, {selector: 'input'}).should('exist');
  });

  it('takes the user to the CSS page after clicking the button for it', () => {
    cy.visit('/preview');
    cy.findByText(/css/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/css`);
  });
});

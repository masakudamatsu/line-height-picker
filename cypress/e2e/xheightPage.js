describe('X-height page', () => {
  it('shows the UI components correctly', () => {
    cy.visit('/x-height');
    cy.checkHeaderFooterRendering();
    cy.findByLabelText(/x-height/i).should('exist');
    cy.findByTestId('FontNameDisplay').should('exist');
  });

  it('allows the user to change font by clicking the "change font" button', () => {
    // Setup
    const fontFileName = 'RobotoSlab-Light.ttf';
    const expectedFontName = 'Roboto Slab';

    // Execute
    cy.visit('/x-height');
    cy.findByText(/change font/i).click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // Verify
    cy.findByTestId('UserDataDisplay').should('have.text', expectedFontName);
  });

  it('takes the user to the modular-scale page after clicking the button for it', () => {
    cy.visit('/x-height');
    cy.findByText(/scale/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
  });
});

describe('Preview Page', () => {
  beforeEach(() => {
    cy.visit('/preview');
  });

  it('shows the UI components correctly', () => {
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

  it('allows the user to change font by clicking the "change font" button', () => {
    // Setup
    const fontFileName = 'RobotoSlab-Light.ttf';
    const expectedFontName = 'Roboto Slab';

    // Execute
    cy.findByText(/change font/i).click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // verify
    cy.findByTestId('UserDataDisplay').should('have.text', expectedFontName);
  });

  it('takes the user to the CSS page after clicking the button for it', () => {
    cy.findByText(/css/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/css`);
  });
});

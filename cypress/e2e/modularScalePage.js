describe('Modular Scale Page', () => {
  it('shows the UI components correctly', () => {
    cy.visit('/modular-scale');
    cy.checkHeaderFooterRendering(); // See support/commands.js
    cy.findByText(/pick modular scale/i).should('exist');
    cy.findByLabelText(/line-height/i, {selector: 'input'}).should('exist');
    cy.findByLabelText(/x-height/i).should('exist');
    cy.findByTestId('FontNameDisplay').should('exist');
    cy.findByText(/change font/i).should('exist');
    cy.findByTestId('XheightDisplay').should('exist');
  });

  it('shows the x-height value chosen', () => {
    // setup
    const userData = {
      xHeight: 10,
    };
    // execute
    cy.visit('/x-height');
    cy.findByLabelText(/x-height/i).type(userData.xHeight);
    cy.findByText(/scale/i).click();
    // verify
    cy.findByTestId('XheightDisplay').contains(`${userData.xHeight}px`);
  });

  it('allows the user to change font by clicking the "change font" button', () => {
    // Setup
    const fontFileName = 'RobotoSlab-Light.ttf';
    const expectedFontName = 'Roboto Slab';

    // Execute
    cy.visit('/modular-scale');
    cy.findByText(/change font/i).click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // Verify
    cy.findByTestId('UserDataDisplay').should('have.text', expectedFontName);
  });

  it('takes the user to the preview page after clicking the button for it', () => {
    cy.visit('/modular-scale');
    cy.findByText(/preview/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);
  });

  it('takes the user back to the x-height page after clicking the button for it', () => {
    cy.visit('/modular-scale');
    cy.findByText(/x-height/i, {selector: 'a'}).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });
});

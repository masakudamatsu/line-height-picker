describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows the UI components correctly', () => {
    cy.get('h1').should('have.text', 'Line-height Picker');
    cy.findByTitle(/logo/i).should('exist');
    cy.findByTestId('description').should('exist');
    cy.findByText(/upload/i).should('exist');
    cy.findByText(/demo/i).should('exist');
    cy.findByTestId('footer').should('exist');
  });

  it('Clicking the demo button takes users to x-height page and shows "Open Sans" as the chosen font name in all subsequent pages', () => {
    // set up
    const expectedFontName = 'Open Sans';
    const expectedFontWeightName = 'Regular';
    const expectedFontWeight = '400';
    // execute
    cy.findByText(/demo/i).click();
    // verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.assertFontNameFromXheightPageOn(
      expectedFontName,
      expectedFontWeightName,
      expectedFontWeight,
    );
  });

  it('Uploading a font file takes uers to x-height page and shows its font name in all successive pages', () => {
    // Setup
    const fontFileName = 'RobotoSlab-Light.ttf';
    const expectedFontName = 'Roboto Slab';
    const expectedFontWeightName = 'Light';
    const expectedFontWeight = '300';
    // execute
    cy.findByText(/upload/i).click(); // Just to make sure that the user can find and then click the upload button. This command does not launch the file upload dialog box in Cypress. So we need the next command:
    cy.upload('hiddenFileInput', fontFileName); // see support/commands.js

    // Verify
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
    cy.assertFontNameFromXheightPageOn(
      expectedFontName,
      expectedFontWeightName,
      expectedFontWeight,
    );
  });
});

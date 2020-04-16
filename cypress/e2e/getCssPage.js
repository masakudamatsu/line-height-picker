const userData = {
  xHeight: 10,
  xHeightRatio: 1,
  lineHeightRatio: 3,
};

describe('Get CSS Page', () => {
  beforeEach(() => {
    cy.visit('/x-height');
    cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
    cy.findByText(/scale/i).click();
    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
    cy.findByText(/preview/i).click();
    cy.findByText(/css/i).click();
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

  it('takes the user to the landing page after clicking number 1 in the header', () => {
    cy.findByText('1').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
  it('takes the user to the x-height page after clicking number 2 in the header', () => {
    cy.findByText('2').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });
  it('takes the user to the modular-scale page after clicking number 3 in the header', () => {
    cy.findByText('3').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);
  });
  it('takes the user to the modular-scale page after clicking number 4 in the header', () => {
    cy.findByText('4').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);
  });
});

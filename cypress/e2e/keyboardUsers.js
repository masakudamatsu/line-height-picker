describe('Keyboard users', () => {
  const userData = {
    xHeight: 10,
    xHeightRatio: 1,
    lineHeightRatio: 3,
  };

  beforeEach(() => {
    sessionStorage.clear();
  });

  it('can get the CSS code with the Enter Key only', () => {
    cy.visit('/');
    cy.findByTestId('demo-start-button').click();
    cy.findByTestId('x-height-in-pixel').type(`${userData.xHeight}{enter}`);
    cy.url().should('eq', `${Cypress.config().baseUrl}/modular-scale`);

    cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
    cy.findByTestId('line-height-for-ratio').type(
      `${userData.lineHeightRatio}{enter}`,
    );
    cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);

    cy.findByTestId('get-css-code-button').type('{enter}', {force: true});
    cy.url().should('eq', `${Cypress.config().baseUrl}/css`);
  });
});

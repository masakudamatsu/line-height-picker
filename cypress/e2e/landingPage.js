describe('Landing Page', () => {
  it('shows the UI components correctly', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Line-height Picker');
    cy.findByTitle(/logo/i).should('exist');
    cy.findByTestId('description').should('exist');
    cy.findByText(/upload/i).should('exist');
    cy.findByText(/demo/i).should('exist');
    cy.findByTestId('footer').should('exist');
  });

  it('takes the user to the x-height page after clicking the demo button', () => {
    cy.visit('/');
    cy.findByText(/demo/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });
});

Cypress.Commands.add('checkHeaderFooterRendering', () => {
  cy.get('h1').should('have.text', 'Line-height Picker');
  cy.findByTitle(/logo/i).should('exist');
  cy.findByTestId('stepIndicator').should('exist');
  cy.findByTestId('footer').should('exist');
});

describe('X-height page', () => {
  it('shows the UI components correctly', () => {
    cy.checkHeaderFooterRendering();
    cy.visit('/x-height');
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

describe('Modular Scale Page', () => {
  it('shows the UI components correctly', () => {
    cy.visit('/modular-scale');
    cy.checkHeaderFooterRendering();
    cy.findByTestId('FontNameDisplay').should('exist');
    cy.findByText(/change font/i).should('exist');
  });

  it('takes the user to the preview page after clicking the button for it', () => {
    cy.visit('/modular-scale');
    cy.findByText(/preview/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/preview`);
  });

  it('takes the user back to the x-height page after clicking the button for it', () => {
    cy.visit('/modular-scale');
    cy.findByText(/x-height/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/x-height`);
  });
});

describe('The 404 Page', () => {
  it('shows up when the URL contains random text', () => {
    cy.visit('/random-text');
    cy.findByText(/404/).should('exist');
    cy.get('h1').should('have.text', 'Line-height Picker');
    cy.findByTitle(/logo/i).should('exist');
  });
  it('guides the user to the landing page', () => {
    cy.visit('/random-text');
    cy.findByText(/click/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.findByTitle(/logo/i).should('exist');
    cy.findByTestId('description').should('exist');
    cy.findByText(/upload/i).should('exist');
    cy.findByText(/demo/i).should('exist');
    cy.findByTestId('footer').should('exist');
  });
  it('shows other UI components', () => {
    cy.visit('/random-text');
    cy.findByTestId('footer').should('exist');
  });
});

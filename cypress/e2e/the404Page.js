import {pageTitle} from '../../src/helper/metaData';

describe('The 404 Page', () => {
  beforeEach(() => {
    sessionStorage.clear();
    cy.visit('/random-text');
  });

  it('shows up when the URL contains random text', () => {
    cy.findByText(/We cannot find the page you are looking for/i).should(
      'exist',
    );
    cy.title().should('eq', pageTitle.notFound);
    cy.get('h1').should('have.text', pageTitle.notFound);
    cy.findByAltText(/logo/i).should('exist');
  });

  it('guides the user to the landing page', () => {
    cy.findByText(/landing page/i).click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });

  it('shows other UI components', () => {
    cy.findByTestId('footer').should('exist');
  });

  it('prevents search engines from crawling', () => {
    cy.get('head meta[name="robots"]').should(
      'have.attr',
      'content',
      'noindex',
    );
  });
});

describe('Visual regression tests', () => {
  const userData = {
    xHeight: 10,
    xHeightRatio: 1,
    lineHeightRatio: 3,
  };

  const screenSizes = [
    [320, 900], // narrowest screen
    [480, 900], // side margin increases at 480px
    [720, 900], // side margin increases at 720px
    [728, 900], // font-size increases at 728px
    [799, 900], // two-column layout from 799px
    [1080, 900], // side margin increases at 1080px
  ];

  screenSizes.forEach(screenSize => {
    describe(`${screenSize[0]}px wide screen`, () => {
      beforeEach(() => {
        sessionStorage.clear();
        cy.setResolution(screenSize);
        cy.visit('/');
      });

      it('Landing page', () => {
        cy.matchImageSnapshot(`landing-page-${screenSize[0]}px`);
      });

      it('X-height page', () => {
        cy.findByTestId('demo-start-button').click();

        cy.matchImageSnapshot(`x-height-page-${screenSize[0]}px`);
      });

      it('Modular-scale page', () => {
        cy.findByTestId('demo-start-button').click();
        cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
        cy.findByText(/next/i).click();

        cy.matchImageSnapshot(`modular-scale-page-${screenSize[0]}px`);
      });

      it('Preview page', () => {
        cy.findByTestId('demo-start-button').click();
        cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
        cy.findByText(/next/i).click();
        cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
        cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
        cy.findByText(/preview/i).click();

        cy.matchImageSnapshot(`preview-page-${screenSize[0]}px`);
      });

      it('CSS page', () => {
        cy.findByTestId('demo-start-button').click();
        cy.findByTestId('x-height-in-pixel').type(userData.xHeight);
        cy.findByText(/next/i).click();
        cy.findByTestId('x-height-for-ratio').type(userData.xHeightRatio);
        cy.findByTestId('line-height-for-ratio').type(userData.lineHeightRatio);
        cy.findByText(/preview/i).click();
        cy.findByTestId('get-css-code-button').click();

        cy.matchImageSnapshot(`css-page-${screenSize[0]}px`);
      });
    });
  });
});

describe('Visual regression tests', () => {
  const screenSizes = [
    [320, 900],
    // [480, 900],
    // [720, 900],
    // [799, 900],
    [1080, 900],
    // [1920, 1080],
  ];

  screenSizes.forEach(screenSize => {
    describe(`Landing page on ${screenSize[0]}px wide screen`, () => {
      before(() => {
        cy.setResolution(screenSize);
        cy.visit('/');
      });

      it('Landing page', () => {
        cy.matchImageSnapshot(`landing-page-${screenSize[0]}px`);
      });

      it('Landing page: header', () => {
        cy.findByTestId('header').matchImageSnapshot(
          `landing-page-header-${screenSize[0]}px`,
        );
      });

      it('Landing page: logo', () => {
        cy.findByTestId('logo').matchImageSnapshot(
          `landing-page-logo-${screenSize[0]}px`,
        );
      });

      it('Landing page: buttons', () => {
        cy.findByTestId('buttons').matchImageSnapshot(
          `landing-page-buttons-${screenSize[0]}px`,
        );
      });

      it('Landing page: about', () => {
        cy.findByTestId('about').matchImageSnapshot(
          `landing-page-about-${screenSize[0]}px`,
        );
      });

      it('Landing page: footer', () => {
        cy.findByTestId('footer').matchImageSnapshot(
          `landing-page-about-${screenSize[0]}px`,
        );
      });
    });
  });
});

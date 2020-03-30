import 'cypress-file-upload';

describe('Uploading a font file', () => {
  it('shows the font name', () => {
    // Setup
    const fontFileName = 'OpenSans-Regular.ttf';
    const expectedFontName = 'Open Sans';
    cy.visit('/');
    cy.findByText(/upload/i).attachFile({
      filePath: fontFileName,
    });
    cy.findByText(/demo/i).click();
    // Verify
    cy.contains(expectedFontName);
  });
});

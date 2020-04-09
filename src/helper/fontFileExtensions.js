export const fontFileExtensionsArray = ['.ttf', '.otf', '.woff'];

// Helper function to add the escape key (backward slash) to special Regex characters
// See https://makandracards.com/makandra/15879-javascript-how-to-generate-a-regular-expression-from-a-string
RegExp.escape = function(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

// Convert the list of file extensions into regex
// It will obtain /(\.ttf|\.otf|\.woff)$/i
fontFileExtensionsArray
  .map(fontFileExtension => {
    return RegExp.escape(fontFileExtension);
  })
  .join('|');

export const fontFileExtensionsRegex = RegExp(
  `(${fontFileExtensionsArray
    .map(fontFileExtension => {
      return RegExp.escape(fontFileExtension); // Replace . with \. for Regex
    })
    .join('|')})$`,
  'i',
);

import React from 'react';
import {ExternalLink} from '../theme/style';
export const fileExtensionError = {
  whatHappened: (
    <>
      Our webapp only works with the font files whose name ends with .otf, .ttf,
      or .woff.
    </>
  ),
  howToResolve: (
    <>
      Please select an OpenType Font file (ending with .otf), TrueType Font file
      (.ttf), or Web Open Font Format file (.woff).
    </>
  ),
  extraText: (
    <>
      For more detail on font files, have a look at{' '}
      <ExternalLink href="https://www.suttle-straus.com/blog/a-simple-guide-to-font-file-types">
        “A Simple Guide To Font File Types”
      </ExternalLink>
      , written by Amy Olson in 2017.
    </>
  ),
};

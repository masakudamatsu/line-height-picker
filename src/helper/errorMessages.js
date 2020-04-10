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

export const fileReaderApiError = {
  whatHappened: <>The browser cannot open the file you have selected.</>,
  howToResolve: (
    <>
      The file may be broken. Obtain another copy from the font foundry. If your
      browser is Opera Mini, we suggest using another browser such as Chrome and
      FireFox.
    </>
  ),
  extraText: (
    <>
      Our webapp uses the File Reader API to read your font file data. For the
      list of browsers that support the File Reader API, see{' '}
      <ExternalLink href="https://caniuse.com/#feat=filereader">
        Can I Use?
      </ExternalLink>
    </>
  ),
};

export const opentypeParseError = {
  whatHappened: (
    <>
      Opentype.js, the application that powers our webapp, cannot open the file
      you have selected.
    </>
  ),
  howToResolve: (
    <>
      Please upload an OpenType Font file (.otf), TrueType Font file (.ttf), or
      Web Open Font Format file (.woff). The file may be broken. Obtain another
      copy from the font foundry.
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

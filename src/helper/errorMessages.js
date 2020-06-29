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
      Opentype.js—the application that powers our webapp—cannot open the file
      you have selected.
    </>
  ),
  howToResolve: (
    <>
      Please select an OpenType Font file (.otf), TrueType Font file (.ttf), or
      Web Open Font Format file (.woff). Alternatively, obtain another copy from
      the font foundry because the selected file may be broken.
    </>
  ),
  extraText: (
    <>
      For more detail on font files, have a look at{' '}
      <ExternalLink href="https://www.suttle-straus.com/blog/a-simple-guide-to-font-file-types">
        “A Simple Guide To Font File Types”
      </ExternalLink>
      —written by Amy Olson in 2017.
    </>
  ),
};

export const fontFaceApiError = {
  whatHappened: <>The browser cannot render the font you have selected.</>,
  howToResolve: (
    <>
      The file may be broken. Obtain another copy from the font foundry. A
      different browser may solve the problem. We suggest using Chrome (35 or
      later), Edge (version 79 or later), Firefox (41 or later), Opera (22 or
      later), or Safari (10 or later).
    </>
  ),
  extraText: (
    <>
      Our webapp uses the Font Face API to render the font the user selects. For
      the list of browsers that support the Font Face API, see{' '}
      <ExternalLink href="https://caniuse.com/#feat=mdn-api_fontface">
        Can I Use?
      </ExternalLink>
    </>
  ),
};

export const clipboardError = {
  whatHappened: (
    <>The browser doesn't allow us to copy the CSS code into your clipboard.</>
  ),
  howToResolve: (
    <>Please select the CSS code on your own to copy and paste it.</>
  ),
  // We don't use this message.
  extraText: (
    <>
      Alternatively, consider using the browsers that support the "click to copy
      into clipboard" feature: Edge (version 79 or later), Chrome (76 or later),
      Opera (63 or later). See{' '}
      <ExternalLink href="https://caniuse.com/#feat=mdn-api_fontface">
        Can I Use?
      </ExternalLink>{' '}
      for the latest list of supporting browsers.
    </>
  ),
};

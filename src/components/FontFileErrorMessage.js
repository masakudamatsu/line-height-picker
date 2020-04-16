import React from 'react';
import PropTypes from 'prop-types';

import {ParagraphOneRem, Section} from '../theme/style';
import {
  fileExtensionError,
  fileReaderApiError,
  opentypeParseError,
  fontFaceApiError,
} from '../helper/errorMessages';

const FontFileErrorMessage = props => {
  let errorMessage = {};
  switch (props.fontFileError) {
    case 'fileExtension':
      errorMessage = {...fileExtensionError};
      break;
    case 'fileReaderApi':
      errorMessage = {...fileReaderApiError};
      break;
    case 'opentypeParse':
      errorMessage = {...opentypeParseError};
      break;
    case 'fontFaceApi':
      errorMessage = {...fontFaceApiError};
      break;
    default:
      break;
  }
  return (
    <Section data-testid="error-message-font-file">
      <ParagraphOneRem id="whatHappened-fontFile" errorText>
        {errorMessage.whatHappened}
      </ParagraphOneRem>
      <ParagraphOneRem id="howToResolve-fontFile" errorText>
        {errorMessage.howToResolve}
      </ParagraphOneRem>
      <ParagraphOneRem id="extraText-fontFile" errorText>
        {errorMessage.extraText}
      </ParagraphOneRem>
    </Section>
  );
};

FontFileErrorMessage.propTypes = {
  fontFileError: PropTypes.string.isRequired,
};

export default FontFileErrorMessage;

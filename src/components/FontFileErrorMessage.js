import React from 'react';
import PropTypes from 'prop-types';

import {
  AlertIcon,
  AlertMessage,
  FontFileErrorWrapper,
  ParagraphOneRem,
  SpacerVertical,
} from '../theme/style';
import {
  fileExtensionError,
  fileReaderApiError,
  opentypeParseError,
  fontFaceApiError,
} from '../helper/errorMessages';

const FontFileErrorMessage = props => {
  let errorMessage = {};
  let fontFileError = false;
  switch (props.fontFileError) {
    case 'fileExtension':
      errorMessage = {...fileExtensionError};
      fontFileError = true;
      break;
    case 'fileReaderApi':
      errorMessage = {...fileReaderApiError};
      fontFileError = true;
      break;
    case 'opentypeParse':
      errorMessage = {...opentypeParseError};
      fontFileError = true;
      break;
    case 'fontFaceApi':
      errorMessage = {...fontFaceApiError};
      fontFileError = true;
      break;
    default:
      errorMessage = {};
      fontFileError = false;
      break;
  }
  return (
    <FontFileErrorWrapper
      fontFileError={fontFileError}
      data-testid="error-message-font-file"
    >
      <SpacerVertical height="2" />
      <AlertMessage error={true}>
        <AlertIcon />
        <div>
          <ParagraphOneRem id="whatHappened-fontFile" errorText>
            {errorMessage.whatHappened}
          </ParagraphOneRem>
          <SpacerVertical height="2" />
          <ParagraphOneRem id="howToResolve-fontFile" errorText>
            {errorMessage.howToResolve}
          </ParagraphOneRem>
          <SpacerVertical height="2" />
          <ParagraphOneRem id="extraText-fontFile" errorText>
            {errorMessage.extraText}
          </ParagraphOneRem>
        </div>
      </AlertMessage>
    </FontFileErrorWrapper>
  );
};

FontFileErrorMessage.propTypes = {
  fontFileError: PropTypes.string.isRequired,
};

export default FontFileErrorMessage;

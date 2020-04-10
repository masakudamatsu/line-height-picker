import React from 'react';
import {ParagraphOneRem, Section} from '../theme/style';
import {
  fileExtensionError,
  fileReaderApiError,
  opentypeParseError,
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
    default:
      break;
  }
  return (
    <Section data-testid="error-message-font-file">
      <ParagraphOneRem errorText>{errorMessage.whatHappened}</ParagraphOneRem>
      <ParagraphOneRem errorText>{errorMessage.howToResolve}</ParagraphOneRem>
      <ParagraphOneRem errorText>{errorMessage.extraText}</ParagraphOneRem>
    </Section>
  );
};

export default FontFileErrorMessage;

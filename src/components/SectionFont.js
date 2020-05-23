import React from 'react';
import PropTypes from 'prop-types';

import FontFileErrorMessage from './FontFileErrorMessage';
import FontFileUploader from './FontFileUploader';
import FontNameDisplay from './FontNameDisplay';

import {
  ButtonContainer,
  Section,
  SectionTitle,
  SectionTitleWrapper,
  Spacer,
} from '../theme/style';

const SectionFont = props => {
  return (
    <Section>
      <SectionTitleWrapper>
        <Spacer height="3" />
        <SectionTitle>Font chosen:</SectionTitle>
        <Spacer height="2" />
      </SectionTitleWrapper>
      <FontNameDisplay
        ascender={props.ascender}
        capHeight={props.capHeight}
        descender={props.descender}
        fontFamily={props.fontFamily}
        fontSubfamily={props.fontSubfamily}
        fontWeight={props.fontWeight}
        unitsPerEm={props.unitsPerEm}
      />
      <ButtonContainer>
        <Spacer height="2" />
        <FontFileUploader
          handleFontFile={props.handleFontFile}
          validateFileType={props.validateFileType}
        >
          Change font…
        </FontFileUploader>
        <FontFileErrorMessage
          data-testid="error-message-font-file"
          fontFileError={props.fontFileError}
        />
      </ButtonContainer>
      <Spacer height="3" />
    </Section>
  );
};

SectionFont.propTypes = {
  ascender: PropTypes.number,
  capHeight: PropTypes.number,
  descender: PropTypes.number,
  fontFamily: PropTypes.string,
  fontFileError: PropTypes.string.isRequired,
  fontSubfamily: PropTypes.string,
  fontWeight: PropTypes.string,
  handleFontFile: PropTypes.func.isRequired,
  unitsPerEm: PropTypes.number,
  validateFileType: PropTypes.func.isRequired,
};

export default SectionFont;

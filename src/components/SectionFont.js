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
} from '../theme/style';

const SectionFont = props => {
  return (
    <Section includeDisplay>
      <SectionTitleWrapper displayBelow displayTop>
        <SectionTitle aboveDisplay>Font chosen:</SectionTitle>
      </SectionTitleWrapper>
      <FontNameDisplay
        fontFamily={props.fontFamily}
        fontSubfamily={props.fontSubfamily}
        fontWeight={props.fontWeight}
      />
      <ButtonContainer displayBottom>
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
    </Section>
  );
};

SectionFont.propTypes = {
  fontFamily: PropTypes.string,
  fontFileError: PropTypes.string.isRequired,
  fontSubfamily: PropTypes.string,
  fontWeight: PropTypes.string,
  handleFontFile: PropTypes.func.isRequired,
  validateFileType: PropTypes.func.isRequired,
};

export default SectionFont;

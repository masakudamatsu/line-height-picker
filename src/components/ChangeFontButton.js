import React from 'react';
import PropTypes from 'prop-types';

import FontFileUploader from './FontFileUploader';

const ChangeFontButton = props => {
  return (
    <FontFileUploader
      validateFileType={props.validateFileType}
      handleFontFile={props.handleFontFile}
    >
      Change Font
    </FontFileUploader>
  );
};

ChangeFontButton.propTypes = {
  handleFontFile: PropTypes.func.isRequired,
  validateFileType: PropTypes.func.isRequired,
};

export default ChangeFontButton;

import React from 'react';
import FontFileUploader from './FontFileUploader';

const ChangeFontButton = props => {
  return (
    <FontFileUploader handleFontFile={props.handleFontFile}>
      Change Font
    </FontFileUploader>
  );
};
export default ChangeFontButton;

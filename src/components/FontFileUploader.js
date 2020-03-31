import React from 'react';
import {Button, NoWrap} from '../theme/style';

const FontFileUploader = props => {
  const handleClick = event => {
    document.getElementById('hiddenFileInput').click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFontFile(fileUploaded);
  };
  return (
    <>
      <Button onClick={handleClick}>
        <span>Upload</span>
        <NoWrap>Font File</NoWrap>
      </Button>
      <input
        type="file"
        data-testid="hiddenFileInput"
        id="hiddenFileInput"
        onChange={handleChange}
        style={{display: 'none'}}
      />
    </>
  );
  // See the section "Using hidden file input elements using the click() method” in https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
};
export default FontFileUploader;

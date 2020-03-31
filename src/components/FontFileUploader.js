import React from 'react';
import {Redirect} from 'react-router';
import {Button, NoWrap} from '../theme/style';

const FontFileUploader = props => {
  const [redirect, setRedirect] = React.useState(false);
  const handleClick = event => {
    document.getElementById('hiddenFileInput').click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFontFile(fileUploaded);
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect push to="/x-height" />;
    // The push attribute keeps the browser history, instead of overriding, so the user can click the Back button in the browser to be back to the landing page. See https://reacttraining.com/react-router/web/api/Redirect/push-bool
  }
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

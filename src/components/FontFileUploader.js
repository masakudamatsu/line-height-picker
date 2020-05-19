import React from 'react';
import PropTypes from 'prop-types';

import {useHistory} from 'react-router';
import {Button} from '../theme/style';
import {fontFileExtensionsArray as acceptableFileExtensions} from '../helper/fontFileExtensions';

const FontFileUploader = props => {
  const history = useHistory();

  const handleClick = event => {
    document.getElementById('hiddenFileInput').click();
  };

  const handleChange = async event => {
    const fileUploaded = event.target.files[0];
    const fileIsValid = props.validateFileType(fileUploaded);
    if (fileIsValid) {
      try {
        await props.handleFontFile(fileUploaded);
        // Only if the user is on landing page, redirect to the x-height page
        if (props.home) {
          history.push({
            pathname: '/x-height',
            state: {transition: 'slideleft', duration: 250},
          });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(
        'The file you have selected has an extension other than otf, ttf, or woff.',
      );
    }
  };
  return (
    <>
      <Button data-testid="font-button" type="button" onClick={handleClick}>
        {props.children}
      </Button>
      <input
        type="file"
        data-testid="hiddenFileInput"
        id="hiddenFileInput"
        accept={acceptableFileExtensions.join()}
        onChange={handleChange}
        style={{display: 'none'}}
        aria-describedby="whatHappened-fontFile howToResolve-fontFile extraText-fontFile"
      />
    </>
  );
  // See the section "Using hidden file input elements using the click() method” in https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
};

FontFileUploader.propTypes = {
  home: PropTypes.bool,
  validateFileType: PropTypes.func.isRequired,
  handleFontFile: PropTypes.func.isRequired,
};

export default FontFileUploader;

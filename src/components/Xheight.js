import React from 'react';
import PropTypes from 'prop-types';

import XheightBox from './XheightBox';
import FontNameDisplay from './FontNameDisplay';
import FontFileErrorMessage from './FontFileErrorMessage';
import {Button, ButtonContainer, NoWrap} from '../theme/style';
import FontFileUploader from './FontFileUploader';
import {Redirect} from 'react-router-dom';

const Xheight = props => {
  const [redirect, setRedirect] = React.useState(false);
  const handleClick = event => {
    const errors = document.getElementById('x-height').validity;
    if (errors.valid) {
      setRedirect(true);
    } else {
      props.handleNoXHeight(errors);
    }
  };
  if (redirect) {
    return <Redirect push to="/modular-scale" />;
    // The push attribute keeps the browser history, instead of overriding, so the user can click the Back button in the browser to be back to the landing page. See https://reacttraining.com/react-router/web/api/Redirect/push-bool
  }
  return (
    <>
      <main>
        <XheightBox
          handleXHeightChange={props.handleXHeightChange}
          validateXHeight={props.validateXHeight}
          xHeightPx={props.xHeightPx}
          xHeightRangeError={props.xHeightRangeError}
          xHeightStepError={props.xHeightStepError}
        />
        <FontNameDisplay
          fontFamily={props.fontFamily}
          fontSubfamily={props.fontSubfamily}
        />
        <ButtonContainer>
          <FontFileUploader
            handleFontFile={props.handleFontFile}
            validateFileType={props.validateFileType}
          >
            Change font
          </FontFileUploader>
          <FontFileErrorMessage
            data-testid="error-message-font-file"
            fontFileError={props.fontFileError}
          />
          <Button onClick={handleClick}>
            <NoWrap>Pick</NoWrap>
            <NoWrap>Modular</NoWrap>
            <NoWrap>Scale</NoWrap>
            <NoWrap>→</NoWrap>
          </Button>
        </ButtonContainer>
      </main>
    </>
  );
};

Xheight.propTypes = {
  fontFamily: PropTypes.string.isRequired,
  fontFileError: PropTypes.string.isRequired,
  fontSubfamily: PropTypes.string.isRequired,
  handleFontFile: PropTypes.func.isRequired,
  handleNoXHeight: PropTypes.func.isRequired,
  handleXHeightChange: PropTypes.func.isRequired,
  validateFileType: PropTypes.func.isRequired,
  validateXHeight: PropTypes.func.isRequired,
  xHeightPx: PropTypes.string,
  xHeightRangeError: PropTypes.bool.isRequired,
  xHeightStepError: PropTypes.bool.isRequired,
};

export default Xheight;

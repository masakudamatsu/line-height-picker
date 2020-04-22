import React from 'react';
import PropTypes from 'prop-types';

import ModularScaleBoxes from './ModularScaleBoxes';
import FontNameDisplay from './FontNameDisplay';
import FontFileErrorMessage from './FontFileErrorMessage';
import XheightDisplay from './XheightDisplay';
import {Button, ButtonContainer, Form, NoWrap} from '../theme/style';
import FontFileUploader from './FontFileUploader';
import {Link, Redirect} from 'react-router-dom';

const ModularScale = props => {
  React.useEffect(() => {
    sessionStorage.setItem('modular-scale', 'visited');
  }, []);

  const [redirect, setRedirect] = React.useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    const xHeightErrors = document.getElementById('x-height-scale').validity;
    const lineHeightErrors = document.getElementById('line-height-scale')
      .validity;
    if (xHeightErrors.valid && lineHeightErrors.valid) {
      setRedirect(true);
    } else if (!xHeightErrors.valid) {
      props.handleNoModularScale(xHeightErrors);
    } else {
      props.handleNoModularScale(lineHeightErrors);
    }
  };
  if (redirect) {
    return <Redirect push to="/preview" />;
    // The push attribute keeps the browser history, instead of overriding, so the user can click the Back button in the browser to be back to the landing page. See https://reacttraining.com/react-router/web/api/Redirect/push-bool
  }
  return (
    <>
      <main>
        <Form noValidate onSubmit={handleSubmit}>
          <ModularScaleBoxes
            handleXHeightRatioChange={props.handleXHeightRatioChange}
            handleLineHeightRatioChange={props.handleLineHeightRatioChange}
            lineHeightRatio={props.lineHeightRatio}
            modularScaleRangeError={props.modularScaleRangeError}
            modularScaleStepError={props.modularScaleStepError}
            validateModularScale={props.validateModularScale}
            xHeightRatio={props.xHeightRatio}
          />{' '}
          <Button>
            <NoWrap>Preview</NoWrap>
            <NoWrap>→</NoWrap>
          </Button>
        </Form>

        <FontNameDisplay
          fontFamily={props.fontFamily}
          fontSubfamily={props.fontSubfamily}
        />
        <XheightDisplay xHeightPx={props.xHeightPx} />
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
          <Button as={Link} to="/x-height">
            > Change x-height
            <NoWrap>←</NoWrap>
          </Button>
        </ButtonContainer>
      </main>
    </>
  );
};

ModularScale.propTypes = {
  fontFamily: PropTypes.string.isRequired,
  fontFileError: PropTypes.string.isRequired,
  fontSubfamily: PropTypes.string.isRequired,
  handleFontFile: PropTypes.func.isRequired,
  handleLineHeightRatioChange: PropTypes.func.isRequired,
  handleNoModularScale: PropTypes.func.isRequired,
  handleXHeightRatioChange: PropTypes.func.isRequired,
  lineHeightRatio: PropTypes.string,
  modularScaleRangeError: PropTypes.bool,
  modularScaleStepError: PropTypes.bool,
  validateFileType: PropTypes.func.isRequired,
  validateModularScale: PropTypes.func.isRequired,
  xHeightPx: PropTypes.string,
  xHeightRatio: PropTypes.string,
};

export default ModularScale;

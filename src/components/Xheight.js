import React from 'react';
import Header from './Header';
import XheightBox from './XheightBox';
import FontNameDisplay from './FontNameDisplay';
import {Button, ButtonContainer, NoWrap} from '../theme/style';
import ChangeFontButton from './ChangeFontButton';
import {Redirect} from 'react-router-dom';

const Xheight = props => {
  const [redirect, setRedirect] = React.useState(false);
  const handleClick = event => {
    const errors = document.getElementById('x-height').validity;
    if (errors.valid) {
      setRedirect(true);
    } else {
      props.validateXHeight(errors);
    }
  };
  if (redirect) {
    return <Redirect push to="/modular-scale" />;
    // The push attribute keeps the browser history, instead of overriding, so the user can click the Back button in the browser to be back to the landing page. See https://reacttraining.com/react-router/web/api/Redirect/push-bool
  }
  return (
    <>
      <Header stepNow={2} />
      <main>
        <XheightBox
          xHeightPx={props.xHeightPx}
          xHeightRangeError={props.xHeightRangeError}
          xHeightStepError={props.xHeightStepError}
          validateXHeight={props.validateXHeight}
          xHeightToFontSize={props.xHeightToFontSize}
        />
        <FontNameDisplay
          fontFamily={props.fontFamily}
          fontSubfamily={props.fontSubfamily}
        />
        <ButtonContainer>
          <ChangeFontButton handleFontFile={props.handleFontFile} />
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

export default Xheight;

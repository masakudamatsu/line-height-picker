import React from 'react';
import Header from './Header';
import XheightBox from './XheightBox';
import FontNameDisplay from './FontNameDisplay';
import {Button, ButtonContainer, NoWrap} from '../theme/style';
import ChangeFontButton from './ChangeFontButton';
import {Link} from 'react-router-dom';

const Xheight = props => {
  return (
    <>
      <Header stepNow={2} />
      <main>
        <XheightBox
          xHeightPx={props.xHeightPx}
          xHeightToFontSize={props.xHeightToFontSize}
        />
        <FontNameDisplay
          fontFamily={props.fontFamily}
          fontSubfamily={props.fontSubfamily}
        />
        <ButtonContainer>
          <ChangeFontButton handleFontFile={props.handleFontFile} />
          <Button as={Link} to="/modular-scale">
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

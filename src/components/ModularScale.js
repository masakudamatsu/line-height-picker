import React from 'react';
import Header from './Header';
import ModularScaleBoxes from './ModularScaleBoxes';
import FontNameDisplay from './FontNameDisplay';
import XheightDisplay from './XheightDisplay';
import {Button, ButtonContainer, NoWrap} from '../theme/style';
import ChangeFontButton from './ChangeFontButton';
import {Link} from 'react-router-dom';

const ModularScale = props => {
  return (
    <>
      <Header stepNow={3} />
      <main>
        <ModularScaleBoxes
          xHeightRatio={props.xHeightRatio}
          lineHeightRatio={props.lineHeightRatio}
          handleXHeightRatio={props.handleXHeightRatio}
          handleLineHeightRatio={props.handleLineHeightRatio}
        />
        <FontNameDisplay fontFamily={props.fontFamily} />
        <XheightDisplay xHeightPx={props.xHeightPx} />
        <ButtonContainer>
          <ChangeFontButton />
          <Button as={Link} to="/preview">
            <NoWrap>Preview</NoWrap>
            <NoWrap>→</NoWrap>
          </Button>
          <Button as={Link} to="/x-height">
            Change x-height
            <NoWrap>←</NoWrap>
          </Button>
        </ButtonContainer>
      </main>
    </>
  );
};

export default ModularScale;

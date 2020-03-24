import React from 'react';
import Header from './Header';
import FontNameDisplay from './FontNameDisplay';
import XheightDisplay from './XheightDisplay';
import {Button, ButtonContainer, NoWrap} from '../theme/style';
import ChangeFontButton from './ChangeFontButton';
import {Link} from 'react-router-dom';

const ModularScale = () => {
  return (
    <>
      <Header stepNow={3} />
      <main>
        <FontNameDisplay />
        <XheightDisplay />
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

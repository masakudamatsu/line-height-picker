import React from 'react';
import Header from './Header';
import XheightBox from './XheightBox';
import FontNameDisplay from './FontNameDisplay';
import {Button, ButtonContainer, NoWrap} from '../theme/style';
import ChangeFontButton from './ChangeFontButton';
import {Link} from 'react-router-dom';

const Xheight = () => {
  return (
    <>
      <Header stepNow={2} />
      <main>
        <XheightBox />
        <FontNameDisplay />
        <ButtonContainer>
          <ChangeFontButton />
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

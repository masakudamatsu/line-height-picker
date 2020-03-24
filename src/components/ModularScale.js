import React from 'react';
import Header from './Header';
import FontNameDisplay from './FontNameDisplay';
import {Button, ButtonContainer, NoWrap} from '../theme/style';
import ChangeFontButton from './ChangeFontButton';
import {Link} from 'react-router-dom';

const ModularScale = () => {
  return (
    <>
      <Header stepNow={3} />
      <main>
        <FontNameDisplay />
        <ButtonContainer>
          <ChangeFontButton />
          <Button as={Link} to="/preview">
            <NoWrap>Preview</NoWrap>
            <NoWrap>→</NoWrap>
          </Button>
        </ButtonContainer>
      </main>
    </>
  );
};

export default ModularScale;

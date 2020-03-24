import React from 'react';
import Header from './Header';
import FontNameDisplay from './FontNameDisplay';
import {ButtonContainer} from '../theme/style';
import ChangeFontButton from './ChangeFontButton';

const ModularScale = () => {
  return (
    <>
      <Header stepNow={3} />
      <main>
        <FontNameDisplay />
        <ButtonContainer>
          <ChangeFontButton />
        </ButtonContainer>
      </main>
    </>
  );
};

export default ModularScale;

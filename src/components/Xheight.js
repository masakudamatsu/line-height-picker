import React from 'react';
import Header from './Header';
import XheightBox from './XheightBox';
import FontNameDisplay from './FontNameDisplay';
import {ButtonContainer} from '../theme/style';
import ChangeFontButton from './ChangeFontButton';

const Xheight = () => {
  return (
    <>
      <Header stepNow={2} />
      <main>
        <XheightBox />
        <FontNameDisplay />
        <ButtonContainer>
          <ChangeFontButton />
        </ButtonContainer>
      </main>
    </>
  );
};

export default Xheight;

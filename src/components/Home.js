import React from 'react';
import Description from './Description';
import {ButtonContainer, Logo} from '../theme/style';
import FontFileUploader from './FontFileUploader';
import DemoStartButton from './DemoStartButton';

const Home = () => {
  return (
    <>
      <Logo />
      <Description />
      <ButtonContainer>
        <FontFileUploader />
        <DemoStartButton />
      </ButtonContainer>
    </>
  );
};
export default Home;

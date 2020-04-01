import React from 'react';
import Description from './Description';
import {ButtonContainer, Logo} from '../theme/style';
import FontFileUploader from './FontFileUploader';
import DemoStartButton from './DemoStartButton';

const Home = props => {
  return (
    <>
      <Logo />
      <Description />
      <ButtonContainer>
        <FontFileUploader home handleFontFile={props.handleFontFile}>
          Upload font file
        </FontFileUploader>
        <DemoStartButton />
      </ButtonContainer>
    </>
  );
};
export default Home;

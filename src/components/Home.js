import React from 'react';
import {SideMarginRegulator} from '../theme/style';
import Logo from './Logo';
import Description from './Description';
import {ButtonContainer} from '../theme/style';
import FontFileUploader from './FontFileUploader';
import DemoStartButton from './DemoStartButton';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <SideMarginRegulator>
        <Logo />
        <Description />
        <ButtonContainer>
          <FontFileUploader />
          <DemoStartButton />
        </ButtonContainer>
        <Footer />
      </SideMarginRegulator>
    </>
  );
};
export default Home;

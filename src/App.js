import React from 'react';
import GlobalStyle from './theme/GlobalStyle';
import Title from './components/Title';
import Logo from './components/Logo';
import Description from './components/Description';
import {ButtonContainer} from './theme/style';
import FontFileUploader from './components/FontFileUploader';
import DemoStartButton from './components/DemoStartButton';

function App() {
  return (
    <>
      <GlobalStyle />
      <Title />
      <Logo />
      <Description />
      <ButtonContainer>
        <FontFileUploader />
        <DemoStartButton />
      </ButtonContainer>
    </>
  );
}
export default App;

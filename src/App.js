import React from 'react';
import GlobalStyle from './theme/GlobalStyle';
import Title from './components/Title';
import Logo from './components/Logo';
import Description from './components/Description';
import {ButtonContainer} from './theme/style';
import FontFileUploader from './components/FontFileUploader';

function App() {
  return (
    <>
      <GlobalStyle />
      <Title />
      <Logo />
      <Description />
      <ButtonContainer>
        <FontFileUploader />
      </ButtonContainer>
    </>
  );
}
export default App;

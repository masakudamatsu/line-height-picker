import React from 'react';
import GlobalStyle from './theme/GlobalStyle';
import Title from './components/Title';
import Logo from './components/Logo';
import Description from './components/Description';

function App() {
  return (
    <>
      <GlobalStyle />
      <Title />
      <Logo />
      <Description />
    </>
  );
}
export default App;

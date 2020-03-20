import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import Title from './components/Title';
import {SideMarginRegulator} from './theme/style';
import Home from './components/Home';
import Xheight from './components/Xheight';
import Error from './components/Error';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Title />
      <SideMarginRegulator>
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/x-height" component={Xheight} />
            <Route component={Error} />
          </Switch>
        </main>
        <Footer />
      </SideMarginRegulator>
    </>
  );
}
export default App;

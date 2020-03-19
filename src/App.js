import React from 'react';
import {Route, Switch} from 'react-router-dom';

import GlobalStyle from './theme/GlobalStyle';
import Home from './components/Home';
import Xheight from './components/Xheight';
import Error from './components/Error';
function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/x-height" component={Xheight} />
          <Route component={Error} />
        </Switch>
      </main>
    </>
  );
}
export default App;

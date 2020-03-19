import React from 'react';
import {Route, Switch} from 'react-router-dom';

import GlobalStyle from './theme/GlobalStyle';
import Home from './components/Home';
import Xheight from './components/Xheight';

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/x-height" component={Xheight} />
        </Switch>
      </main>
    </>
  );
}
export default App;

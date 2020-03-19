import React from 'react';
import {Route, Switch} from 'react-router-dom';

import GlobalStyle from './theme/GlobalStyle';
import Home from './components/Home';
function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </main>
    </>
  );
}
export default App;

import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render as rtlRender} from '@testing-library/react';

function render(ui, options = {}) {
  const history = createMemoryHistory({initialEntries: ['/']});
  function Wrapper({children}) {
    return <Router history={history}>{children}</Router>;
  }
  return rtlRender(ui, {wrapper: Wrapper, ...options});
}

export default render;

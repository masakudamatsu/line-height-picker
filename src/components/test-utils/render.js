import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render as rtlRender} from '@testing-library/react';

function render(ui, options = {}) {
  const history = createMemoryHistory({initialEntries: ['/']});
  return rtlRender(<Router history={history}>{ui}</Router>, options);
}

export default render;

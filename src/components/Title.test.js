import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import Title from './Title';

test('renders the H1 element for the screen reader, but invisible on the browser', () => {
  const {container} = render(<Title />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      -webkit-clip: rect(1px 1px 1px 1px);
      clip: rect(1px 1px 1px 1px);
      -webkit-clip: rect(1px,1px,1px,1px);
      clip: rect(1px,1px,1px,1px);
      -webkit-clip-path: inset(50%);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    <div>
      <h1
        class="c0"
      >
        Line-height Picker
      </h1>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<Title />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

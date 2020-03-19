import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import Error from './Error';

test('renders correctly', () => {
  const {container} = render(<Error />);
  expect(container).toMatchInlineSnapshot(`
    .c1 {
      color: hsl(192,90%,50%);
    }

    .c0 {
      height: 1px;
      left: -10000px;
      overflow: hidden;
      position: absolute;
      top: auto;
      width: 1px;
    }

    <div>
      <h1
        class="c0"
      >
        Line-height Picker
      </h1>
      <h2>
        404
      </h2>
      <p>
        We can't find the page you're looking for.
         
        <a
          class="c1"
          href="/"
        >
          Click here
        </a>
         to visit our web app's landing page.
      </p>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<Error />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

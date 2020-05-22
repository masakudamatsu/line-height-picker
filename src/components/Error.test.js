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
    .c0 {
      background: hsl(0,0%,46%);
      background: linear-gradient( to bottom, transparent 50%, hsl(0,0%,96%) 50%, hsl(0,0%,96%) );
      background-position: 0 calc( 0.125em + 0.708em );
      background-repeat: no-repeat;
      background-size: 100% 1px;
      color: inherit;
      cursor: pointer;
      -webkit-text-decoration: none;
      text-decoration: none;
      text-shadow: 0.03em 0 hsl(0,0%,25%), -0.03em 0 hsl(0,0%,25%),0 0.03em hsl(0,0%,25%), 0 -0.03em hsl(0,0%,25%);
    }

    .c0:focus,
    .c0:hover {
      background: hsl(0,0%,46%);
      display: inline-block;
      outline: none;
      text-shadow: none;
    }

    .c0:active {
      background: none;
    }

    .c0:visited {
      background: hsl(0,0%,46%);
      background: linear-gradient( to bottom, transparent 50%, hsl(0,0%,76%) 50%, hsl(0,0%,76%) );
      color: hsl(0,0%,76%);
    }

    .c0:visited:focus,
    .c0:visited:hover {
      background: hsl(0,0%,36%);
      display: inline-block;
      outline: none;
      text-shadow: none;
    }

    .c0:visited:active {
      background: none;
    }

    <div>
      <main>
        <h2>
          404
        </h2>
        <p>
          We can't find the page you're looking for.
           
          <a
            class="c0"
            href="/"
          >
            Click here
          </a>
           to visit our web app's landing page.
        </p>
      </main>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<Error />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

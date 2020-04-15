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
      color: hsl(192,90%,50%);
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

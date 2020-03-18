import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import Footer from './Footer';

test('renders correctly', () => {
  const {container} = render(<Footer />);
  expect(container).toMatchInlineSnapshot(`
    .c1 {
      color: hsl(0,0%,96%);
    }

    .c0 {
      border-top: 1px solid currentColor;
      color: hsl(0,0%,67%);
      font-size: 0.75rem;
      padding: 0.75rem 0;
    }

    <div>
      <footer
        class="c0"
        data-testid="footer"
      >
        <p>
          Designed and Coded by Masa Kudamatsu in 2020 (
          <a
            class="c1"
            href="https://github.com/masakudamatsu/line-height-picker"
            target="_blank"
          >
            SOURCE CODE
          </a>
          ).
        </p>
        <p>
          Powered by
           
          <a
            class="c1"
            href="https://opentype.js.org/"
            target="_blank"
          >
            Opentype.js.
          </a>
        </p>
      </footer>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<Footer />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

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
      background: hsl(0,0%,46%);
      background: linear-gradient( to bottom, transparent 50%, currentColor 50%, currentColor );
      background-position: 0 calc( 2px + 0.708em );
      background-repeat: no-repeat;
      background-size: 100% 1px;
      color: inherit;
      cursor: pointer;
      -webkit-text-decoration: none;
      text-decoration: none;
      text-shadow: 1px 1px hsl(0,0%,25%), 1px -1px hsl(0,0%,25%),-1px 1px hsl(0,0%,25%), -1px -1px hsl(0,0%,25%);
    }

    .c1:focus,
    .c1:hover {
      background: hsl(0,0%,46%);
      display: inline-block;
      outline: none;
      text-shadow: none;
    }

    .c1:active {
      background: none;
    }

    .c1:visited {
      background: hsl(0,0%,46%);
      background: linear-gradient( to bottom, transparent 50%, currentColor 50%, currentColor );
      color: hsl(0,0%,76%);
    }

    .c1:visited:focus,
    .c1:visited:hover {
      background: hsl(0,0%,36%);
      display: inline-block;
      outline: none;
      text-shadow: none;
    }

    .c1:visited:active {
      background: none;
    }

    .c0 {
      background-color: hsl(0,0%,25%);
      max-width: 700px;
      padding-left: 12.857142857142858px;
      padding-right: 12.857142857142858px;
      position: relative;
      z-index: 2;
      border-top: 1px solid currentColor;
      color: hsl(0,0%,67%);
      font-size: 0.75rem;
      padding-bottom: 0.75rem;
      padding-top: 0.75rem;
    }

    @media (min-width:875px) {
      .c0 {
        margin: 0 auto;
      }
    }

    <div>
      <footer
        class="sc-AxgMl c0"
        data-testid="footer"
      >
        <p>
          Designed and Coded by Masa Kudamatsu in 2020 (
          <a
            class="c1"
            href="https://github.com/masakudamatsu/line-height-picker"
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

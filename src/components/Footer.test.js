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
    .c2 {
      background: hsl(0,0%,46%);
      background: linear-gradient( to bottom, transparent 50%, hsl(0,0%,96%) 50%, hsl(0,0%,96%) );
      background-position: 0 calc( 0.125em + 0.708em );
      background-repeat: no-repeat;
      background-size: 100% 1px;
      color: hsl(0,0%,96%);
      cursor: pointer;
      -webkit-text-decoration: none;
      text-decoration: none;
      text-shadow: 0.03em 0 hsl(0,0%,15%), -0.03em 0 hsl(0,0%,15%),0 0.03em hsl(0,0%,15%), 0 -0.03em hsl(0,0%,15%);
    }

    .c2:visited {
      background: hsl(0,0%,36%);
      background: linear-gradient( to bottom, transparent 50%, hsl(0,0%,76%) 50%, hsl(0,0%,76%) );
      color: hsl(0,0%,76%);
    }

    .c2:focus,
    .c2:hover {
      background: hsl(0,0%,46%);
      display: inline-block;
      outline: none;
      text-shadow: none;
    }

    .c2:active {
      background: none;
    }

    .c2:visited:focus,
    .c2:visited:hover {
      background: hsl(0,0%,36%);
      display: inline-block;
      outline: none;
      text-shadow: none;
    }

    .c2:visited:active {
      background: none;
    }

    .c0 {
      max-width: 33em;
      border-top: 1px solid currentColor;
      padding-bottom: 0.75rem;
      padding-top: 0.75rem;
      position: inherit;
      bottom: 0;
      left: 0;
    }

    .c1 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
      color: hsl(0,0%,67%);
      font-family: 'Fedra Sans 3',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 0.6541rem;
      font-weight: 300;
    }

    .c1::before,
    .c1::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c1::before {
      margin-bottom: -0.2545em;
    }

    .c1::after {
      margin-top: -0.4025em;
    }

    @media only screen and (min-width:799px) {
      .c0 {
        max-width: calc( 388px + 33em + 22.5px );
      }
    }

    @media only screen and (min-width:728px) {
      .c1 {
        font-size: 0.7631rem;
      }
    }

    <div>
      <footer
        class="sc-AxhCb c0"
        data-testid="footer"
      >
        <p
          class="sc-AxgMl c1"
        >
          Designed and Coded by Masa Kudamatsu in 2020.
        </p>
        <p
          class="sc-AxgMl c1"
        >
          Powered by
           
          <a
            class="c2"
            href="https://opentype.js.org/"
          >
            Opentype.js.
          </a>
        </p>
        <p
          class="sc-AxgMl c1"
        >
          <a
            class="c2"
            href="https://github.com/masakudamatsu/line-height-picker"
          >
            The source code is available at GitHub
          </a>
          .
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

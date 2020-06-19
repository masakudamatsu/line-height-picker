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
    .c4 {
      background: hsl(0,0%,40%);
      background: linear-gradient( to bottom, transparent 50%, currentColor 50%, currentColor );
      background-position: 0 calc( 0.125em + 0.707em );
      background-repeat: no-repeat;
      background-size: 100% 1px;
      color: currentColor;
      cursor: pointer;
      -webkit-text-decoration: none;
      text-decoration: none;
      text-shadow: 0.03em 0 hsl(0,0%,10%), -0.03em 0 hsl(0,0%,10%),0 0.03em hsl(0,0%,10%), 0 -0.03em hsl(0,0%,10%);
    }

    .c4:visited {
      background: hsl(0,0%,40%);
      background: linear-gradient( to bottom, transparent 50%, currentColor 50%, currentColor );
      color: currentColor;
    }

    .c4:focus,
    .c4:hover {
      background: hsl(0,0%,40%);
      outline: none;
      text-shadow: none;
    }

    .c4:focus::before,
    .c4:hover::before,
    .c4:focus::after,
    .c4:hover::after {
      display: none;
    }

    .c4:active {
      background: none;
    }

    .c4:visited:focus,
    .c4:visited:hover {
      background: hsl(0,0%,40%);
      outline: none;
      text-shadow: none;
    }

    .c4:visited:focus::before,
    .c4:visited:hover::before,
    .c4:visited:focus::after,
    .c4:visited:hover::after {
      display: none;
    }

    .c4:visited:active {
      background: none;
    }

    .c0 {
      max-width: 33em;
      border-top: 1px solid hsl(0,0%,90%);
      position: inherit;
      bottom: 0;
      left: 0;
      width: 100%;
    }

    .c2 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
      color: hsl(0,0%,90%);
      font-family: 'Fedra Sans 3',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 0.6541rem;
      font-weight: 300;
    }

    .c2::before,
    .c2::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c2::before {
      margin-bottom: -0.2555em;
    }

    .c2::after {
      margin-top: -0.4025em;
    }

    .c1 {
      height: 1.2053571428571428rem;
      width: auto;
    }

    .c3 {
      height: 0.8035714285714286rem;
      width: auto;
    }

    @media only screen and (min-width:799px) {
      .c0 {
        max-width: calc( 388px + 33em + 22.5px );
      }
    }

    @media only screen and (min-width:728px) {
      .c2 {
        font-size: 0.7631rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c1 {
        height: 1.40625rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c3 {
        height: 0.9375rem;
      }
    }

    <div>
      <footer
        class="sc-AxhCb c0"
        data-testid="footer"
      >
        <div
          class="c1"
          height="2"
        />
        <p
          class="sc-AxgMl c2"
        >
          Designed and Coded by Masa Kudamatsu in 2020.
        </p>
        <div
          class="c3"
          height="1"
        />
        <p
          class="sc-AxgMl c2"
        >
          Powered by
           
          <a
            class="c4"
            href="https://opentype.js.org/"
          >
            Opentype.js.
          </a>
        </p>
        <div
          class="c3"
          height="1"
        />
        <p
          class="sc-AxgMl c2"
        >
          <a
            class="c4"
            href="https://github.com/masakudamatsu/line-height-picker"
          >
            The source code is available at GitHub
          </a>
          .
        </p>
        <div
          class="c1"
          height="2"
        />
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

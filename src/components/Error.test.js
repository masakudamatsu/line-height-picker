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
    .c21 {
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

    .c21:visited {
      background: hsl(0,0%,40%);
      background: linear-gradient( to bottom, transparent 50%, currentColor 50%, currentColor );
      color: currentColor;
    }

    .c21:focus,
    .c21:hover {
      background: hsl(0,0%,40%);
      outline: none;
      text-shadow: none;
    }

    .c21:focus::before,
    .c21:hover::before,
    .c21:focus::after,
    .c21:hover::after {
      display: none;
    }

    .c21:active {
      background: none;
    }

    .c21:visited:focus,
    .c21:visited:hover {
      background: hsl(0,0%,40%);
      outline: none;
      text-shadow: none;
    }

    .c21:visited:focus::before,
    .c21:visited:hover::before,
    .c21:visited:focus::after,
    .c21:visited:hover::after {
      display: none;
    }

    .c21:visited:active {
      background: none;
    }

    .c0 {
      max-width: 33em;
    }

    .c2 {
      font-family: 'Fedra Sans Alt 2',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 1.4717rem;
      font-weight: 300;
      line-height: 1.0920;
    }

    .c2::before,
    .c2::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c2::before {
      margin-bottom: -0.1190em;
    }

    .c2::after {
      margin-top: -0.2660em;
    }

    .c20 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
    }

    .c20::before,
    .c20::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c20::before {
      margin-bottom: -0.2555em;
    }

    .c20::after {
      margin-top: -0.4025em;
    }

    .c1 {
      height: 1.8080357142857142rem;
      width: auto;
    }

    .c19 {
      height: 1.2053571428571428rem;
      width: auto;
    }

    .c3 {
      display: inline-block;
      padding-right: 0.5em;
    }

    .c4 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(167deg);
      -ms-transform: rotate(167deg);
      transform: rotate(167deg);
    }

    .c5 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(174deg);
      -ms-transform: rotate(174deg);
      transform: rotate(174deg);
    }

    .c6 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(59deg);
      -ms-transform: rotate(59deg);
      transform: rotate(59deg);
    }

    .c7 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(177deg);
      -ms-transform: rotate(177deg);
      transform: rotate(177deg);
    }

    .c8 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(39deg);
      -ms-transform: rotate(39deg);
      transform: rotate(39deg);
    }

    .c9 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(79deg);
      -ms-transform: rotate(79deg);
      transform: rotate(79deg);
    }

    .c10 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(209deg);
      -ms-transform: rotate(209deg);
      transform: rotate(209deg);
    }

    .c11 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(160deg);
      -ms-transform: rotate(160deg);
      transform: rotate(160deg);
    }

    .c12 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(189deg);
      -ms-transform: rotate(189deg);
      transform: rotate(189deg);
    }

    .c13 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(299deg);
      -ms-transform: rotate(299deg);
      transform: rotate(299deg);
    }

    .c14 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(250deg);
      -ms-transform: rotate(250deg);
      transform: rotate(250deg);
    }

    .c15 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(8deg);
      -ms-transform: rotate(8deg);
      transform: rotate(8deg);
    }

    .c16 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(178deg);
      -ms-transform: rotate(178deg);
      transform: rotate(178deg);
    }

    .c17 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(225deg);
      -ms-transform: rotate(225deg);
      transform: rotate(225deg);
    }

    .c18 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(289deg);
      -ms-transform: rotate(289deg);
      transform: rotate(289deg);
    }

    @media only screen and (min-width:728px) {
      .c2 {
        font-size: 1.7170rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c1 {
        height: 2.109375rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c19 {
        height: 1.40625rem;
      }
    }

    <div>
      <main>
        <section
          class="c0"
        >
          <div
            class="c1"
            height="3"
          />
          <h2
            class="c2"
          >
            <div
              class="c3"
            >
              <span
                class="c4"
              >
                4
              </span>
              <span
                class="c5"
              >
                0
              </span>
              <span
                class="c6"
              >
                4
              </span>
            </div>
            <div
              class="c3"
            >
              <span
                class="c7"
              >
                p
              </span>
              <span
                class="c8"
              >
                a
              </span>
              <span
                class="c9"
              >
                g
              </span>
              <span
                class="c10"
              >
                e
              </span>
            </div>
            <div
              class="c3"
            >
              <span
                class="c11"
              >
                n
              </span>
              <span
                class="c12"
              >
                o
              </span>
              <span
                class="c13"
              >
                t
              </span>
            </div>
            <div
              class="c3"
            >
              <span
                class="c14"
              >
                f
              </span>
              <span
                class="c15"
              >
                o
              </span>
              <span
                class="c16"
              >
                u
              </span>
              <span
                class="c17"
              >
                n
              </span>
              <span
                class="c18"
              >
                d
              </span>
            </div>
          </h2>
          <div
            class="c19"
            height="2"
          />
          <p
            class="c20"
          >
            We cannot find the page you are looking for. Please visit the
             
            <a
              class="c21"
              href="/"
            >
              landing page of the Line-height Picker
            </a>
            .
          </p>
          <div
            class="c1"
            height="3"
          />
           
        </section>
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

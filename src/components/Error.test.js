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
    .c20 {
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

    .c20:visited {
      background: hsl(0,0%,40%);
      background: linear-gradient( to bottom, transparent 50%, currentColor 50%, currentColor );
      color: currentColor;
    }

    .c20:focus,
    .c20:hover {
      background: hsl(0,0%,40%);
      outline: none;
      text-shadow: none;
    }

    .c20:focus:before,
    .c20:hover:before,
    .c20:focus:after,
    .c20:hover:after {
      display: none;
    }

    .c20:active {
      background: none;
    }

    .c20:visited:focus,
    .c20:visited:hover {
      background: hsl(0,0%,40%);
      outline: none;
      text-shadow: none;
    }

    .c20:visited:focus:before,
    .c20:visited:hover:before,
    .c20:visited:focus:after,
    .c20:visited:hover:after {
      display: none;
    }

    .c20:visited:active {
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

    .c2:before,
    .c2:after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c2:before {
      margin-bottom: -0.1190em;
    }

    .c2:after {
      margin-top: -0.2660em;
    }

    .c19 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
    }

    .c19:before,
    .c19:after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c19:before {
      margin-bottom: -0.2555em;
    }

    .c19:after {
      margin-top: -0.4025em;
    }

    .c1 {
      height: 1.8080357142857142rem;
      width: auto;
    }

    .c18 {
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
      -webkit-transform: rotate(220deg);
      -ms-transform: rotate(220deg);
      transform: rotate(220deg);
    }

    .c5 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(196deg);
      -ms-transform: rotate(196deg);
      transform: rotate(196deg);
    }

    .c6 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(283deg);
      -ms-transform: rotate(283deg);
      transform: rotate(283deg);
    }

    .c7 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(312deg);
      -ms-transform: rotate(312deg);
      transform: rotate(312deg);
    }

    .c8 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(85deg);
      -ms-transform: rotate(85deg);
      transform: rotate(85deg);
    }

    .c9 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(103deg);
      -ms-transform: rotate(103deg);
      transform: rotate(103deg);
    }

    .c10 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(325deg);
      -ms-transform: rotate(325deg);
      transform: rotate(325deg);
    }

    .c11 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(61deg);
      -ms-transform: rotate(61deg);
      transform: rotate(61deg);
    }

    .c12 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(182deg);
      -ms-transform: rotate(182deg);
      transform: rotate(182deg);
    }

    .c13 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(257deg);
      -ms-transform: rotate(257deg);
      transform: rotate(257deg);
    }

    .c14 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(146deg);
      -ms-transform: rotate(146deg);
      transform: rotate(146deg);
    }

    .c15 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(178deg);
      -ms-transform: rotate(178deg);
      transform: rotate(178deg);
    }

    .c16 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(65deg);
      -ms-transform: rotate(65deg);
      transform: rotate(65deg);
    }

    .c17 {
      display: inline-block;
      text-transform: uppercase;
      -webkit-transform: rotate(157deg);
      -ms-transform: rotate(157deg);
      transform: rotate(157deg);
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
      .c18 {
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
                class="c7"
              >
                e
              </span>
            </div>
            <div
              class="c3"
            >
              <span
                class="c10"
              >
                n
              </span>
              <span
                class="c11"
              >
                o
              </span>
              <span
                class="c12"
              >
                t
              </span>
            </div>
            <div
              class="c3"
            >
              <span
                class="c13"
              >
                f
              </span>
              <span
                class="c14"
              >
                o
              </span>
              <span
                class="c15"
              >
                u
              </span>
              <span
                class="c16"
              >
                n
              </span>
              <span
                class="c17"
              >
                d
              </span>
            </div>
          </h2>
          <div
            class="c18"
            height="2"
          />
          <p
            class="c19"
          >
            We cannot find the page you are looking for. Please visit the
             
            <a
              class="c20"
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

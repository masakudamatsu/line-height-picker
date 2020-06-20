import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import Error from './Error';

// Mock Math.random(), which is used in the Rotate styled-component in Error.js. See https://stackoverflow.com/a/57730344/11847654
beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
});

afterEach(() => {
  global.Math.random.mockRestore();
});

test('renders correctly', () => {
  const {container} = render(<Error />);
  expect(container).toMatchInlineSnapshot(`
    .c7 {
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

    .c7:visited {
      background: hsl(0,0%,40%);
      background: linear-gradient( to bottom, transparent 50%, currentColor 50%, currentColor );
      color: currentColor;
    }

    .c7:focus,
    .c7:hover {
      background: hsl(0,0%,40%);
      outline: none;
      text-shadow: none;
    }

    .c7:focus:before,
    .c7:hover:before,
    .c7:focus:after,
    .c7:hover:after {
      display: none;
    }

    .c7:active {
      background: none;
    }

    .c7:visited:focus,
    .c7:visited:hover {
      background: hsl(0,0%,40%);
      outline: none;
      text-shadow: none;
    }

    .c7:visited:focus:before,
    .c7:visited:hover:before,
    .c7:visited:focus:after,
    .c7:visited:hover:after {
      display: none;
    }

    .c7:visited:active {
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

    .c6 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
    }

    .c6:before,
    .c6:after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c6:before {
      margin-bottom: -0.2555em;
    }

    .c6:after {
      margin-top: -0.4025em;
    }

    .c1 {
      height: 1.8080357142857142rem;
      width: auto;
    }

    .c5 {
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
      -webkit-transform: rotate(44deg);
      -ms-transform: rotate(44deg);
      transform: rotate(44deg);
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
      .c5 {
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
                class="c4"
              >
                0
              </span>
              <span
                class="c4"
              >
                4
              </span>
            </div>
            <div
              class="c3"
            >
              <span
                class="c4"
              >
                p
              </span>
              <span
                class="c4"
              >
                a
              </span>
              <span
                class="c4"
              >
                g
              </span>
              <span
                class="c4"
              >
                e
              </span>
            </div>
            <div
              class="c3"
            >
              <span
                class="c4"
              >
                n
              </span>
              <span
                class="c4"
              >
                o
              </span>
              <span
                class="c4"
              >
                t
              </span>
            </div>
            <div
              class="c3"
            >
              <span
                class="c4"
              >
                f
              </span>
              <span
                class="c4"
              >
                o
              </span>
              <span
                class="c4"
              >
                u
              </span>
              <span
                class="c4"
              >
                n
              </span>
              <span
                class="c4"
              >
                d
              </span>
            </div>
          </h2>
          <div
            class="c5"
            height="2"
          />
          <p
            class="c6"
          >
            We cannot find the page you are looking for. Please visit the

            <a
              class="c7"
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

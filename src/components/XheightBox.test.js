import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import XheightBox from './XheightBox';

test('renders correctly', () => {
  const {container} = render(<XheightBox />);
  expect(container).toMatchInlineSnapshot(`
    .c3 {
      font-size: 1rem;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      font-size: 3rem;
      font-weight: 200;
      padding: 0 0 3rem 0;
    }

    .c1 {
      -webkit-align-items: baseline;
      -webkit-box-align: baseline;
      -ms-flex-align: baseline;
      align-items: baseline;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 3rem 0 1rem 0;
    }

    .c2 {
      -moz-appearance: textfield;
      -webkit-appearance: textfield;
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
      background-color: hsl(0,0%,25%);
      border: none;
      border-bottom: 2px solid hsl(0,0%,96%);
      border-radius: 4px 4px 0 0;
      color: hsl(0,0%,96%);
      font-weight: 200;
      font-size: 9rem;
      text-align: center;
      padding: 1rem;
      width: 90%;
    }

    .c2::-webkit-inner-spin-button,
    .c2::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    .c2:active,
    .c2:hover,
    .c2:focus {
      background-color: hsl(0,0%,35%);
      outline: none;
    }

    <div>
      <form
        class="c0"
      >
        <label
          class=""
          for="x-height"
        >
          Set x-height
        </label>
        <div
          class="c1"
        >
          <input
            class="sc-fznJRM c2"
            id="x-height"
            step="0.0001"
            type="number"
          />
          <span>
            px
          </span>
        </div>
        <p
          class="c3"
        >
          up to 4 decimal places
        </p>
      </form>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<XheightBox />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

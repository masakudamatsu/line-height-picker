import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import ModularScaleBoxes from './ModularScaleBoxes';

test('renders correctly', () => {
  const {container} = render(<ModularScaleBoxes />);
  expect(container).toMatchInlineSnapshot(`
    .c2 {
      -webkit-align-items: flex-end;
      -webkit-box-align: flex-end;
      -ms-flex-align: flex-end;
      align-items: flex-end;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 1rem 0;
      width: 100%;
    }

    .c3 {
      -webkit-align-items: flex-start;
      -webkit-box-align: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 40%;
    }

    .c1 {
      font-size: 3rem;
      font-weight: 200;
    }

    .c5 {
      font-size: 1rem;
      text-align: right;
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

    .c4 {
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
      width: 100%;
    }

    .c4::-webkit-inner-spin-button,
    .c4::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    .c4:active,
    .c4:hover,
    .c4:focus {
      background-color: hsl(0,0%,35%);
      outline: none;
    }

    <div>
      <form
        class="c0"
      >
        <h2
          class="c1"
        >
          Pick modular scale
        </h2>
        <p>
          Set the ratio of
        </p>
        <div
          class="c2"
        >
          <div
            class="c3"
          >
            <label
              class=""
              for="x-height-scale"
            >
              x-height
            </label>
            <input
              class="sc-fznWqX c4"
              id="x-height-scale"
              step="0.0001"
              type="number"
              value=""
            />
          </div>
          <span>
            to
          </span>
          <div
            class="c3"
          >
            <label
              class=""
              for="line-height-scale"
            >
              line-height
            </label>
            <input
              class="sc-fznWqX c4"
              id="line-height-scale"
              step="0.0001"
              type="number"
              value=""
            />
          </div>
        </div>
        <p
          class="sc-AxheI c5"
        >
          up to 4 decimal places
        </p>
      </form>
    </div>
  `);
});

test('The value attribute reflects props value', () => {
  // setup
  const xHeightRatio = '1';
  const lineHeightRatio = '3';
  // execute
  const {getByLabelText} = render(
    <ModularScaleBoxes
      xHeightRatio={xHeightRatio}
      lineHeightRatio={lineHeightRatio}
    />,
  );
  // verify
  expect(getByLabelText(/x-height/i)).toHaveAttribute('value', xHeightRatio);
  expect(getByLabelText(/line-height/i, {selector: 'input'})).toHaveAttribute(
    'value',
    lineHeightRatio,
  );
});

test('is accessible', async () => {
  const {container} = render(<ModularScaleBoxes />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

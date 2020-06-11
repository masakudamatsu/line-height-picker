import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import ModularScaleBoxes from './ModularScaleBoxes';

const mockHandleXHeightRatioChange = jest.fn();
const mockHandleLineHeightRatioChange = jest.fn();
const mockValidateModularScale = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test('renders correctly', () => {
  const {container} = render(
    <ModularScaleBoxes
      handleXHeightRatioChange={mockHandleXHeightRatioChange}
      handleLineHeightRatioChange={mockHandleLineHeightRatioChange}
      validateModularScale={mockValidateModularScale}
    />,
  );
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
    }

    .c0::before,
    .c0::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c0::before {
      margin-bottom: -0.2555em;
    }

    .c0::after {
      margin-top: -0.4025em;
    }

    .c8 {
      -webkit-align-items: flex-start;
      -webkit-box-align: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-family: 'Fedra Sans 3',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-weight: 500;
      visibility: hidden;
    }

    .c9 {
      -webkit-flex: 0 0 0.9427em;
      -ms-flex: 0 0 0.9427em;
      flex: 0 0 0.9427em;
      height: 0.9427em;
      width: 0.9427em;
      margin-left: -0.0786em;
      margin-right: 0.3214em;
      margin-top: -0.0786em;
      stroke: hsl(0,0%,74%);
      visibility: hidden;
    }

    .c4 {
      position: absolute;
      left: 16px;
      top: 8px;
      top: calc( 8px - 0.07162480376766091rem );
    }

    .c6 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
      text-align: right;
    }

    .c6::before,
    .c6::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c6::before {
      margin-bottom: -0.2555em;
    }

    .c6::after {
      margin-top: -0.4025em;
    }

    .c6::before {
      margin-bottom: -0.4165em;
    }

    .c2 {
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
      width: 100%;
    }

    .c3 {
      height: 97.63392857142857px;
      position: relative;
      width: 45%;
    }

    .c5 {
      background-color: hsl(0,0%,10%);
      border: 2px solid hsl(0,0%,40%);
      border-radius: 4px;
      color: hsl(0,0%,90%);
      font-family: 'Fedra Mono 2',monospace;
      font-size: 2.5573rem;
      font-weight: 300;
      height: 100%;
      line-height: 1;
      padding-left: 12px;
      padding-top: 1.5696044186813187rem;
      padding-top: calc( 0.3759231rem + 0.6936813186813187rem + 8px );
      text-align: center;
      padding-right: 12px;
      width: 100%;
    }

    .c5:active,
    .c5:hover,
    .c5:focus {
      border: 2px solid hsl(0,0%,90%);
      outline: none;
    }

    .c1 {
      height: 0.8035714285714286rem;
      width: auto;
    }

    .c7 {
      height: 1.2053571428571428rem;
      width: auto;
    }

    @media only screen and (min-width:728px) {
      .c4 {
        top: calc( 8px - 0.08356227106227106rem );
      }
    }

    @media only screen and (min-width:728px) {
      .c3 {
        height: 113.90625px;
      }
    }

    @media only screen and (min-width:728px) {
      .c5 {
        font-size: 2.9836rem;
        padding-top: 1.7478840717948718rem;
        padding-top: calc( 0.43858919999999996rem + 0.8092948717948718rem + 8px );
      }
    }

    @media only screen and (min-width:728px) {
      .c1 {
        height: 0.9375rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c7 {
        height: 1.40625rem;
      }
    }

    <div>
      <p
        class="c0"
      >
        Enter the ratio of
      </p>
      <div
        class="c1"
        height="1"
      />
      <div
        class="c2"
      >
        <div
          class="sc-fzqNqU c3"
        >
          <label
            class="c4"
            for="x-height-for-ratio"
          >
            x-height
          </label>
          <input
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
            autocomplete="off"
            class="sc-fzoNJl sc-fzoXWK c5"
            data-testid="x-height-for-ratio"
            id="x-height-for-ratio"
            inputmode="decimal"
            pattern="([1-9]|[1-9][0-9])([.,]\\\\d{1,4})?|100"
            required=""
            type="text"
            value=""
          />
        </div>
        <span
          class=""
        >
          to
        </span>
        <div
          class="sc-fzqNqU c3"
        >
          <label
            class="c4"
            for="line-height-for-ratio"
          >
            line-height
          </label>
          <input
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
            autocomplete="off"
            class="sc-fzoNJl sc-fzoXWK c5"
            data-testid="line-height-for-ratio"
            id="line-height-for-ratio"
            inputmode="decimal"
            pattern="([1-9]|[1-9][0-9])([.,]\\\\d{1,4})?|100"
            required=""
            type="text"
            value=""
          />
        </div>
      </div>
      <div
        class="c1"
        height="1"
      />
      <p
        class="c6"
        data-testid="instruction-modular-scale"
        id="howManyDecimalPlacesAllowed"
      >
        up to 4 decimal places
      </p>
      <div
        class="c7"
        height="2"
      />
      <div
        class="c8"
      >
        <svg
          class="c9"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title
            id="alertIcon"
          >
            Alert icon
          </title>
          <path
            d="M0 0h24v24H0z"
            stroke="none"
          />
          <path
            d="M12 9v2m0 4v.01"
          />
          <path
            d="M5.07 19H19a2 2 0 0 0 1.75 -2.75L13.75 4a2 2 0 0 0 -3.5 0L3.25 16.25a2 2 0 0 0 1.75 2.75"
          />
        </svg>
        <p
          class="c0"
          data-testid="error-message-modular-scale"
          id="rangeOfNumbersAllowed"
        >
          Please enter a number between 1 and 100 inclusive.
        </p>
      </div>
    </div>
  `);
});

test('The value attribute reflects props value', () => {
  // setup
  const xHeightRatio = '1';
  const lineHeightRatio = '3';
  // execute
  const {getByTestId} = render(
    <ModularScaleBoxes
      xHeightRatio={xHeightRatio}
      lineHeightRatio={lineHeightRatio}
      handleXHeightRatioChange={mockHandleXHeightRatioChange}
      handleLineHeightRatioChange={mockHandleLineHeightRatioChange}
      validateModularScale={mockValidateModularScale}
    />,
  );
  // verify
  expect(getByTestId('x-height-for-ratio')).toHaveAttribute(
    'value',
    `${xHeightRatio}`,
  );
  expect(getByTestId('line-height-for-ratio')).toHaveAttribute(
    'value',
    `${lineHeightRatio}`,
  );
});

test('Entering x-height ratio value calls the handleXHeightRatioChange(), but not validateModularScale(), functions (for each keystroke)', () => {
  // setup
  const {getByTestId} = render(
    <ModularScaleBoxes
      handleXHeightRatioChange={mockHandleXHeightRatioChange}
      handleLineHeightRatioChange={mockHandleLineHeightRatioChange}
      validateModularScale={mockValidateModularScale}
    />,
  );
  const xHeightRatioInput = getByTestId('x-height-for-ratio');
  const userInputList = ['2', '11']; // check two-digits call the function twice
  userInputList.forEach(userdata => {
    // execute
    user.type(xHeightRatioInput, userdata);
    // verify
    expect(mockHandleXHeightRatioChange).toHaveBeenCalledTimes(userdata.length);
    expect(mockHandleXHeightRatioChange).toHaveBeenCalledWith(
      userdata,
      xHeightRatioInput.validity,
    );
    expect(mockValidateModularScale).not.toHaveBeenCalled();
    // isolate
    jest.clearAllMocks();
  });
});

test('Blurring the x-height input field calls the validateModularScale function after entering a value', () => {
  // The blur event cannot be simulated with testing-library. See https://github.com/testing-library/react-testing-library/issues/543
  // setup
  const {getByTestId} = render(
    <ModularScaleBoxes
      handleXHeightRatioChange={mockHandleXHeightRatioChange}
      handleLineHeightRatioChange={mockHandleLineHeightRatioChange}
      validateModularScale={mockValidateModularScale}
    />,
  );
  // execute
  getByTestId('x-height-for-ratio').focus();
  getByTestId('x-height-for-ratio').blur();
  // verify
  expect(mockValidateModularScale).toHaveBeenCalledTimes(1);
});

test('Entering line-height ratio value calls the handleLineHeightRatioChange(), but not validateModularScale(), functions (for each keystroke)', () => {
  // setup
  const {getByTestId} = render(
    <ModularScaleBoxes
      handleXHeightRatioChange={mockHandleXHeightRatioChange}
      handleLineHeightRatioChange={mockHandleLineHeightRatioChange}
      validateModularScale={mockValidateModularScale}
    />,
  );
  const lineHeightRatioInput = getByTestId('line-height-for-ratio');
  const userInputList = ['3', '12']; // check two-digits call the function twice
  userInputList.forEach(userdata => {
    // execute
    user.type(lineHeightRatioInput, userdata);
    // verify
    expect(mockHandleLineHeightRatioChange).toHaveBeenCalledTimes(
      userdata.length,
    );
    expect(mockHandleLineHeightRatioChange).toHaveBeenCalledWith(
      userdata,
      lineHeightRatioInput.validity,
    );
    expect(mockValidateModularScale).not.toHaveBeenCalled();
    // isolate
    jest.clearAllMocks();
  });
});

test('Blurring the line-height input field calls the validateModularScale function after entering a value', () => {
  // setup
  const {getByTestId} = render(
    <ModularScaleBoxes
      handleXHeightRatioChange={mockHandleXHeightRatioChange}
      handleLineHeightRatioChange={mockHandleLineHeightRatioChange}
      validateModularScale={mockValidateModularScale}
    />,
  );
  // execute
  getByTestId('line-height-for-ratio').focus();
  getByTestId('line-height-for-ratio').blur();
  // verify
  expect(mockValidateModularScale).toHaveBeenCalledTimes(1);
});

test('is accessible', async () => {
  const {container} = render(
    <ModularScaleBoxes
      handleXHeightRatioChange={mockHandleXHeightRatioChange}
      handleLineHeightRatioChange={mockHandleLineHeightRatioChange}
      validateModularScale={mockValidateModularScale}
    />,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

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
      margin-bottom: -0.2545em;
    }

    .c0::after {
      margin-top: -0.4025em;
    }

    .c8 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
      font-family: 'Fedra Sans 3',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-weight: 300;
      visibility: hidden;
    }

    .c8::before,
    .c8::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c8::before {
      margin-bottom: -0.2545em;
    }

    .c8::after {
      margin-top: -0.4025em;
    }

    .c4 {
      position: absolute;
      left: 16px;
      top: 8px;
      top: calc( 8px - 0.0706436420722135rem );
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
      margin-bottom: -0.2545em;
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
      background-color: hsl(0,0%,15%);
      border: 2px solid hsl(0,0%,46%);
      border-radius: 4px;
      color: hsl(0,0%,96%);
      font-family: 'Fedra Mono 2',monospace;
      font-size: 2.5537rem;
      font-weight: 300;
      height: 100%;
      line-height: 1;
      padding-left: 12px;
      padding-top: 1.5726100803767662rem;
      padding-top: calc( 0.3779476rem + 0.6946624803767661rem + 8px );
      text-align: center;
      padding-right: 12px;
      width: 100%;
    }

    .c5:active,
    .c5:hover,
    .c5:focus {
      border: 2px solid hsl(0,0%,96%);
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
        top: calc( 8px - 0.08241758241758242rem );
      }
    }

    @media only screen and (min-width:728px) {
      .c3 {
        height: 113.90625px;
      }
    }

    @media only screen and (min-width:728px) {
      .c5 {
        font-size: 2.9793rem;
        padding-top: 1.7513759604395605rem;
        padding-top: calc( 0.44093639999999995rem + 0.8104395604395604rem + 8px );
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
          class="sc-fzoiQi c3"
        >
          <label
            class="c4"
            for="x-height-for-ratio"
          >
            x-height
          </label>
          <input
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
            class="sc-fzqNqU sc-fzoyTs c5"
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
          class="sc-fzoiQi c3"
        >
          <label
            class="c4"
            for="line-height-for-ratio"
          >
            line-height
          </label>
          <input
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
            class="sc-fzqNqU sc-fzoyTs c5"
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
      <p
        class="c8"
        data-testid="error-message-modular-scale"
        id="rangeOfNumbersAllowed"
      >
        Enter a number between 1 and 100 inclusive
      </p>
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

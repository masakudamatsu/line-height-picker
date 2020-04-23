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
    .c1 {
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

    .c2 {
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

    .c0 {
      font-size: 3rem;
      font-weight: 200;
    }

    .c4 {
      color: currentColor;
      font-size: 1rem;
    }

    .c5 {
      color: currentColor;
      font-size: 1rem;
      visibility: hidden;
    }

    .c3 {
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

    .c3:active,
    .c3:hover,
    .c3:focus {
      background-color: hsl(0,0%,35%);
      outline: none;
    }

    <div>
      <h2
        class="c0"
      >
        Pick modular scale
      </h2>
      <p>
        Set the ratio of
      </p>
      <div
        class="c1"
      >
        <div
          class="c2"
        >
          <label
            class=""
            for="x-height-for-ratio"
          >
            x-height
          </label>
          <input
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
            class="sc-fzoNJl sc-fzoXWK c3"
            data-testid="x-height-for-ratio"
            id="x-height-for-ratio"
            inputmode="decimal"
            pattern="([1-9]|[1-9][0-9])([.,]\\\\d{1,4})?|100"
            required=""
            type="text"
            value=""
          />
        </div>
        <span>
          to
        </span>
        <div
          class="c2"
        >
          <label
            class=""
            for="line-height-for-ratio"
          >
            line-height
          </label>
          <input
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
            class="sc-fzoNJl sc-fzoXWK c3"
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
      <p
        class="c4"
        data-testid="instruction-modular-scale"
        id="howManyDecimalPlacesAllowed"
      >
        up to 4 decimal places
      </p>
      <p
        class="c5"
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
    expect(mockHandleXHeightRatioChange).toHaveBeenCalledWith(userdata);
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
    expect(mockHandleLineHeightRatioChange).toHaveBeenCalledWith(userdata);
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

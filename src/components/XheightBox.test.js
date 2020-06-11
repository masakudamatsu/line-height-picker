import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import XheightBox from './XheightBox';

const mockXHeightToFontSize = jest.fn();
const mockValidateXHeight = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test('renders correctly', () => {
  const {container} = render(
    <XheightBox
      handleXHeightChange={mockXHeightToFontSize}
      validateXHeight={mockValidateXHeight}
    />,
  );
  expect(container).toMatchInlineSnapshot(`
    .c9 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
    }

    .c9::before,
    .c9::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c9::before {
      margin-bottom: -0.2555em;
    }

    .c9::after {
      margin-top: -0.4025em;
    }

    .c7 {
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

    .c8 {
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

    .c0 {
      height: 97.63392857142857px;
      position: relative;
    }

    .c1 {
      position: absolute;
      left: 16px;
      top: 8px;
      top: calc( 8px - 0.07162480376766091rem );
    }

    .c5 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
      text-align: right;
    }

    .c5::before,
    .c5::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c5::before {
      margin-bottom: -0.2555em;
    }

    .c5::after {
      margin-top: -0.4025em;
    }

    .c5::before {
      margin-bottom: -0.4165em;
    }

    .c2 {
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
      padding-right: 43.2px;
      padding-right: calc( 32px + 0.7rem );
      width: 100%;
    }

    .c2:active,
    .c2:hover,
    .c2:focus {
      border: 2px solid hsl(0,0%,90%);
      outline: none;
    }

    .c3 {
      display: inline-block;
      font-weight: 500;
      position: absolute;
      right: 16px;
      bottom: 18px;
    }

    .c4 {
      height: 0.8035714285714286rem;
      width: auto;
    }

    .c6 {
      height: 1.2053571428571428rem;
      width: auto;
    }

    @media only screen and (min-width:728px) {
      .c0 {
        height: 113.90625px;
      }
    }

    @media only screen and (min-width:728px) {
      .c1 {
        top: calc( 8px - 0.08356227106227106rem );
      }
    }

    @media only screen and (min-width:728px) {
      .c2 {
        font-size: 2.9836rem;
        padding-top: 1.7478840717948718rem;
        padding-top: calc( 0.43858919999999996rem + 0.8092948717948718rem + 8px );
      }
    }

    @media only screen and (min-width:728px) {
      .c3 {
        bottom: 22px;
      }
    }

    @media only screen and (min-width:728px) {
      .c4 {
        height: 0.9375rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c6 {
        height: 1.40625rem;
      }
    }

    <div>
      <div
        class="c0"
      >
        <label
          class="c1"
          for="x-height-in-pixel"
        >
          Enter x-height
        </label>
        <input
          aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
          autocomplete="off"
          class="sc-fzoNJl sc-fzoXWK c2"
          data-testid="x-height-in-pixel"
          id="x-height-in-pixel"
          inputmode="decimal"
          pattern="([1-9]|[1-9][0-9])([.,]\\\\d{1,4})?|100"
          required=""
          type="text"
          value=""
        />
        <span
          class="c3"
        >
          px
        </span>
      </div>
      <div
        class="c4"
        height="1"
      />
      <p
        class="c5"
        data-testid="instruction-x-height"
        id="howManyDecimalPlacesAllowed"
      >
        up to 4 decimal places
      </p>
      <div
        class="c6"
        height="2"
      />
      <div
        class="c7"
      >
        <svg
          class="c8"
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
          class="c9"
          data-testid="error-message-x-height"
          id="rangeOfNumbersAllowed"
        >
          Please enter a number between 1 and 100 inclusive.
        </p>
      </div>
    </div>
  `);
});

test('The value attribute reflects props.xHeightPx', () => {
  // setup
  const xHeightPx = '10';
  const {getByTestId} = render(
    <XheightBox
      handleXHeightChange={mockXHeightToFontSize}
      validateXHeight={mockValidateXHeight}
      xHeightPx={xHeightPx}
    />,
  );
  expect(getByTestId('x-height-in-pixel')).toHaveAttribute(
    'value',
    `${xHeightPx}`,
  );
});

test('Entering x-height value calls the handleXHeightChange function, but not the validateXHeight function, for each keystroke', () => {
  // setup
  const {getByTestId} = render(
    <XheightBox
      handleXHeightChange={mockXHeightToFontSize}
      validateXHeight={mockValidateXHeight}
    />,
  );
  const xHeightInput = getByTestId('x-height-in-pixel');
  const userXheightList = ['9', '10']; // check if a two-digit number calls the function twice
  userXheightList.forEach(userXheight => {
    // execute
    user.type(xHeightInput, userXheight);
    // verify
    expect(mockXHeightToFontSize).toHaveBeenCalledTimes(userXheight.length);
    expect(mockXHeightToFontSize).toHaveBeenCalledWith(
      userXheight,
      xHeightInput.validity,
    );
    mockXHeightToFontSize.mockClear();

    expect(mockValidateXHeight).not.toHaveBeenCalled();
    mockValidateXHeight.mockClear();
  });
});

test('Blurring the input field calls the validateXHeight function', () => {
  // setup
  const {getByTestId} = render(
    <XheightBox
      handleXHeightChange={mockXHeightToFontSize}
      validateXHeight={mockValidateXHeight}
    />,
  );
  // execute
  getByTestId('x-height-in-pixel').focus();
  getByTestId('x-height-in-pixel').blur();
  // verify
  expect(mockValidateXHeight).toHaveBeenCalled();
});

test('is accessible', async () => {
  const {container} = render(
    <XheightBox
      handleXHeightChange={mockXHeightToFontSize}
      validateXHeight={mockValidateXHeight}
    />,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

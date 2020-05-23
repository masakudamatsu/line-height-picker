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
    .c4 {
      height: 0.8035714285714286rem;
      width: auto;
    }

    .c6 {
      height: 1.2053571428571428rem;
      width: auto;
    }

    .c7 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
      font-weight: 500;
      visibility: hidden;
    }

    .c7::before,
    .c7::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c7::before {
      margin-bottom: -0.2497057983222135rem;
    }

    .c7::after {
      margin-top: -0.39491772924843016rem;
    }

    .c0 {
      height: 97.63392857142857px;
      position: relative;
    }

    .c1 {
      position: absolute;
      left: 16px;
      top: 8px;
      top: calc( 8px - 0.0706436420722135rem );
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
      margin-bottom: -0.2497057983222135rem;
    }

    .c5::after {
      margin-top: -0.39491772924843016rem;
    }

    .c5::before {
      margin-bottom: -0.40865399298469385rem;
    }

    .c2 {
      background-color: hsl(0,0%,25%);
      border: 2px solid hsl(0,0%,46%);
      border-radius: 4px;
      color: hsl(0,0%,96%);
      font-family: 'Fedra Mono',monospace;
      font-size: 2.553722760290557rem;
      height: 100%;
      line-height: 1;
      padding-left: 12px;
      padding-top: 1.5726134488997685rem;
      padding-top: calc( 0.37795096852300236rem + 0.6946624803767661rem + 8px );
      text-align: center;
      padding-right: 43.2px;
      padding-right: calc( 32px + 0.7rem );
      width: 100%;
    }

    .c2:active,
    .c2:hover,
    .c2:focus {
      border: 2px solid hsl(0,0%,96%);
      outline: none;
    }

    .c3 {
      display: inline-block;
      font-weight: 500;
      position: absolute;
      right: 16px;
      bottom: 18px;
    }

    @media only screen and (min-width:1024px) {
      .c7::before {
        margin-bottom: -0.29132305116758245rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c7::after {
        margin-top: -0.46073697058150187rem;
      }
    }

    @media only screen and (min-width:1024px) {

    }

    @media only screen and (min-width:1024px) {
      .c0 {
        height: 113.90625px;
      }
    }

    @media only screen and (min-width:1024px) {
      .c1 {
        top: calc( 8px - 0.08241758241758242rem );
      }
    }

    @media only screen and (min-width:1024px) {
      .c5::before {
        margin-bottom: -0.29132305116758245rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c5::after {
        margin-top: -0.46073697058150187rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c5::before {
        margin-bottom: -0.47676261160714284rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c2 {
        font-size: 2.979343220338983rem;
        padding-top: 1.75138235704973rem;
        padding-top: calc( 0.4409427966101695rem + 0.8104395604395604rem + 8px );
      }
    }

    @media only screen and (min-width:1024px) {
      .c3 {
        bottom: 22px;
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
        class="sc-Axmtr c5"
        data-testid="instruction-x-height"
        id="howManyDecimalPlacesAllowed"
      >
        up to 4 decimal places
      </p>
      <div
        class="c6"
        height="2"
      />
      <p
        class="sc-Axmtr c7"
        data-testid="error-message-x-height"
        id="rangeOfNumbersAllowed"
      >
        Please enter a number between 1 and 100 inclusive.
      </p>
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
    expect(mockXHeightToFontSize).toHaveBeenCalledWith(userXheight);
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

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
    .c2 {
      color: currentColor;
      font-size: 1rem;
    }

    .c3 {
      color: currentColor;
      font-size: 1rem;
      visibility: hidden;
    }

    .c0 {
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

    .c1 {
      background-color: hsl(0,0%,25%);
      border: none;
      border-bottom: 2px solid hsl(0,0%,96%);
      border-radius: 4px 4px 0 0;
      color: hsl(0,0%,96%);
      font-weight: 200;
      font-size: 9rem;
      text-align: center;
      -moz-appearance: textfield;
      -webkit-appearance: textfield;
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
      padding: 1rem;
      width: 90%;
    }

    .c1:active,
    .c1:hover,
    .c1:focus {
      background-color: hsl(0,0%,35%);
      outline: none;
    }

    .c1::-webkit-inner-spin-button,
    .c1::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    <div>
      <label
        class=""
        for="x-height-in-pixel"
      >
        Set x-height
      </label>
      <div
        class="c0"
      >
        <input
          aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
          class="sc-fzoNJl sc-fzoXWK c1"
          data-testid="x-height-in-pixel"
          id="x-height-in-pixel"
          max="100"
          min="1"
          pattern="[0-9]*[.,]?[0-9]+"
          required=""
          step="0.0001"
          type="number"
          value=""
        />
        <span>
          px
        </span>
      </div>
      <p
        class="c2"
        data-testid="instruction-x-height"
        id="howManyDecimalPlacesAllowed"
      >
        up to 4 decimal places
      </p>
      <p
        class="c3"
        data-testid="error-message-x-height"
        id="rangeOfNumbersAllowed"
      >
        Enter a number between 1 and 100 inclusive
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

import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import XheightBox from './XheightBox';
import colorPalette from '../theme/colorPalette';

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
    .c3 {
      color: currentColor;
      font-size: 1rem;
    }

    .c4 {
      color: currentColor;
      font-size: 1rem;
      visibility: hidden;
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
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
            class="sc-fzoyTs c2"
            data-testid="x-height-in-pixel"
            id="x-height"
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
          class="c3"
          data-testid="instruction-x-height"
          id="howManyDecimalPlacesAllowed"
        >
          up to 4 decimal places
        </p>
        <p
          class="c4"
          data-testid="error-message-x-height"
          id="rangeOfNumbersAllowed"
        >
          Enter a number between 1 and 100 inclusive
        </p>
      </form>
    </div>
  `);
});

test('The value attribute reflects props.xHeightPx', () => {
  // setup
  const xHeightPx = 10;
  const {getByLabelText} = render(
    <XheightBox
      handleXHeightChange={mockXHeightToFontSize}
      validateXHeight={mockValidateXHeight}
      xHeightPx={xHeightPx}
    />,
  );
  expect(getByLabelText(/x-height/i)).toHaveAttribute('value', `${xHeightPx}`);
});

test('Entering x-height value calls the handleXHeightChange function and the validateXHeight function for each keystroke', () => {
  // setup
  const {getByLabelText} = render(
    <XheightBox
      handleXHeightChange={mockXHeightToFontSize}
      validateXHeight={mockValidateXHeight}
    />,
  );
  const xHeightInput = getByLabelText(/x-height/i);
  const userXheightList = ['9', '10']; // check two-digits call the function twice
  userXheightList.forEach(userXheight => {
    // execute
    user.type(xHeightInput, userXheight);
    // verify
    expect(mockXHeightToFontSize).toHaveBeenCalledTimes(userXheight.length);
    expect(mockXHeightToFontSize).toHaveBeenCalledWith(userXheight);
    mockXHeightToFontSize.mockClear();

    expect(mockValidateXHeight).toHaveBeenCalledTimes(userXheight.length);
    mockValidateXHeight.mockClear();
  });
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

import React from 'react';
import render from './test-utils/render';
import {cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import XheightBox from './XheightBox';
import colorPalette from '../theme/colorPalette';

const mockXHeightToFontSize = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test('renders correctly', () => {
  const {container} = render(<XheightBox />);
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
            class="sc-fzoiQi c2"
            data-testid="x-height-in-pixel"
            id="x-height"
            max="100"
            min="1"
            pattern="[0-9]*[.,]?[0-9]+"
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
        >
          up to 4 decimal places
        </p>
        <p
          class="c4"
        >
          Enter a number between 1 and 100 inclusive
        </p>
      </form>
    </div>
  `);
});

test('The value attribute reflects props.xHeightPx', () => {
  // setup
  const xHeightPx = '10';
  const {getByLabelText} = render(<XheightBox xHeightPx={xHeightPx} />);
  expect(getByLabelText(/x-height/i)).toHaveAttribute('value', xHeightPx);
});

test('Entering x-height value calls the xHeightToFontSize function', () => {
  // setup
  const userXheight = '10';
  // execute
  const {getByLabelText} = render(
    <XheightBox xHeightToFontSize={mockXHeightToFontSize} />,
  );
  const xHeightInput = getByLabelText(/x-height/i);
  fireEvent.change(xHeightInput, {target: {value: userXheight}});
  // verify
  expect(mockXHeightToFontSize).toHaveBeenCalledTimes(1);
  expect(mockXHeightToFontSize).toHaveBeenCalledWith(userXheight);
});

test('Entering more than 4 decimal places changes the text color for "up to 4 decimal places"', () => {
  // Setup
  const invalidUserInput = '12.34567';
  // Execute
  const {getByLabelText, getByText} = render(
    <XheightBox xHeightToFontSize={mockXHeightToFontSize} />,
  );
  const xHeightInput = getByLabelText(/x-height/i);
  fireEvent.change(xHeightInput, {target: {value: invalidUserInput}});
  // verify
  const instructionText = getByText(/decimal/i);
  expect(instructionText).toHaveStyle(`color: ${colorPalette.errorText}`);
});

test('Entering a value less than 1 shows an alert message on the value range', () => {
  // Setup
  const {getByLabelText, getByText} = render(
    <XheightBox xHeightToFontSize={mockXHeightToFontSize} />,
  );
  const xHeightInput = getByLabelText(/x-height/i);
  const invalidUserInputs = ['0', '-1'];
  invalidUserInputs.forEach(invalidUserInput => {
    // Execute
    fireEvent.change(xHeightInput, {target: {value: invalidUserInput}});
    // verify
    const alertText = getByText(/between/i);
    expect(alertText).toHaveStyle(`color: ${colorPalette.errorText}`);
  });
});

test('Entering a value more than 100 shows an alert message on the value range', () => {
  // Setup
  const {getByLabelText, getByText} = render(
    <XheightBox xHeightToFontSize={mockXHeightToFontSize} />,
  );
  const xHeightInput = getByLabelText(/x-height/i);
  const invalidUserInputs = ['234', '1056'];
  invalidUserInputs.forEach(invalidUserInput => {
    // Execute
    fireEvent.change(xHeightInput, {target: {value: invalidUserInput}});
    // verify
    const alertText = getByText(/between/i);
    expect(alertText).toHaveStyle(`color: ${colorPalette.errorText}`);
  });
});

test('is accessible', async () => {
  const {container} = render(<XheightBox />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

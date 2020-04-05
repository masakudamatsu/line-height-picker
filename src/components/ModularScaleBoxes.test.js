import React from 'react';
import render from './test-utils/render';
import {cleanup, fireEvent} from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import ModularScaleBoxes from './ModularScaleBoxes';
import colorPalette from '../theme/colorPalette';

const mockHandleXHeightRatio = jest.fn();
const mockHandleLineHeightRatio = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

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
      color: currentColor;
      font-size: 1rem;
    }

    .c6 {
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
              class="sc-fzoiQi c4"
              data-testid="x-height-for-ratio"
              id="x-height-scale"
              min="1"
              pattern="[0-9]*[.,]?[0-9]+"
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
              class="sc-fzoiQi c4"
              data-testid="line-height-for-ratio"
              id="line-height-scale"
              min="1"
              pattern="[0-9]*[.,]?[0-9]+"
              step="0.0001"
              type="number"
              value=""
            />
          </div>
        </div>
        <p
          class="c5"
          data-testid="instruction-modular-scale"
        >
          up to 4 decimal places
        </p>
        <p
          class="c6"
          data-testid="error-message-modular-scale"
        >
          Enter a number between 1 and 100 inclusive
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

test('Entering x-height ratio value calls the handleXHeightRatio() function', () => {
  // setup
  const userdata = '2';
  // execute
  const {getByLabelText} = render(
    <ModularScaleBoxes handleXHeightRatio={mockHandleXHeightRatio} />,
  );
  const xHeightRatioInput = getByLabelText(/x-height/i);
  fireEvent.change(xHeightRatioInput, {target: {value: userdata}});
  // verify
  expect(mockHandleXHeightRatio).toHaveBeenCalledTimes(1);
  expect(mockHandleXHeightRatio).toHaveBeenCalledWith(userdata);
});

test('Entering line-height ratio value calls the handleLineHeightRatio() function', () => {
  // setup
  const userdata = '3';
  // execute
  const {getByLabelText} = render(
    <ModularScaleBoxes handleLineHeightRatio={mockHandleLineHeightRatio} />,
  );
  const lineHeightRatioInput = getByLabelText(/line-height/i, {
    selector: 'input',
  });
  fireEvent.change(lineHeightRatioInput, {target: {value: userdata}});
  // verify
  expect(mockHandleLineHeightRatio).toHaveBeenCalledTimes(1);
  expect(mockHandleLineHeightRatio).toHaveBeenCalledWith(userdata);
});

test('Entering more than 4 decimal places for x-height ratio changes the text color for "up to 4 decimal places"', () => {
  // Setup
  const invalidUserInput = '12.34567';
  // execute
  const {getByLabelText, getByText} = render(
    <ModularScaleBoxes handleXHeightRatio={mockHandleXHeightRatio} />,
  );
  const xHeightRatioInput = getByLabelText(/x-height/i);
  fireEvent.change(xHeightRatioInput, {target: {value: invalidUserInput}});

  // verify
  const instructionText = getByText(/decimal/i);
  expect(instructionText).toHaveStyle(`color: ${colorPalette.errorText}`);
});

test('Entering more than 4 decimal places for line-height ratio changes the text color for "up to 4 decimal places"', () => {
  // Setup
  const invalidUserInput = '12.34567';
  // execute
  const {getByLabelText, getByText} = render(
    <ModularScaleBoxes handleLineHeightRatio={mockHandleLineHeightRatio} />,
  );
  const lineHeightRatioInput = getByLabelText(/line-height/i, {
    selector: 'input',
  });
  fireEvent.change(lineHeightRatioInput, {target: {value: invalidUserInput}});

  // verify
  const instructionText = getByText(/decimal/i);
  expect(instructionText).toHaveStyle(`color: ${colorPalette.errorText}`);
});

test('Entering a value less than 1 for x-height shows an alert message on the value range', () => {
  // Setup
  const {getByLabelText, getByText} = render(
    <ModularScaleBoxes handleXHeightRatio={mockHandleXHeightRatio} />,
  );
  const xHeightRatioInput = getByLabelText(/x-height/i);
  const invalidUserInputs = ['0', '-1'];
  invalidUserInputs.forEach(invalidUserInput => {
    // Execute
    user.type(xHeightRatioInput, invalidUserInput);
    // verify
    const alertText = getByText(/between/i);
    expect(alertText).toHaveStyle(`color: ${colorPalette.errorText}`);
  });
});

test('Entering a value less than 1 for line-height shows an alert message on the value range', () => {
  // Setup
  const {getByLabelText, getByText} = render(
    <ModularScaleBoxes handleLineHeightRatio={mockHandleLineHeightRatio} />,
  );
  const lineHeightRatioInput = getByLabelText(/line-height/i, {
    selector: 'input',
  });
  const invalidUserInputs = ['0', '-1'];
  invalidUserInputs.forEach(invalidUserInput => {
    // Execute
    user.type(lineHeightRatioInput, invalidUserInput);
    // verify
    const alertText = getByText(/between/i);
    expect(alertText).toHaveStyle(`color: ${colorPalette.errorText}`);
  });
});

test('Entering a value more than 100 for x-height shows an alert message on the value range', () => {
  // Setup
  const {getByLabelText, getByText} = render(
    <ModularScaleBoxes handleXHeightRatio={mockHandleXHeightRatio} />,
  );
  const xHeightInput = getByLabelText(/x-height/i);
  const invalidUserInputs = ['234', '1056'];
  invalidUserInputs.forEach(invalidUserInput => {
    // Execute
    user.type(xHeightInput, invalidUserInput);
    // verify
    const alertText = getByText(/between/i);
    expect(alertText).toHaveStyle(`color: ${colorPalette.errorText}`);
  });
});

test('Entering a value more than 100 for line-height shows an alert message on the value range', () => {
  // Setup
  const {getByLabelText, getByText} = render(
    <ModularScaleBoxes handleLineHeightRatio={mockHandleLineHeightRatio} />,
  );
  const lineHeightInput = getByLabelText(/line-height/i, {
    selector: 'input',
  });
  const invalidUserInputs = ['234', '1056'];
  invalidUserInputs.forEach(invalidUserInput => {
    // Execute
    user.type(lineHeightInput, invalidUserInput);
    // verify
    const alertText = getByText(/between/i);
    expect(alertText).toHaveStyle(`color: ${colorPalette.errorText}`);
  });
});

test('is accessible', async () => {
  const {container} = render(<ModularScaleBoxes />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

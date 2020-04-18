import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import FontTableBox from './FontTableBox';

const mockUpdateFontMetrics = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test('renders correctly', () => {
  const {container} = render(
    <FontTableBox updateFontMetrics={mockUpdateFontMetrics} />,
  );
  expect(container).toMatchInlineSnapshot(`
    .c1 {
      color: currentColor;
      font-size: 1rem;
    }

    .c4 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: inherit;
      border: 2px solid currentColor;
      border-radius: 4px;
      color: inherit;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      font-size: 5vw;
      font-weight: bold;
      max-width: 315px;
      padding: 5.625% 11.25%;
      -webkit-text-decoration: none;
      text-decoration: none;
      text-transform: uppercase;
      width: 45%;
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

    .c3 {
      background-color: hsl(0,0%,25%);
      border: none;
      border-bottom: 2px solid hsl(0,0%,96%);
      border-radius: 4px 4px 0 0;
      color: hsl(0,0%,96%);
      font-weight: 200;
      font-size: 9rem;
      text-align: center;
    }

    .c3:active,
    .c3:hover,
    .c3:focus {
      background-color: hsl(0,0%,35%);
      outline: none;
    }

    .c2 {
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
    }

    .c2:active,
    .c2:hover,
    .c2:focus {
      background-color: hsl(0,0%,35%);
      outline: none;
    }

    .c2::-webkit-inner-spin-button,
    .c2::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    @media (min-width:875px) {
      .c4 {
        font-size: 43.75px;
      }
    }

    <div>
      <form
        class="c0"
      >
        <p
          class="c1"
        >
          Or enter font table values:
        </p>
        <label
          class=""
          for="sxHeight"
        >
          sxHeight
        </label>
        <input
          class="c2"
          data-testid="sxHeight"
          id="sxHeight"
          name="sxHeight"
          pattern="[0-9]*[.,]?[0-9]+"
          type="number"
        />
        <label
          class=""
          for="sCapHeight"
        >
          sCapHeight
        </label>
        <input
          class="c2"
          data-testid="sCapHeight"
          id="sCapHeight"
          name="sCapHeight"
          pattern="[0-9]*[.,]?[0-9]+"
          type="number"
        />
        <label
          class=""
          for="unitsPerEm"
        >
          unitsPerEm
        </label>
        <input
          class="c2"
          data-testid="unitsPerEm"
          id="unitsPerEm"
          name="unitsPerEm"
          pattern="[0-9]*[.,]?[0-9]+"
          type="number"
        />
        <label
          class=""
          for="fontFamily"
        >
          fontFamily
        </label>
        <input
          class="c3"
          data-testid="fontFamily"
          id="fontFamily"
          name="fontFamily"
          type="text"
        />
        <label
          class=""
          for="fontSubfamily"
        >
          fontSubfamily
        </label>
        <input
          class="c3"
          data-testid="fontSubfamily"
          id="fontSubfamily"
          name="fontSubfamily"
          type="text"
        />
        <label
          class=""
          for="usWeightClass"
        >
          usWeightClass
        </label>
        <input
          class="c2"
          data-testid="usWeightClass"
          id="usWeightClass"
          name="usWeightClass"
          pattern="[0-9]*[.,]?[0-9]+"
          type="number"
        />
        <button
          class="c4"
        >
          Next
        </button>
      </form>
    </div>
  `);
});

test('calls the updateFontMetrics function when the Next button is clicked', () => {
  const userInput = {
    fontFamily: 'Roboto Slab',
    fontSubfamily: 'Light',
    sCapHeight: '1456',
    sxHeight: '1082',
    unitsPerEm: '2048',
    usWeightClass: '300',
  };
  const {getByLabelText, getByText} = render(
    <FontTableBox updateFontMetrics={mockUpdateFontMetrics} />,
  );
  user.type(getByLabelText('sxHeight'), userInput.sxHeight);
  user.type(getByLabelText('sCapHeight'), userInput.sCapHeight);
  user.type(getByLabelText('unitsPerEm'), userInput.unitsPerEm);
  user.type(getByLabelText('fontFamily'), userInput.fontFamily);
  user.type(getByLabelText('fontSubfamily'), userInput.fontSubfamily);
  user.type(getByLabelText('usWeightClass'), userInput.usWeightClass);
  getByText(/next/i).click();
  expect(mockUpdateFontMetrics).toHaveBeenCalledTimes(1);
  expect(mockUpdateFontMetrics).toHaveBeenCalledWith(userInput);
});
test('is accessible', async () => {
  const {container} = render(
    <FontTableBox updateFontMetrics={mockUpdateFontMetrics} />,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

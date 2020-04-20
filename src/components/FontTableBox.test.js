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

const userInput = {
  preferredFamily: 'Roboto Slab',
  preferredSubfamily: 'Light',
  sCapHeight: '1456',
  sxHeight: '1082',
  unitsPerEm: '2048',
  usWeightClass: '300',
};

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
      color: currentColor;
      font-size: 1rem;
      visibility: hidden;
    }

    .c2 {
      font-family: monospace;
      font-size: 1rem;
    }

    .c6 {
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

    .c5 {
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

    .c5:active,
    .c5:hover,
    .c5:focus {
      background-color: hsl(0,0%,35%);
      outline: none;
    }

    .c5::-webkit-inner-spin-button,
    .c5::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    @media (min-width:875px) {
      .c6 {
        font-size: 43.75px;
      }
    }

    <div>
      <form
        class="c0"
        novalidate=""
      >
        <p
          class="c1"
        >
          Or enter font table values:
        </p>
        <label
          class=""
          for="preferredFamily"
        >
          preferredFamily
        </label>
        <p
          class="c1"
          id="instruction-preferredFamily"
        >
          Font family name to be used for the 
          <code
            class="c2"
          >
            font-family
          </code>
           CSS property. It can be found in the 
          <code
            class="c2"
          >
            name
          </code>
           table. If it doesn't exist, enter the 
          <code
            class="c2"
          >
            fontFamily
          </code>
           value.
        </p>
        <input
          aria-describedby="instruction-preferredFamily error-message-preferredFamily"
          class="c3"
          data-testid="preferredFamily"
          id="preferredFamily"
          name="preferredFamily"
          placeholder="Open Sans"
          required=""
          type="text"
        />
        <p
          class="c4"
          data-testid="error-message-preferredFamily"
          id="error-message-preferredFamily"
        >
          Enter the font family name.
        </p>
        <label
          class=""
          for="preferredSubfamily"
        >
          preferredSubfamily
        </label>
        <p
          class="c1"
          id="instruction-preferredSubfamily"
        >
          Font subfamily name (e.g. Light, Regular, Bold). It can be found in the
          <code
            class="c2"
          >
            name
          </code>
           table. If it doesn't exist, enter the
           
          <code
            class="c2"
          >
            fontSubfamily
          </code>
           value.
        </p>
        <input
          aria-describedby="instruction-preferredSubfamily error-message-preferredSubfamily"
          class="c3"
          data-testid="preferredSubfamily"
          id="preferredSubfamily"
          name="preferredSubfamily"
          placeholder="Regular"
          required=""
          type="text"
        />
        <p
          class="c4"
          data-testid="error-message-preferredSubfamily"
          id="error-message-preferredSubfamily"
        >
          Enter the font subfamily name (such as Regular, Italic, Bold, Light).
        </p>
        <label
          class=""
          for="usWeightClass"
        >
          usWeightClass
        </label>
        <p
          class="c1"
          id="instruction-usWeightClass"
        >
          Number to be used for the 
          <code
            class="c2"
          >
            font-weight
          </code>
           CSS property. It can be found in the 
          <code
            class="c2"
          >
            OS/2
          </code>
           table.
        </p>
        <input
          aria-describedby="instruction--usWeightClass"
          class="c5"
          data-testid="usWeightClass"
          id="usWeightClass"
          name="usWeightClass"
          pattern="[0-9]*[.,]?[0-9]+"
          placeholder="400"
          type="number"
        />
        <label
          class=""
          for="unitsPerEm"
        >
          unitsPerEm
        </label>
        <p
          class="c1"
          id="instruction-unitsPerEm"
        >
          Number of units for the length set by the 
          <code
            class="c2"
          >
            font-size
          </code>
           CSS property. It can be found in the 
          <code
            class="c2"
          >
            head
          </code>
           table. Usually, either 1000, 1024 or 2048.
        </p>
        <input
          aria-describedby="instruction-unitsPerEm"
          class="c5"
          data-testid="unitsPerEm"
          id="unitsPerEm"
          name="unitsPerEm"
          pattern="[0-9]*[.,]?[0-9]+"
          placeholder="2048"
          type="number"
        />
        <label
          class=""
          for="sxHeight"
        >
          sxHeight
        </label>
        <p
          class="c1"
          id="instruction-sxHeight"
        >
          Number of units for x-height (the height of lowercase x). It can be found in the 
          <code
            class="c2"
          >
            OS/2
          </code>
           table.
        </p>
        <input
          aria-describedby="instruction-sxHeight"
          class="c5"
          data-testid="sxHeight"
          id="sxHeight"
          name="sxHeight"
          pattern="[0-9]*[.,]?[0-9]+"
          placeholder="1096"
          type="number"
        />
        <label
          class=""
          for="sCapHeight"
        >
          sCapHeight
        </label>
        <p
          class="c1"
          id="instruction-sCapHeight"
        >
          Number of units for cap-height (the height of uppercase H). It can be found in the 
          <code
            class="c2"
          >
            OS/2
          </code>
           table.
        </p>
        <input
          aria-describedby="instruction-sCapHeight"
          class="c5"
          data-testid="sCapHeight"
          id="sCapHeight"
          name="sCapHeight"
          pattern="[0-9]*[.,]?[0-9]+"
          placeholder="1462"
          type="number"
        />
        <button
          class="c6"
        >
          Next
        </button>
      </form>
    </div>
  `);
});

test('calls the updateFontMetrics function after clicking the next buton with all font metric values supplied', () => {
  const {getByLabelText, getByText} = render(
    <FontTableBox updateFontMetrics={mockUpdateFontMetrics} />,
  );
  user.type(getByLabelText('sxHeight'), userInput.sxHeight);
  user.type(getByLabelText('sCapHeight'), userInput.sCapHeight);
  user.type(getByLabelText('unitsPerEm'), userInput.unitsPerEm);
  user.type(getByLabelText('preferredFamily'), userInput.preferredFamily);
  user.type(getByLabelText('preferredSubfamily'), userInput.preferredSubfamily);
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

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
    .c7 {
      font-weight: inherit;
    }

    .c1 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
    }

    .c1::before,
    .c1::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c1::before {
      margin-bottom: -0.2497057983222135rem;
    }

    .c1::after {
      margin-top: -0.39491772924843016rem;
    }

    .c5 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
      font-weight: 500;
      visibility: hidden;
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

    .c3 {
      font-family: 'Fedra Mono',monospace;
      font-weight: 400;
    }

    .c8 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: hsl(0,0%,25%);
      border: none;
      border-radius: 7.619047619047619px;
      box-shadow: -2px 0 6px 0px hsla(0,0%,100%,0.5), 0 -2px 6px 0px hsla(0,0%,100%,0.5),2px 0 6px 0 hsla(0,0%,100%,0.5), 0 2px 6px 0 hsla(0,0%,1000%,0.5);
      color: inherit;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-family: 'Fedra Sans Alt',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 1.6814635458703255rem;
      font-weight: 500;
      height: 68.57142857142857px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      -webkit-text-decoration: none;
      text-decoration: none;
      width: 294.2857142857143px;
    }

    .c8:focus,
    .c8:hover {
      background-color: hsl(0,0%,56%);
      box-shadow: -4px 0 12px 0px hsla(0,0%,100%,0.5), 0 -4px 12px 0px hsla(0,0%,100%,0.5), 4px 0 12px 0 hsla(0,0%,100%,0.5),0 4px 12px 0 hsla(0,0%,1000%,0.5);
      outline: none;
    }

    .c8:active {
      background-color: hsl(0,0%,56%);
      box-shadow: -1px 0 1px 0px hsla(0,0%,100%,0.5), 0 -1px 1px 0px hsla(0,0%,100%,0.5),1px 0 1px 0 hsla(0,0%,100%,0.5), 0 1px 1px 0 hsla(0,0%,1000%,0.5);
      outline: none;
    }

    .c8[disabled] {
      box-shadow: none;
      cursor: not-allowed;
      opacity: 0.35;
    }

    .c8::after {
      content: '→';
      position: absolute;
      right: 15.238095238095237px;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c2 {
      position: absolute;
      left: 16px;
      top: 8px;
      top: calc( 8px - 0.0706436420722135rem );
    }

    .c4 {
      background-color: hsl(0,0%,25%);
      border: 2px solid hsl(0,0%,46%);
      border-radius: 4px;
      color: hsl(0,0%,96%);
      font-family: 'Fedra Mono',monospace;
      font-size: 1.8916464891041163rem;
      height: 100%;
      line-height: 1;
      padding-left: 12px;
      padding-top: 1.4746261607641753rem;
      padding-top: calc( 0.2799636803874092rem + 0.6946624803767661rem + 8px );
      text-align: center;
    }

    .c4:active,
    .c4:hover,
    .c4:focus {
      border: 2px solid hsl(0,0%,96%);
      outline: none;
    }

    .c6 {
      background-color: hsl(0,0%,25%);
      border: 2px solid hsl(0,0%,46%);
      border-radius: 4px;
      color: hsl(0,0%,96%);
      font-family: 'Fedra Mono',monospace;
      font-size: 1.8916464891041163rem;
      height: 100%;
      line-height: 1;
      padding-left: 12px;
      padding-top: 1.4746261607641753rem;
      padding-top: calc( 0.2799636803874092rem + 0.6946624803767661rem + 8px );
      text-align: center;
    }

    .c6:active,
    .c6:hover,
    .c6:focus {
      border: 2px solid hsl(0,0%,96%);
      outline: none;
    }

    @media only screen and (min-width:1024px) {
      .c1::before {
        margin-bottom: -0.29132305116758245rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c1::after {
        margin-top: -0.46073697058150187rem;
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

    }

    @media only screen and (min-width:1024px) {
      .c8 {
        border-radius: 8.88888888888889;
        font-size: 1.9617074701820465rem;
        height: 80px;
        width: 343.33333333333337px;
      }
    }

    @media only screen and (min-width:1024px) {
      .c8::after {
        right: 17.77777777777778px;
      }
    }

    @media only screen and (min-width:1024px) {
      .c2 {
        top: calc( 8px - 0.08241758241758242rem );
      }
    }

    @media only screen and (min-width:1024px) {
      .c4 {
        font-size: 2.2069209039548023rem;
        padding-top: 1.6370638542248712rem;
        padding-top: calc( 0.3266242937853107rem + 0.8104395604395604rem + 8px );
      }
    }

    @media only screen and (min-width:1024px) {
      .c6 {
        font-size: 2.2069209039548023rem;
        padding-top: 1.6370638542248712rem;
        padding-top: calc( 0.3266242937853107rem + 0.8104395604395604rem + 8px );
      }
    }

    <div>
      <form
        autocomplete="off"
        class="c0"
        novalidate=""
      >
        <p
          class="c1"
        >
          Or enter font table values:
        </p>
        <label
          class="c2"
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
            class="c3"
          >
            font-family
          </code>
           CSS property. It can be found in the 
          <code
            class="c3"
          >
            name
          </code>
           table. If it doesn't exist, enter the 
          <code
            class="c3"
          >
            fontFamily
          </code>
           value.
        </p>
        <input
          aria-describedby="instruction-preferredFamily error-message-preferredFamily"
          class="c4"
          data-testid="preferredFamily"
          id="preferredFamily"
          name="preferredFamily"
          placeholder="Open Sans"
          required=""
          type="text"
        />
        <p
          class="c5"
          data-testid="error-message-preferredFamily"
          id="error-message-preferredFamily"
        >
          Enter the font family name.
        </p>
        <label
          class="c2"
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
            class="c3"
          >
            name
          </code>
           table. If it doesn't exist, enter the
           
          <code
            class="c3"
          >
            fontSubfamily
          </code>
           value.
        </p>
        <input
          aria-describedby="instruction-preferredSubfamily error-message-preferredSubfamily"
          class="c4"
          data-testid="preferredSubfamily"
          id="preferredSubfamily"
          name="preferredSubfamily"
          placeholder="Regular"
          required=""
          type="text"
        />
        <p
          class="c5"
          data-testid="error-message-preferredSubfamily"
          id="error-message-preferredSubfamily"
        >
          Enter the font subfamily name (such as Regular, Italic, Bold, Light).
        </p>
        <label
          class="c2"
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
            class="c3"
          >
            font-weight
          </code>
           CSS property. It can be found in the 
          <code
            class="c3"
          >
            OS/2
          </code>
           table.
        </p>
        <input
          aria-describedby="instruction--usWeightClass error-message-usWeightClass"
          class="c6"
          data-testid="usWeightClass"
          id="usWeightClass"
          inputmode="decimal"
          name="usWeightClass"
          pattern="[1-9]|[1-9][0-9]|[1-9][0-9]{2}|1000"
          placeholder="400"
          required=""
          type="text"
        />
        <p
          class="c5"
          data-testid="error-message-usWeightClass"
          id="error-message-usWeightClass"
        >
          Please enter a
           
          <b
            class="c7"
            data-testid="bring-attention-usWeightClass"
          >
            whole number
          </b>
           
          between 1 and 1000.
        </p>
        <label
          class="c2"
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
            class="c3"
          >
            font-size
          </code>
           CSS property. It can be found in the 
          <code
            class="c3"
          >
            head
          </code>
           table. Usually, either 1000, 1024 or 2048.
        </p>
        <input
          aria-describedby="instruction-unitsPerEm error-message-unitsPerEm"
          class="c6"
          data-testid="unitsPerEm"
          id="unitsPerEm"
          inputmode="decimal"
          name="unitsPerEm"
          pattern="1[6-9]|[2-9][0-9]|[1-9][0-9]{2}|[1-9][0-9]{3}|1[0-5][0-9]{3}|16[0-2][0-9]{2}|163[0-7][0-9]|1638[0-4]"
          placeholder="2048"
          required=""
          type="text"
        />
        <p
          class="c5"
          data-testid="error-message-unitsPerEm"
          id="error-message-unitsPerEm"
        >
          Please enter a
           
          <b
            class="c7"
            data-testid="bring-attention-unitsPerEm"
          >
            whole number
          </b>
           
          between 16 and 16384.
        </p>
        <label
          class="c2"
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
            class="c3"
          >
            OS/2
          </code>
           table.
        </p>
        <input
          aria-describedby="instruction-sxHeight error-message-sxHeight"
          class="c6"
          data-testid="sxHeight"
          id="sxHeight"
          inputmode="decimal"
          name="sxHeight"
          pattern="1[6-9]|[2-9][0-9]|[1-9][0-9]{2}|[1-9][0-9]{3}|1[0-5][0-9]{3}|16[0-2][0-9]{2}|163[0-7][0-9]|1638[0-4]"
          placeholder="1096"
          required=""
          type="text"
        />
        <p
          class="c5"
          data-testid="error-message-sxHeight"
          id="error-message-sxHeight"
        >
          Please enter a
           
          <b
            class="c7"
            data-testid="bring-attention-sxHeight"
          >
            whole number
          </b>
           
          between 16 and 16384.
        </p>
        <label
          class="c2"
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
            class="c3"
          >
            OS/2
          </code>
           table.
        </p>
        <input
          aria-describedby="instruction-sCapHeight error-message-sCapHeight"
          class="c6"
          data-testid="sCapHeight"
          id="sCapHeight"
          inputmode="decimal"
          name="sCapHeight"
          pattern="1[6-9]|[2-9][0-9]|[1-9][0-9]{2}|[1-9][0-9]{3}|1[0-5][0-9]{3}|16[0-2][0-9]{2}|163[0-7][0-9]|1638[0-4]"
          placeholder="1462"
          required=""
          type="text"
        />
        <p
          class="c5"
          data-testid="error-message-sCapHeight"
          id="error-message-sCapHeight"
        >
          Please enter a
           
          <b
            class="c7"
            data-testid="bring-attention-sCapHeight"
          >
            whole number
          </b>
           
          between 16 and 16384.
        </p>
        <button
          class="sc-fznWqX c8"
          type="submit"
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
  user.click(getByText(/next/i));
  expect(mockUpdateFontMetrics).toHaveBeenCalledTimes(1); // this assertion fails because userInput numerical values return stepMismatch errors for some reason...
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

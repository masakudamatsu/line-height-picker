import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import DemoStartButton from './DemoStartButton';

const mockHandleDemo = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test('renders correctly', () => {
  const {container} = render(<DemoStartButton handleDemo={mockHandleDemo} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: hsl(0,0%,10%);
      border: none;
      border-radius: 7.232142857142856px;
      box-shadow: -3px 0 3px 0px hsla(0,0%,100%,0.56), 0 -3px 3px 0px hsla(0,0%,100%,0.56), 3px 0 3px 0 hsla(0,0%,100%,0.56), 0 3px 3px 0 hsla(0,0%,100%,0.56);
      color: inherit;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-family: 'Fedra Sans Alt 2',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 1.5960767251815982rem;
      font-weight: 500;
      height: 65.08928571428571px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      -webkit-text-decoration: none;
      text-decoration: none;
      width: 294.2857142857143px;
    }

    .c0:focus,
    .c0:hover {
      background-color: hsl(0,0%,51%);
      box-shadow: -6px 0 6px 0px hsla(0,0%,100%,0.56), 0 -6px 6px 0px hsla(0,0%,100%,0.56), 6px 0 6px 0 hsla(0,0%,100%,0.56), 0 6px 6px 0 hsla(0,0%,100%,0.56);
      outline: none;
    }

    .c0:active {
      background-color: hsl(0,0%,51%);
      box-shadow: -1px 0 1px 0px hsla(0,0%,100%,0.56), 0 -1px 1px 0px hsla(0,0%,100%,0.56), 1px 0 1px 0 hsla(0,0%,100%,0.56), 0 1px 1px 0 hsla(0,0%,100%,0.56);
      outline: none;
    }

    .c0[disabled] {
      border: 1px solid hsla(0,0%,100%,0.56);
      box-shadow: none;
      cursor: not-allowed;
      opacity: 0.35;
    }

    .c0::after {
      content: '→';
      position: absolute;
      right: 14.464285714285712px;
    }

    @media only screen and (min-width:728px) {
      .c0 {
        border-radius: 8.4375;
        font-size: 1.8620895127118644rem;
        height: 75.9375px;
        width: 343.33333333333337px;
      }
    }

    @media only screen and (min-width:728px) {
      .c0::after {
        right: 16.875px;
      }
    }

    <div>
      <button
        class="sc-fznxsB c0"
      >
        Start demo
      </button>
    </div>
  `);
});

test('Clicking the DEMO button calls the handleDemo function', () => {
  const {getByText} = render(<DemoStartButton handleDemo={mockHandleDemo} />);
  getByText(/demo/i).click();
  expect(mockHandleDemo).toHaveBeenCalledTimes(1);
});

test('is accessible', async () => {
  const {container} = render(<DemoStartButton handleDemo={mockHandleDemo} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

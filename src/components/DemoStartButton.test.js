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
    .c1 {
      white-space: nowrap;
    }

    .c0 {
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

    @media (min-width:875px) {
      .c0 {
        font-size: 43.75px;
      }
    }

    <div>
      <a
        class="c0"
        href="/x-height"
      >
        <span
          class="c1"
        >
          Demo
        </span>
        <span
          class="c1"
        >
          →
        </span>
      </a>
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

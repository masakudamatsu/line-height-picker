import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import Step from './Step';
import {StepIndicator} from '../theme/style'; // Avoid the a11y error, not wrapping <li> with <ol> or <ul>
import colorPalette from '../theme/colorPalette';

const mockNumber = 1;

test('renders correctly', () => {
  const {container} = render(<Step number={mockNumber} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      width: 10vw;
    }

    .c1 {
      color: hsl(0,0%,35%);
      cursor: default;
      display: inline-block;
      font-family: 'Fedra Mono 2',monospace;
      font-size: 1.1350rem;
      font-weight: 300;
      line-height: 1.0000;
      padding: 0.5357142857142857rem 0;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      width: 100%;
    }

    .c1:focus,
    .c1:hover {
      outline: none;
    }

    .c1:active {
      background: none;
    }

    .c1::before,
    .c1::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c1::before {
      margin-bottom: -0.0817rem;
    }

    .c1::after {
      margin-top: -0.2497rem;
    }

    @media only screen and (min-width:1024px) {
      .c0 {
        width: 87.5px;
      }
    }

    @media only screen and (min-width:1024px) {
      .c1 {
        font-size: 1.3242rem;
        padding: 0.625rem 0;
      }
    }

    @media only screen and (min-width:1024px) {
      .c1::before {
        margin-bottom: -0.0953rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c1::after {
        margin-top: -0.2913rem;
      }
    }

    <div>
      <li
        class="c0"
        data-testid="StepNumberBox"
      >
        <a
          class="c1"
          href=""
          tabindex="-1"
        >
          1
        </a>
      </li>
    </div>
  `);
});

test('renders props.number as its text content', () => {
  [1, 2, 3, 4, 5].forEach(number => {
    const {getByText} = render(<Step number={number} />);
    const stepNumber = getByText(`${number}`);
    expect(stepNumber).toBeInTheDocument();
  });
});

test('sets the background color to be currentColor if props.now is true', () => {
  const {getByTestId} = render(<Step now number={mockNumber} />);
  expect(getByTestId('StepNumberBox')).toHaveStyle(`
    background-color: currentColor;
  `);
});

test('sets the color to be currentColor if props.done is true', () => {
  const {getByText} = render(<Step done number={mockNumber} />);
  expect(getByText(`${mockNumber}`)).toHaveStyle(`
    color: currentColor;
  `);
});

test('sets the tabindex attribute to be 0 if props.done is true', () => {
  const {getByText} = render(<Step done number={mockNumber} />);
  expect(getByText(`${mockNumber}`)).toHaveAttribute('tabindex', '0');
});

test('sets the tabindex attribute to be -1 if props.done is false', () => {
  const {getByText} = render(<Step number={mockNumber} />);
  expect(getByText(`${mockNumber}`)).toHaveAttribute('tabindex', '-1');
});

test('sets the color to be the one for disabled text if props.done is false', () => {
  const {getByText} = render(<Step number={mockNumber} />);
  expect(getByText(`${mockNumber}`)).toHaveStyle(`
    color: ${colorPalette.disabledText};
  `);
});

test('is accessible', async () => {
  const {container} = render(
    <StepIndicator>
      <Step number={mockNumber} />
    </StepIndicator>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

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
      width: 20%;
    }

    .c1 {
      color: hsl(0,0%,90%);
      cursor: default;
      display: inline-block;
      font-family: 'Fedra Mono 2',monospace;
      font-size: 1.1366rem;
      font-weight: 300;
      line-height: 1.0000;
      opacity: 0.35;
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
      margin-bottom: -0.0730em;
    }

    .c1::after {
      margin-top: -0.2200em;
    }

    @media only screen and (min-width:728px) {
      .c1 {
        font-size: 1.3260rem;
        padding: 0.625rem 0;
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

test(`sets the background color to be currentColor if props.now is true`, () => {
  const {getByTestId} = render(<Step now number={mockNumber} />);
  expect(getByTestId('StepNumberBox')).toHaveStyle(`
    background-color: currentColor;
  `);
});

test(`sets the color to be ${colorPalette.background} if props.now is true`, () => {
  const {getByText} = render(<Step now number={mockNumber} />);
  expect(getByText(`${mockNumber}`)).toHaveStyle(`
    color: ${colorPalette.background};
  `);
});

test(`sets the color to be ${colorPalette.bodyText} if props.done is true`, () => {
  const {getByText} = render(<Step done number={mockNumber} />);
  expect(getByText(`${mockNumber}`)).toHaveStyle(`
    color: ${colorPalette.bodyText};
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

test(`sets the opacity for disabled text if props.done is false`, () => {
  const {getByText} = render(<Step number={mockNumber} />);
  expect(getByText(`${mockNumber}`)).toHaveStyle(`
    opacity: ${colorPalette.disabledText};
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

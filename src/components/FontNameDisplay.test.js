import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import FontNameDisplay from './FontNameDisplay';

const fontName = 'Open Sans';
const fontSubfamily = 'Regular';

test('renders correctly', () => {
  const {container} = render(
    <FontNameDisplay fontFamily={fontName} fontSubfamily={fontSubfamily} />,
  );
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      background: hsl(0,0%,0%);
      font-family: Open Sans;
      font-size: NaNrem;
      height: auto;
      line-height: 2.6785736250000003rem;
      padding: 1.3058068660714293rem 12.857142857142858px;
      position: relative;
      z-index: -2;
    }

    .c0::before,
    .c0::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c0::before {
      margin-bottom: -NaNrem;
    }

    .c0::after {
      margin-top: -NaNrem;
    }

    @media only screen and (min-width:1024px) {
      .c0 {
        font-size: NaNrem;
        line-height: 3.1249968750000003rem;
        padding: 1.5234328125000005rem 12.857142857142858px;
      }
    }

    @media only screen and (min-width:1024px) {
      .c0::before {
        margin-bottom: -NaNrem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c0::after {
        margin-top: -0.37774725274725274rem;
      }
    }

    <div>
      <p
        class="c0"
        data-testid="FontNameDisplay"
        font-family="Open Sans"
      >
        Open Sans Regular
      </p>
    </div>
  `);
});

test('displays the props value as the font name', () => {
  const {getByTestId} = render(
    <FontNameDisplay fontFamily={fontName} fontSubfamily={fontSubfamily} />,
  );
  expect(getByTestId('FontNameDisplay')).toHaveTextContent(
    `${fontName} ${fontSubfamily}`,
  );
});

test('is accessible', async () => {
  const {container} = render(
    <FontNameDisplay fontFamily={fontName} fontSubfamily={fontSubfamily} />,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

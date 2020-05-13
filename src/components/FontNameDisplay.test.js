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
      background: hsl(0,0%,35%);
      font-family: Open Sans;
      font-size: 2rem;
      height: 5rem;
      padding: 0 12.857142857142858px;
      position: relative;
      z-index: -2;
    }

    <div>
      <p
        class="c0"
        data-testid="FontNameDisplay"
        font-family="Open Sans"
      >
        <span
          data-testid="font-family-name"
        >
          Open Sans
        </span>
        <span>
           
        </span>
        <span
          data-testid="font-subfamily-name"
        >
          Regular
        </span>
      </p>
    </div>
  `);
});

test('displays the props value as the font name', () => {
  const {getByTestId} = render(
    <FontNameDisplay fontFamily={fontName} fontSubfamily={fontSubfamily} />,
  );
  expect(getByTestId('font-family-name')).toHaveTextContent(fontName);
  expect(getByTestId('font-subfamily-name')).toHaveTextContent(fontSubfamily);
});

test('is accessible', async () => {
  const {container} = render(
    <FontNameDisplay fontFamily={fontName} fontSubfamily={fontSubfamily} />,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

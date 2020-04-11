import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import CssCode from './CssCode';

test('renders correctly', () => {
  const {container} = render(<CssCode />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      border: 1px solid hsl(0,0%,96%);
      padding: 1rem;
    }

    <div>
      <pre
        class="c0"
      >
        <code
          data-testid="cssCode"
        >
          p {
      font-family: undefined;
      font-size: undefinedpx;
      font-weight: undefined;
      line-height: undefined;
    }

    p:not(:first-child) {
      margin-top: undefinedpx;
    }
      
        </code>
      </pre>
    </div>
  `);
});

test('renders props correctly', () => {
  const mockProps = {
    fontFamily: 'Open Sans',
    fontSize: 18.6543,
    fontWeight: 400,
    lineHeight: 1.6055,
  };
  const {getByTestId, rerender} = render(
    <CssCode
      fontFamily={mockProps.fontFamily}
      fontSize={mockProps.fontSize}
      fontWeight={mockProps.fontWeight}
      lineHeight={mockProps.lineHeight}
    />,
  );
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.fontFamily);
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.fontSize);
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.fontWeight);
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.lineHeight);

  const mockNewProps = {
    fontFamily: 'Roboto',
    fontSize: 17.4059,
    fontWeight: 500,
    lineHeight: 1.5,
  };
  rerender(
    <CssCode
      fontFamily={mockNewProps.fontFamily}
      fontSize={mockNewProps.fontSize}
      fontWeight={mockNewProps.fontWeight}
      lineHeight={mockNewProps.lineHeight}
    />,
  );
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.fontFamily);
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.fontSize);
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.fontWeight);
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.lineHeight);
});

test('is accessible', async () => {
  const {container} = render(<CssCode />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

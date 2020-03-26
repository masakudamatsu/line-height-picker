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
          font-family: undefined;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
        </code>
      </pre>
    </div>
  `);
});

test('renders props correctly', () => {
  const mockProps = {
    fontFamily: 'Open Sans',
  };
  const {getByTestId, rerender} = render(
    <CssCode fontFamily={mockProps.fontFamily} />,
  );
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.fontFamily);
  const mockNewProps = {
    fontFamily: 'Roboto',
  };
  rerender(<CssCode fontFamily={mockNewProps.fontFamily} />);
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.fontFamily);
});

test('is accessible', async () => {
  const {container} = render(<CssCode />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

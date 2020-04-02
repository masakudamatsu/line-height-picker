import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import XheightDisplay from './XheightDisplay';

test('renders correctly', () => {
  const {container} = render(<XheightDisplay />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      border-bottom: 1px solid white;
      border-top: 1px solid white;
      padding: 1rem 0;
    }

    .c1 {
      font-size: 1.5rem;
    }

    .c2 {
      font-size: 2rem;
    }

    <div>
      <section
        class="c0"
        data-testid="XheightDisplay"
      >
        <h2
          class="c1"
        >
          X-height chosen:
        </h2>
        <p
          class="c2"
          data-testid="xHeightValue"
        >
          px
        </p>
      </section>
    </div>
  `);
});

test('shows props.xHeight as x-height value', () => {
  const xHeightValue = 15;
  const {getByTestId} = render(<XheightDisplay xHeightPx={xHeightValue} />);
  expect(getByTestId('xHeightValue')).toHaveTextContent(`${xHeightValue}px`);
});

test('is accessible', async () => {
  const {container} = render(<XheightDisplay />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

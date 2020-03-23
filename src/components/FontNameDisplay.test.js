import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import FontNameDisplay from './FontNameDisplay';

test('renders correctly', () => {
  const {container} = render(<FontNameDisplay />);
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
        data-testid="FontNameDisplay"
      >
        <h2
          class="c1"
        >
          Font chosen:
        </h2>
        <p
          class="c2"
        >
          Open Sans Regular
        </p>
      </section>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<FontNameDisplay />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import Description from './Description';

test('renders correctly', () => {
  const {container} = render(<Description />);
  expect(container).toMatchInlineSnapshot(`
    .c1 {
      white-space: nowrap;
    }

    .c0 {
      font-family: 'Fedra Sans Alt 2',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 1.47174375rem;
      font-weight: 300;
      margin: 0;
      text-indent: -1px;
      width: 100%;
    }

    @media (min-width:1024pxpx) {
      .c0 {
        font-size: 1.71703125rem;
      }
    }

    <div>
      <p
        class="c0"
        data-testid="description"
      >
        Beautify paragraphs on your website
        <span
          class="c1"
        >
           in 5 steps.
        </span>
      </p>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<Description />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

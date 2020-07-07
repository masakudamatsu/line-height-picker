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
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
      font-family: 'Fedra Sans Alt',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 1.4717rem;
      font-weight: 300;
      margin: 0;
      text-indent: -1px;
      width: 100%;
    }

    .c0:before,
    .c0:after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c0:before {
      margin-bottom: -0.2555em;
    }

    .c0:after {
      margin-top: -0.4025em;
    }

    @media only screen and (min-width:728px) {
      .c0 {
        font-size: 1.7170rem;
      }
    }

    <div>
      <p
        class="sc-AxgMl c0"
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

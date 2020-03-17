import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import FontFileUploader from './FontFileUploader';

test('renders correctly', () => {
  const {container} = render(<FontFileUploader />);
  expect(container).toMatchInlineSnapshot(`
    .c1 {
      white-space: nowrap;
    }

    .c0 {
      background-color: inherit;
      border: 2px solid currentColor;
      border-radius: 4px;
      color: inherit;
      cursor: pointer;
      font-size: 3.6571428571428575vw;
      font-weight: bold;
      max-width: 315px;
      padding: 5.625% 11.25%;
      text-align: left;
      text-transform: uppercase;
      width: 45%;
    }

    @media (min-width:875px) {
      .c0 {
        font-size: 2rem;
      }
    }

    <div>
      <button
        class="c0"
      >
        Upload 
        <span
          class="c1"
        >
          Font File
        </span>
      </button>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<FontFileUploader />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

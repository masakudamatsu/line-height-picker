import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import AlertIconImage from './AlertIconImage';

test('renders correctly', () => {
  const {container} = render(<AlertIconImage />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <svg
        fill="none"
        height="24"
        role="img"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.5"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>
          Alert icon
        </title>
        <path
          d="M0 0h24v24H0z"
          stroke="none"
        />
        <path
          d="M12 9v2m0 4v.01"
        />
        <path
          d="M5.07 19H19a2 2 0 0 0 1.75 -2.75L13.75 4a2 2 0 0 0 -3.5 0L3.25 16.25a2 2 0 0 0 1.75 2.75"
        />
      </svg>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<AlertIconImage />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

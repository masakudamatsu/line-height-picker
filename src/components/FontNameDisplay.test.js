import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import FontNameDisplay from './FontNameDisplay';

test('renders correctly', () => {
  const {container} = render(<FontNameDisplay />);
  expect(container).toMatchInlineSnapshot();
});

test('is accessible', async () => {
  const {container} = render(<FontNameDisplay />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

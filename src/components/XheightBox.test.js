import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import XheightBox from './XheightBox';

test('renders correctly', () => {
  const {container} = render(<XheightBox />);
  expect(container).toMatchInlineSnapshot();
});

test('is accessible', async () => {
  const {container} = render(<XheightBox />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

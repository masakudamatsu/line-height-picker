import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import DemoStartButton from './DemoStartButton';

test('renders correctly', () => {
  const {container} = render(<DemoStartButton />);
  expect(container).toMatchInlineSnapshot();
});

test('is accessible', async () => {
  const {container} = render(<DemoStartButton />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

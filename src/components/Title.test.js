import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import Title from './Title';

test('renders the H1 element for the screen reader, but invisible on the browser', () => {
  const {container} = render(<Title />);
  expect(container).toMatchInlineSnapshot();
});

test('is accessible', async () => {
  const {container} = render(<Title />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import FontFileErrorMessage from './FontFileErrorMessage';
import {fileExtensionError} from '../helper/errorMessages';

test('renders correctly', () => {
  const {container} = render(<FontFileErrorMessage />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      color: hsl(335,71%,64%);
      font-size: 1rem;
    }

    <div>
      <section
        class=""
        data-testid="error-message-font-file"
      >
        <p
          class="c0"
        />
        <p
          class="c0"
        />
        <p
          class="c0"
        />
      </section>
    </div>
  `);
});

test('shows an error message for wrong file extensions if the props value is "file extension"', () => {
  const {findByText} = render(
    <FontFileErrorMessage fontFileError="fileExtension" />,
  );
  findByText(fileExtensionError.whatHappaned);
  findByText(fileExtensionError.hohowToResolve);
  findByText(fileExtensionError.extraText);
});

test('is accessible', async () => {
  const {container} = render(<FontFileErrorMessage />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

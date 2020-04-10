import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import FontFileErrorMessage from './FontFileErrorMessage';
import {
  fileExtensionError,
  fileReaderApiError,
  opentypeParseError,
} from '../helper/errorMessages';

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

test('shows an error message for wrong file extensions if the props value is "fileExtension"', () => {
  const {findByText} = render(
    <FontFileErrorMessage fontFileError="fileExtension" />,
  );
  findByText(fileExtensionError.whatHappaned);
  findByText(fileExtensionError.hohowToResolve);
  findByText(fileExtensionError.extraText);
});

test('shows an error message for failing File Reader API if the props value is "fileReaderApi"', () => {
  const {findByText} = render(
    <FontFileErrorMessage fontFileError="fileReaderApi" />,
  );
  findByText(fileReaderApiError.whatHappaned);
  findByText(fileReaderApiError.hohowToResolve);
  findByText(fileReaderApiError.extraText);
});

test('shows an error message for failing File Reader API if the props value is "opentypeParse"', () => {
  const {findByText} = render(
    <FontFileErrorMessage fontFileError="opentypeParse" />,
  );
  findByText(opentypeParseError.whatHappaned);
  findByText(opentypeParseError.hohowToResolve);
  findByText(opentypeParseError.extraText);
});

test('is accessible', async () => {
  const {container} = render(<FontFileErrorMessage />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

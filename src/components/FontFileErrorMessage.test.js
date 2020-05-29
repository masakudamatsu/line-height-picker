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
  fontFaceApiError,
} from '../helper/errorMessages';

test('renders correctly', () => {
  const {container} = render(<FontFileErrorMessage fontFileError="" />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      color: hsl(335,71%,64%);
      font-size: 0.9812rem;
      font-weight: 300;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
    }

    .c0::before,
    .c0::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c0::before {
      margin-bottom: -0.2497rem;
    }

    .c0::after {
      margin-top: -0.3949rem;
    }

    @media only screen and (min-width:1024px) {
      .c0 {
        font-size: 1.1447rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c0::before {
        margin-bottom: -0.2913rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c0::after {
        margin-top: -0.4607rem;
      }
    }

    <div>
      <div
        data-testid="error-message-font-file"
      >
        <p
          class="c0"
          id="whatHappened-fontFile"
        />
        <p
          class="c0"
          id="howToResolve-fontFile"
        />
        <p
          class="c0"
          id="extraText-fontFile"
        />
      </div>
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

test('shows an error message for failing File Reader API if the props value is "fontFaceApi"', () => {
  const {findByText} = render(
    <FontFileErrorMessage fontFileError="fontFaceApi" />,
  );
  findByText(fontFaceApiError.whatHappaned);
  findByText(fontFaceApiError.hohowToResolve);
  findByText(fontFaceApiError.extraText);
});

test('is accessible', async () => {
  const {container} = render(<FontFileErrorMessage fontFileError="" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

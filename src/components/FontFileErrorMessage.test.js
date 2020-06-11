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
    .c2 {
      color: hsl(0,0%,74%);
      font-weight: 500;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
    }

    .c2::before,
    .c2::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c2::before {
      margin-bottom: -0.2545em;
    }

    .c2::after {
      margin-top: -0.4025em;
    }

    .c0 {
      display: none;
    }

    .c1 {
      height: 1.2053571428571428rem;
      width: auto;
    }

    @media only screen and (min-width:728px) {
      .c1 {
        height: 1.40625rem;
      }
    }

    <div>
      <div
        class="c0"
        data-testid="error-message-font-file"
      >
        <div
          class="c1"
          height="2"
        />
        <p
          class="c2"
          id="whatHappened-fontFile"
        />
        <div
          class="c1"
          height="2"
        />
        <p
          class="c2"
          id="howToResolve-fontFile"
        />
        <div
          class="c1"
          height="2"
        />
        <p
          class="c2"
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

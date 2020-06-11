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
    .c4 {
      color: hsl(0,0%,74%);
      font-weight: 500;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
    }

    .c4::before,
    .c4::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c4::before {
      margin-bottom: -0.2555em;
    }

    .c4::after {
      margin-top: -0.4025em;
    }

    .c2 {
      -webkit-align-items: flex-start;
      -webkit-box-align: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-family: 'Fedra Sans 3',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-weight: 500;
      visibility: visible;
    }

    .c3 {
      -webkit-flex: 0 0 0.9427em;
      -ms-flex: 0 0 0.9427em;
      flex: 0 0 0.9427em;
      height: 0.9427em;
      width: 0.9427em;
      margin-left: -0.0786em;
      margin-right: 0.3214em;
      margin-top: -0.0786em;
      stroke: hsl(0,0%,74%);
      visibility: visible;
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
        <div
          class="c2"
        >
          <svg
            class="c3"
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
          <div>
            <p
              class="c4"
              id="whatHappened-fontFile"
            />
            <div
              class="c1"
              height="2"
            />
            <p
              class="c4"
              id="howToResolve-fontFile"
            />
            <div
              class="c1"
              height="2"
            />
            <p
              class="c4"
              id="extraText-fontFile"
            />
          </div>
        </div>
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

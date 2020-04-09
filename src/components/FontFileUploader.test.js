import React from 'react';
import {render, cleanup, fireEvent, wait} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import FontFileUploader from './FontFileUploader';

import {Redirect as MockRedirect} from 'react-router';

jest.mock('react-router', () => {
  return {Redirect: jest.fn(() => null)};
});

const mockHandleFontFile = jest.fn();
const mockValidateFileTypeReturningTrue = jest.fn(() => {
  return true;
});
const mockValidateFileTypeReturningFalse = jest.fn(() => {
  return false;
});

// mock ttf file
const ttfFile = new File(['dummy data'], 'dummytypeface.ttf', {
  type: 'font/ttf',
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders correctly', () => {
  const {container} = render(
    <FontFileUploader>Upload font file</FontFileUploader>,
  );
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: inherit;
      border: 2px solid currentColor;
      border-radius: 4px;
      color: inherit;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      font-size: 5vw;
      font-weight: bold;
      max-width: 315px;
      padding: 5.625% 11.25%;
      -webkit-text-decoration: none;
      text-decoration: none;
      text-transform: uppercase;
      width: 45%;
    }

    @media (min-width:875px) {
      .c0 {
        font-size: 43.75px;
      }
    }

    <div>
      <button
        class="c0"
      >
        Upload font file
      </button>
      <input
        accept=".ttf,.otf,.woff"
        data-testid="hiddenFileInput"
        id="hiddenFileInput"
        style="display: none;"
        type="file"
      />
    </div>
  `);
});

test('Clicking the Button component triggers File API', () => {}); // I don't know how to test this feature.

test('calls the validateFontFile function upon font file uploading', async () => {
  // execute
  const {getByTestId} = render(
    <FontFileUploader
      home
      handleFontFile={mockHandleFontFile}
      validateFileType={mockValidateFileTypeReturningTrue}
    >
      Upload font file
    </FontFileUploader>,
  );
  fireEvent.change(getByTestId('hiddenFileInput'), {
    target: {files: [ttfFile]},
  });
  // verify
  expect(mockValidateFileTypeReturningTrue).toHaveBeenCalledTimes(1); // I cannot find out how to assert whether it's been called with the appropriate argument...
});

test('does not call the handleFontFile function if the validateFileType function returns false', async () => {
  // execute
  const {getByTestId} = render(
    <FontFileUploader
      home
      handleFontFile={mockHandleFontFile}
      validateFileType={mockValidateFileTypeReturningFalse}
    >
      Upload font file
    </FontFileUploader>,
  );
  fireEvent.change(getByTestId('hiddenFileInput'), {
    target: {files: [ttfFile]},
  });
  // verify
  expect(mockHandleFontFile).not.toHaveBeenCalled();
});

test('calls the handleFontFile function if the validateFileType function returns true, and, if props.home is true, calls React-Router Redirect component', async () => {
  // execute
  const {getByTestId} = render(
    <FontFileUploader
      home
      handleFontFile={mockHandleFontFile}
      validateFileType={mockValidateFileTypeReturningTrue}
    >
      Upload font file
    </FontFileUploader>,
  );
  fireEvent.change(getByTestId('hiddenFileInput'), {
    target: {files: [ttfFile]},
  });
  expect(mockHandleFontFile).toHaveBeenCalledTimes(1);
  // I cannot find out how to assert whether it's been called with the appropriate argument...
  await wait(() =>
    expect(MockRedirect).toHaveBeenCalledWith(
      {to: '/x-height', push: true},
      {},
    ),
  ); // See https://testingjavascript.com/lessons/react-test-drive-mocking-react-router-s-redirect-component-on-a-form-submission
});

test('calls the handleFontFile function if the validateFileType function returns true, and, if props.home is false, DOES NOT call React-Router Redirect component', async () => {
  // execute
  const {getByTestId} = render(
    <FontFileUploader
      handleFontFile={mockHandleFontFile}
      validateFileType={mockValidateFileTypeReturningTrue}
    >
      Upload font file
    </FontFileUploader>,
  );
  fireEvent.change(getByTestId('hiddenFileInput'), {
    target: {files: [ttfFile]},
  });
  expect(mockHandleFontFile).toHaveBeenCalledTimes(1);
  // I cannot find out how to assert whether it's been called with the appropriate argument...
  await wait(() =>
    expect(MockRedirect).not.toHaveBeenCalledWith(
      {to: '/x-height', push: true},
      {},
    ),
  ); // See https://testingjavascript.com/lessons/react-test-drive-mocking-react-router-s-redirect-component-on-a-form-submission
});

test('is accessible', async () => {
  const {container} = render(
    <FontFileUploader>Upload font file</FontFileUploader>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

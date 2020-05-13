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

const mockHandleFontFile = jest.fn(() => {
  return true;
});
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
    <FontFileUploader
      handleFontFile={mockHandleFontFile}
      validateFileType={mockValidateFileTypeReturningTrue}
    >
      Upload font file
    </FontFileUploader>,
  );
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: hsl(0,0%,25%);
      border: none;
      border-radius: 7.619047619047619px;
      box-shadow: -2px 0 6px 0px hsla(0,0%,100%,0.5), 0 -2px 6px 0px hsla(0,0%,100%,0.5),2px 0 6px 0 hsla(0,0%,100%,0.5), 0 2px 6px 0 hsla(0,0%,1000%,0.5);
      color: inherit;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-family: 'Fedra Sans Alt',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 1.6814635458703255rem;
      font-weight: 500;
      height: 68.57142857142857px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      -webkit-text-decoration: none;
      text-decoration: none;
      width: 294.2857142857143px;
    }

    .c0:focus,
    .c0:hover {
      background-color: hsl(0,0%,56%);
      box-shadow: -4px 0 12px 0px hsla(0,0%,100%,0.5), 0 -4px 12px 0px hsla(0,0%,100%,0.5), 4px 0 12px 0 hsla(0,0%,100%,0.5),0 4px 12px 0 hsla(0,0%,1000%,0.5);
      outline: none;
    }

    .c0:active {
      background-color: hsl(0,0%,56%);
      box-shadow: -1px 0 1px 0px hsla(0,0%,100%,0.5), 0 -1px 1px 0px hsla(0,0%,100%,0.5),1px 0 1px 0 hsla(0,0%,100%,0.5), 0 1px 1px 0 hsla(0,0%,1000%,0.5);
      outline: none;
    }

    .c0[disabled] {
      box-shadow: none;
      cursor: not-allowed;
      opacity: 0.35;
    }

    @media only screen and (min-width:1024px) {
      .c0 {
        border-radius: 8.88888888888889;
        font-size: 1.9617074701820465rem;
        height: 80px;
        width: 343.33333333333337px;
      }
    }

    <div>
      <button
        class="c0"
        data-testid="font-button"
        type="button"
      >
        Upload font file
      </button>
      <input
        accept=".ttf,.otf,.woff"
        aria-describedby="whatHappened-fontFile howToResolve-fontFile extraText-fontFile"
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
  await wait(() => {
    expect(mockValidateFileTypeReturningTrue).toHaveBeenCalledTimes(1); // I cannot find out how to assert whether it's been called with the appropriate argument...
  });
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

test('calls the handleFontFile function if the validateFileType function returns true', async () => {
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
  await wait(() => {
    expect(mockHandleFontFile).toHaveBeenCalledTimes(1);
    // I cannot find out how to assert whether it's been called with the appropriate argument...
  });
});

test('calls React-Router Redirect component if everything works and the props.home is true', async () => {
  // setup
  mockHandleFontFile.mockResolvedValueOnce();
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
  await wait(() =>
    expect(MockRedirect).toHaveBeenCalledWith(
      {to: '/x-height', push: true},
      {},
    ),
  ); // See https://testingjavascript.com/lessons/react-test-drive-mocking-react-router-s-redirect-component-on-a-form-submission
});

test('DOES NOT call React-Router Redirect component after handleFontFile function gets rejected, even if the props.home is true', async () => {
  // setup
  mockHandleFontFile.mockRejectedValueOnce();
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
  await wait(() =>
    expect(MockRedirect).not.toHaveBeenCalledWith(
      {to: '/x-height', push: true},
      {},
    ),
  ); // See https://testingjavascript.com/lessons/react-test-drive-mocking-react-router-s-redirect-component-on-a-form-submission
});

test('DOES NOT call React-Router Redirect component if everything works and the props.home is FALSE', async () => {
  // setup
  mockHandleFontFile.mockResolvedValueOnce();
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
  await wait(() =>
    expect(MockRedirect).not.toHaveBeenCalledWith(
      {to: '/x-height', push: true},
      {},
    ),
  ); // See https://testingjavascript.com/lessons/react-test-drive-mocking-react-router-s-redirect-component-on-a-form-submission
});

test('is accessible', async () => {
  const {container} = render(
    <FontFileUploader
      handleFontFile={mockHandleFontFile}
      validateFileType={mockValidateFileTypeReturningTrue}
    >
      Upload font file
    </FontFileUploader>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

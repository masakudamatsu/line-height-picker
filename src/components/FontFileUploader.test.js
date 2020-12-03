import React from 'react';
import {render, cleanup, fireEvent, wait} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import FontFileUploader from './FontFileUploader';

const mockHistoryPush = jest.fn().mockName('useHistory.push');

const argumentForHistoryPush = {
  pathname: '/x-height',
  state: {transition: 'slideleft', duration: 300},
};

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const mockHandleFontFile = jest
  .fn(() => {
    return true;
  })
  .mockName('handleFontFile');
const mockValidateFileTypeReturningTrue = jest
  .fn(() => {
    return true;
  })
  .mockName('validateFileType');
const mockValidateFileTypeReturningFalse = jest
  .fn(() => {
    return false;
  })
  .mockName('validateFileType');

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
      background-color: inherit;
      border: none;
      border-radius: 7.2321px;
      box-shadow: -3px 0 3px 0px hsla(0,0%,100%,0.56), 0 -3px 3px 0px hsla(0,0%,100%,0.56), 3px 0 3px 0 hsla(0,0%,100%,0.56), 0 3px 3px 0 hsla(0,0%,100%,0.56);
      color: inherit;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-family: 'Fedra Sans Alt',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 1.5983rem;
      font-weight: 500;
      height: 65.0893px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      -webkit-text-decoration: none;
      text-decoration: none;
      width: 294.2858px;
    }

    .c0:focus,
    .c0:hover {
      background-color: hsl(0,0%,51%);
      box-shadow: -6px 0 6px 0px hsla(0,0%,100%,0.56), 0 -6px 6px 0px hsla(0,0%,100%,0.56), 6px 0 6px 0 hsla(0,0%,100%,0.56), 0 6px 6px 0 hsla(0,0%,100%,0.56);
      outline: none;
    }

    .c0:active {
      background-color: hsl(0,0%,51%);
      box-shadow: -1px 0 1px 0px hsla(0,0%,100%,0.56), 0 -1px 1px 0px hsla(0,0%,100%,0.56), 1px 0 1px 0 hsla(0,0%,100%,0.56), 0 1px 1px 0 hsla(0,0%,100%,0.56);
      outline: none;
    }

    .c0[disabled] {
      border: 1px solid hsla(0,0%,100%,0.56);
      box-shadow: none;
      cursor: not-allowed;
      opacity: 0.35;
    }

    @media only screen and (min-width:728px) {
      .c0 {
        border-radius: 8.4375;
        font-size: 1.8647rem;
        height: 75.9375px;
        width: 343.3334px;
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

test('calls history.push if everything works and the props.home is true', async () => {
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
    expect(mockHistoryPush).toHaveBeenCalledWith(argumentForHistoryPush),
  );
});

test('DOES NOT call history.push after handleFontFile function gets rejected, even if the props.home is true', async () => {
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
    expect(mockHistoryPush).not.toHaveBeenCalledWith(argumentForHistoryPush),
  );
});

test('DOES NOT call history.push if everything works and the props.home is FALSE', async () => {
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
    expect(mockHistoryPush).not.toHaveBeenCalledWith(argumentForHistoryPush),
  );
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

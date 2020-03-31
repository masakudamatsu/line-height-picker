import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import FontFileUploader from './FontFileUploader';

test('renders correctly', () => {
  const {container} = render(<FontFileUploader />);
  expect(container).toMatchInlineSnapshot(`
    .c1 {
      white-space: nowrap;
    }

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
        <span>
          Upload
        </span>
        <span
          class="c1"
        >
          Font File
        </span>
      </button>
      <input
        data-testid="hiddenFileInput"
        id="hiddenFileInput"
        style="display: none;"
        type="file"
      />
    </div>
  `);
});

test('calls the handleFontFile function upon font file uploading', () => {
  // setup
  const ttfFile = new File(['dummy data'], 'dummytypeface.ttf', {
    type: 'font/ttf',
  });
  const mockHandleFontFile = jest.fn();
  // execute
  const {getByTestId} = render(
    <FontFileUploader handleFontFile={mockHandleFontFile} />,
  );
  fireEvent.change(getByTestId('hiddenFileInput'), {
    target: {files: [ttfFile]},
  });
  expect(mockHandleFontFile).toHaveBeenCalledTimes(1);
  // I cannot find out how to assert whether it's been called with the appropriate argument...
});

test('is accessible', async () => {
  const {container} = render(<FontFileUploader />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

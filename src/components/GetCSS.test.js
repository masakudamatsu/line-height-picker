import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import GetCSS from './GetCSS';

const mockProps = {
  fontFamily: 'Open Sans',
  fontSize: '18.6543',
  fontWeight: '400',
  lineHeight: '1.6055',
  marginTop: '23.3394',
};

test('renders correctly', () => {
  const {container} = render(
    <GetCSS
      fontFamily={mockProps.fontFamily}
      fontSize={mockProps.fontSize}
      fontWeight={mockProps.fontWeight}
      lineHeight={mockProps.lineHeight}
      marginTop={mockProps.marginTop}
    />,
  );
  expect(container).toMatchInlineSnapshot(`
    .c4 {
      white-space: nowrap;
    }

    .c6 {
      color: hsl(0,0%,96%);
    }

    .c0 {
      font-size: 3rem;
      font-weight: 200;
    }

    .c5 {
      color: hsl(335,71%,64%);
      font-size: 1rem;
      visibility: hidden;
    }

    .c1 {
      border: 1px solid hsl(0,0%,96%);
      padding: 1rem;
    }

    .c2 {
      font-family: monospace;
      font-size: 1rem;
    }

    .c3 {
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
      .c3 {
        font-size: 43.75px;
      }
    }

    <div>
      <main>
        <h2
          class="c0"
        >
          Get CSS
        </h2>
        <pre
          class="c1"
        >
          <code
            class="c2"
            data-testid="cssCode"
            id="cssCode"
          >
            p {
      font-family: 'Open Sans';
      font-size: 18.6543px;
      font-weight: 400;
      line-height: 1.6055;
    }

    p:not(:first-child) {
      margin-top: 23.3394px;
    }
          </code>
        </pre>
        <button
          aria-describedby="whatHappened howToResolve extraText"
          class="c3"
          data-testid="copy-button"
        >
          Copy to clipboard
        </button>
        <a
          class="c3"
          href="/preview"
        >
          Back to preview
          <span
            class="c4"
          >
            ←
          </span>
        </a>
        <section
          class=""
        >
          <p
            class="sc-Axmtr c5"
            data-testid="whatHappened"
            id="whatHappened"
          >
            The browser doesn't allow us to copy the CSS code into your clipboard.
          </p>
          <p
            class="sc-Axmtr c5"
            data-testid="howToResolve"
            id="howToResolve"
          >
            Please select the CSS code on your own to copy and paste it.
          </p>
          <p
            class="sc-Axmtr c5"
            data-testid="extraText"
            id="extraText"
          >
            Alternatively, consider using the browsers that support the "click to copy into clipboard" feature: Edge (version 79 or later), Chrome (76 or later), Opera (63 or later). See
            <a
              class="c6"
              href="https://caniuse.com/#feat=mdn-api_fontface"
            >
              Can I Use?
            </a>
            for the latest list of supporting browsers.
          </p>
        </section>
      </main>
    </div>
  `);
});

test('renders props correctly', () => {
  const {getByTestId, rerender} = render(
    <GetCSS
      fontFamily={mockProps.fontFamily}
      fontSize={mockProps.fontSize}
      fontWeight={mockProps.fontWeight}
      lineHeight={mockProps.lineHeight}
      marginTop={mockProps.marginTop}
    />,
  );
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.fontFamily);
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.fontSize);
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.fontWeight);
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.lineHeight);
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.marginTop);

  const mockNewProps = {
    fontFamily: 'Roboto',
    fontSize: '17.4059',
    fontWeight: '500',
    lineHeight: '1.5',
    marginTop: '23.5674',
  };
  rerender(
    <GetCSS
      fontFamily={mockNewProps.fontFamily}
      fontSize={mockNewProps.fontSize}
      fontWeight={mockNewProps.fontWeight}
      lineHeight={mockNewProps.lineHeight}
      marginTop={mockNewProps.marginTop}
    />,
  );
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.fontFamily);
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.fontSize);
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.fontWeight);
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.lineHeight);
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.marginTop);
});

test('Clicking the button calls navigator.clipboard.writeText() with the appropriate argument', () => {
  // Mock the Clipboard function
  const mockWriteText = jest.fn();
  const originalNavigator = {...navigator};
  const originalClipboard = {...navigator.clipboard};
  const navigatorSpy = jest.spyOn(global, 'navigator', 'get');
  navigatorSpy.mockImplementation(() => ({
    ...originalNavigator,
    clipboard: {
      ...originalClipboard,
      writeText: mockWriteText,
    },
  }));

  const cssOutput = `p {
  font-family: '${mockProps.fontFamily}';
  font-size: ${mockProps.fontSize}px;
  font-weight: ${mockProps.fontWeight};
  line-height: ${mockProps.lineHeight};
}

p:not(:first-child) {
  margin-top: ${mockProps.marginTop}px;
}`;

  const {getByTestId} = render(
    <GetCSS
      fontFamily={mockProps.fontFamily}
      fontSize={mockProps.fontSize}
      fontWeight={mockProps.fontWeight}
      lineHeight={mockProps.lineHeight}
      marginTop={mockProps.marginTop}
    />,
  );
  user.click(getByTestId('copy-button'));

  expect(mockWriteText).toHaveBeenCalledTimes(1);
  expect(mockWriteText).toHaveBeenCalledWith(cssOutput);

  navigatorSpy.mockRestore();
});

test('Clicking the copy button calls document.execCommand if Clipboard API fails', () => {
  // Simulate Clipboard API failure
  const originalNavigator = {...navigator};
  const navigatorSpy = jest.spyOn(global, 'navigator', 'get');
  navigatorSpy.mockImplementation(() => ({
    ...originalNavigator,
    clipboard: false,
  }));
  // Mock document.queryCommandSupported
  const mockQueryCommandSupported = jest.fn();
  const originalQueryCommandSupported = document.queryCommandSupported;
  document.queryCommandSupported = mockQueryCommandSupported;

  const {getByTestId} = render(
    <GetCSS
      fontFamily={mockProps.fontFamily}
      fontSize={mockProps.fontSize}
      fontWeight={mockProps.fontWeight}
      lineHeight={mockProps.lineHeight}
      marginTop={mockProps.marginTop}
    />,
  );
  user.click(getByTestId('copy-button'));

  // verify
  expect(mockQueryCommandSupported).toHaveBeenCalledTimes(1);
  expect(mockQueryCommandSupported).toHaveBeenCalledWith('copy');
  // These assertions do not exactly test whether execCommand('copy') was called.
  // But QueryCommandSupported('copy') will be called when Clipboard API fails.
  // To assert on execCommand('copy'), we also need to mock document.createRange()
  // Jest is not meant to mock these "going-to-be-obsolete" functions.

  navigatorSpy.mockRestore();
  document.queryCommandSupported = originalQueryCommandSupported;
});

test('Clicking the copy button reveals the alert message and siables the button when neither Clipboard API nor document.execCommand works', () => {
  // Simulate Clipboard API failure
  const originalNavigator = {...navigator};
  const navigatorSpy = jest.spyOn(global, 'navigator', 'get');
  navigatorSpy.mockImplementation(() => ({
    ...originalNavigator,
    clipboard: false,
  }));
  // Simulate execCommand failure
  const mockQueryCommandSupported = jest.fn(command => {
    return false;
  });
  const originalQueryCommandSupported = document.queryCommandSupported;
  document.queryCommandSupported = mockQueryCommandSupported;

  const {getByTestId} = render(
    <GetCSS
      fontFamily={mockProps.fontFamily}
      fontSize={mockProps.fontSize}
      fontWeight={mockProps.fontWeight}
      lineHeight={mockProps.lineHeight}
      marginTop={mockProps.marginTop}
    />,
  );
  expect(getByTestId('whatHappened')).not.toBeVisible();
  expect(getByTestId('howToResolve')).not.toBeVisible();
  expect(getByTestId('extraText')).not.toBeVisible();
  expect(getByTestId('copy-button')).not.toBeDisabled();

  user.click(getByTestId('copy-button'));
  expect(getByTestId('whatHappened')).toBeVisible();
  expect(getByTestId('howToResolve')).toBeVisible();
  expect(getByTestId('extraText')).toBeVisible();
  expect(getByTestId('copy-button')).toBeDisabled();

  navigatorSpy.mockRestore();
  document.queryCommandSupported = originalQueryCommandSupported;
});

test('is accessible', async () => {
  const {container} = render(
    <GetCSS
      fontFamily={mockProps.fontFamily}
      fontSize={mockProps.fontSize}
      fontWeight={mockProps.fontWeight}
      lineHeight={mockProps.lineHeight}
      marginTop={mockProps.marginTop}
    />,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

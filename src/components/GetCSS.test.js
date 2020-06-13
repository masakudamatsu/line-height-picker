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
    .c0 {
      max-width: 33em;
    }

    .c2 {
      font-family: 'Fedra Sans Alt 2',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 1.4717rem;
      font-weight: 300;
      line-height: 1.0920;
    }

    .c2::before,
    .c2::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c2::before {
      margin-bottom: -0.1190em;
    }

    .c2::after {
      margin-top: -0.2660em;
    }

    .c11 {
      color: hsl(51,100%,44%);
      font-weight: 500;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
    }

    .c11::before,
    .c11::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c11::before {
      margin-bottom: -0.2555em;
    }

    .c11::after {
      margin-top: -0.4025em;
    }

    .c9 {
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
      visibility: hidden;
    }

    .c10 {
      -webkit-flex: 0 0 0.9427em;
      -ms-flex: 0 0 0.9427em;
      flex: 0 0 0.9427em;
      height: 0.9427em;
      width: 0.9427em;
      margin-left: -0.0786em;
      margin-right: 0.3214em;
      margin-top: -0.0786em;
      stroke: hsl(51,100%,44%);
      visibility: hidden;
    }

    .c5 {
      padding-bottom: 1.3392857142857142rem;
      padding-top: 1.3392857142857142rem;
      white-space: pre-wrap;
    }

    .c6 {
      font-family: 'Fedra Mono 2',monospace;
      font-weight: 300;
    }

    .c4 {
      background: hsla(0,0%,100%,0.9);
      box-shadow: 0 0 10px 0 hsla(0,0%,100%,0.56), 0 0 20px 0 hsla(0,0%,100%,0.56), 0 0 40px 0 hsla(0,0%,100%,0.56);
      height: 2px;
      width: 100%;
    }

    .c7 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: inherit;
      border: none;
      border-radius: 7.232142857142856px;
      box-shadow: -3px 0 3px 0px hsla(0,0%,100%,0.56), 0 -3px 3px 0px hsla(0,0%,100%,0.56), 3px 0 3px 0 hsla(0,0%,100%,0.56), 0 3px 3px 0 hsla(0,0%,100%,0.56);
      color: inherit;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-family: 'Fedra Sans Alt 2',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 1.5983342594463528rem;
      font-weight: 500;
      height: 65.08928571428571px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      -webkit-text-decoration: none;
      text-decoration: none;
      width: 294.2857142857143px;
    }

    .c7:focus,
    .c7:hover {
      background-color: hsl(0,0%,51%);
      box-shadow: -6px 0 6px 0px hsla(0,0%,100%,0.56), 0 -6px 6px 0px hsla(0,0%,100%,0.56), 6px 0 6px 0 hsla(0,0%,100%,0.56), 0 6px 6px 0 hsla(0,0%,100%,0.56);
      outline: none;
    }

    .c7:active {
      background-color: hsl(0,0%,51%);
      box-shadow: -1px 0 1px 0px hsla(0,0%,100%,0.56), 0 -1px 1px 0px hsla(0,0%,100%,0.56), 1px 0 1px 0 hsla(0,0%,100%,0.56), 0 1px 1px 0 hsla(0,0%,100%,0.56);
      outline: none;
    }

    .c7[disabled] {
      border: 1px solid hsla(0,0%,100%,0.56);
      box-shadow: none;
      cursor: not-allowed;
      opacity: 0.35;
    }

    .c8 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: inherit;
      border: none;
      border-radius: 7.232142857142856px;
      box-shadow: -3px 0 3px 0px hsla(0,0%,100%,0.56), 0 -3px 3px 0px hsla(0,0%,100%,0.56), 3px 0 3px 0 hsla(0,0%,100%,0.56), 0 3px 3px 0 hsla(0,0%,100%,0.56);
      color: inherit;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-family: 'Fedra Sans Alt 2',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 1.5983342594463528rem;
      font-weight: 500;
      height: 65.08928571428571px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      -webkit-text-decoration: none;
      text-decoration: none;
      width: 294.2857142857143px;
    }

    .c8:focus,
    .c8:hover {
      background-color: hsl(0,0%,51%);
      box-shadow: -6px 0 6px 0px hsla(0,0%,100%,0.56), 0 -6px 6px 0px hsla(0,0%,100%,0.56), 6px 0 6px 0 hsla(0,0%,100%,0.56), 0 6px 6px 0 hsla(0,0%,100%,0.56);
      outline: none;
    }

    .c8:active {
      background-color: hsl(0,0%,51%);
      box-shadow: -1px 0 1px 0px hsla(0,0%,100%,0.56), 0 -1px 1px 0px hsla(0,0%,100%,0.56), 1px 0 1px 0 hsla(0,0%,100%,0.56), 0 1px 1px 0 hsla(0,0%,100%,0.56);
      outline: none;
    }

    .c8[disabled] {
      border: 1px solid hsla(0,0%,100%,0.56);
      box-shadow: none;
      cursor: not-allowed;
      opacity: 0.35;
    }

    .c8::before {
      content: '←';
      position: absolute;
      left: 14.464285714285712px;
    }

    .c1 {
      height: 1.8080357142857142rem;
      width: auto;
    }

    .c3 {
      height: 1.2053571428571428rem;
      width: auto;
    }

    @media only screen and (min-width:728px) {
      .c2 {
        font-size: 1.7170rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c5 {
        padding-bottom: 1.5625rem;
        padding-top: 1.5625rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c7 {
        border-radius: 8.4375;
        font-size: 1.8647233026874117rem;
        height: 75.9375px;
        width: 343.33333333333337px;
      }
    }

    @media only screen and (min-width:728px) {
      .c8 {
        border-radius: 8.4375;
        font-size: 1.8647233026874117rem;
        height: 75.9375px;
        width: 343.33333333333337px;
      }
    }

    @media only screen and (min-width:728px) {
      .c8::before {
        left: 16.875px;
      }
    }

    @media only screen and (min-width:728px) {
      .c1 {
        height: 2.109375rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c3 {
        height: 1.40625rem;
      }
    }

    <div>
      <main>
        <section
          class="c0"
        >
          <div
            class="c1"
            height="3"
          />
          <h2
            class="c2"
          >
            Get CSS
          </h2>
          <div
            class="c3"
            height="2"
          />
          <div
            class="c4"
          />
          <pre
            class="c5"
          >
            <code
              class="c6"
              data-testid="cssCode"
              id="cssCode"
            >
              p {
      font-family: 'Open Sans';
      font-size: 18.6543px;
      font-weight: 400;
      line-height: 1.6055;
    }

    p + p {
      margin-top: 23.3394px;
    }
            </code>
          </pre>
          <div
            class="c4"
          />
          <div
            class="c3"
            height="2"
          />
          <button
            aria-describedby="whatHappened howToResolve extraText"
            class="c7"
            data-testid="copy-button"
          >
            Copy CSS code
          </button>
          <div
            class="c3"
            height="2"
          />
          <button
            class="c8"
          >
            Back
          </button>
          <div
            class="c3"
            height="2"
          />
          <div
            class="c9"
          >
            <svg
              class="c10"
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
            <p
              class="c11"
            >
              <span
                data-testid="whatHappened"
                id="whatHappened"
              >
                The browser doesn't allow us to copy the CSS code into your clipboard.
              </span>
               
              <span
                data-testid="howToResolve"
                id="howToResolve"
              >
                 
                Please select the CSS code on your own to copy and paste it.
              </span>
            </p>
          </div>
          <div
            class="c1"
            height="3"
          />
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

p + p {
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
  expect(getByTestId('copy-button')).not.toBeDisabled();

  user.click(getByTestId('copy-button'));
  expect(getByTestId('whatHappened')).toBeVisible();
  expect(getByTestId('howToResolve')).toBeVisible();
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

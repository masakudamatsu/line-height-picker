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
    .c1 {
      height: 1.8080357142857142rem;
      width: auto;
    }

    .c3 {
      height: 1.2053571428571428rem;
      width: auto;
    }

    .c0 {
      background-color: hsl(0,0%,25%);
      max-width: 700px;
      padding-left: 12.857142857142858px;
      padding-right: 12.857142857142858px;
      position: relative;
      z-index: 2;
    }

    .c2 {
      font-size: 1.47174375rem;
      font-weight: 300;
      line-height: 1;
      padding-left: 0;
      padding-right: 0;
    }

    .c2::before,
    .c2::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c2::before {
      margin-bottom: -0.10596546310832025rem;
    }

    .c2::after {
      margin-top: -0.32378335949764525rem;
    }

    .c8 {
      color: hsl(335,71%,64%);
      font-weight: 500;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
      font-weight: 500;
      visibility: hidden;
    }

    .c8::before,
    .c8::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c8::before {
      margin-bottom: -0.2497057983222135rem;
    }

    .c8::after {
      margin-top: -0.39491772924843016rem;
    }

    .c4 {
      border-bottom: 1px solid hsl(0,0%,46%);
      border-top: 1px solid hsl(0,0%,46%);
      padding-bottom: 1.3392868125000001rem;
      padding-top: 1.3392868125000001rem;
      white-space: pre-wrap;
    }

    .c5 {
      font-family: 'Fedra Mono',monospace;
      font-weight: 400;
    }

    .c6 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: hsl(0,0%,46%);
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

    .c6:focus,
    .c6:hover {
      background-color: hsl(0,0%,56%);
      box-shadow: -4px 0 12px 0px hsla(0,0%,100%,0.5), 0 -4px 12px 0px hsla(0,0%,100%,0.5), 4px 0 12px 0 hsla(0,0%,100%,0.5),0 4px 12px 0 hsla(0,0%,1000%,0.5);
      outline: none;
    }

    .c6:active {
      background-color: hsl(0,0%,56%);
      box-shadow: -1px 0 1px 0px hsla(0,0%,100%,0.5), 0 -1px 1px 0px hsla(0,0%,100%,0.5),1px 0 1px 0 hsla(0,0%,100%,0.5), 0 1px 1px 0 hsla(0,0%,1000%,0.5);
      outline: none;
    }

    .c6[disabled] {
      box-shadow: none;
      cursor: not-allowed;
      opacity: 0.35;
    }

    .c7 {
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

    .c7:focus,
    .c7:hover {
      background-color: hsl(0,0%,56%);
      box-shadow: -4px 0 12px 0px hsla(0,0%,100%,0.5), 0 -4px 12px 0px hsla(0,0%,100%,0.5), 4px 0 12px 0 hsla(0,0%,100%,0.5),0 4px 12px 0 hsla(0,0%,1000%,0.5);
      outline: none;
    }

    .c7:active {
      background-color: hsl(0,0%,56%);
      box-shadow: -1px 0 1px 0px hsla(0,0%,100%,0.5), 0 -1px 1px 0px hsla(0,0%,100%,0.5),1px 0 1px 0 hsla(0,0%,100%,0.5), 0 1px 1px 0 hsla(0,0%,1000%,0.5);
      outline: none;
    }

    .c7[disabled] {
      box-shadow: none;
      cursor: not-allowed;
      opacity: 0.35;
    }

    .c7::before {
      content: '←';
      position: absolute;
      left: 15.238095238095237px;
    }

    @media (min-width:875px) {
      .c0 {
        margin: 0 auto;
      }
    }

    @media only screen and (min-width:1024px) {
      .c2 {
        font-size: 1.71703125rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c2::before {
        margin-bottom: -0.12362637362637363rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c2::after {
        margin-top: -0.37774725274725274rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c8::before {
        margin-bottom: -0.29132305116758245rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c8::after {
        margin-top: -0.46073697058150187rem;
      }
    }

    @media only screen and (min-width:1024px) {

    }

    @media only screen and (min-width:1024px) {
      .c4 {
        padding-bottom: 1.5624984375000002rem;
        padding-top: 1.5624984375000002rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c6 {
        border-radius: 8.88888888888889;
        font-size: 1.9617074701820465rem;
        height: 80px;
        width: 343.33333333333337px;
      }
    }

    @media only screen and (min-width:1024px) {
      .c7 {
        border-radius: 8.88888888888889;
        font-size: 1.9617074701820465rem;
        height: 80px;
        width: 343.33333333333337px;
      }
    }

    @media only screen and (min-width:1024px) {
      .c7::before {
        left: 17.77777777777778px;
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
          <div
            class=""
          >
            <h2
              class="c2"
            >
              Get CSS
            </h2>
          </div>
          <div
            class="c3"
            height="2"
          />
          <pre
            class="c4"
          >
            <code
              class="c5"
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
            class="c3"
            height="2"
          />
          <div
            class=""
          >
            <button
              aria-describedby="whatHappened howToResolve extraText"
              class="c6"
              data-testid="copy-button"
            >
              Copy CSS code
            </button>
          </div>
          <div
            class="c3"
            height="2"
          />
          <div
            class=""
          >
            <a
              class="c7"
              href="/preview"
            >
              Back
            </a>
          </div>
          <div
            class="c3"
            height="2"
          />
          <p
            class="sc-AxmLO c8"
            data-testid="whatHappened"
            id="whatHappened"
          >
            The browser doesn't allow us to copy the CSS code into your clipboard.
          </p>
          <div
            class="c3"
            height="2"
          />
          <p
            class="sc-AxmLO c8"
            data-testid="howToResolve"
            id="howToResolve"
          >
            Please select the CSS code on your own to copy and paste it.
          </p>
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

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
    .c7 {
      color: hsl(0,0%,96%);
    }

    .c0 {
      padding-bottom: 0.8634987893462469rem;
    }

    .c1 {
      font-size: 1.513317191283293rem;
      font-weight: 300;
      line-height: 1;
    }

    .c6 {
      color: hsl(335,71%,64%);
      font-weight: 500;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
      padding-top: 0.30612226071428567rem;
      font-weight: 500;
      margin-top: 0;
      padding-bottom: 0.8555728214285714rem;
      visibility: hidden;
    }

    .c2 {
      border-bottom: 1px solid hsl(0,0%,46%);
      border-top: 1px solid hsl(0,0%,46%);
      padding-bottom: 1.607144175rem;
      padding-top: 1.607144175rem;
      white-space: pre-wrap;
    }

    .c3 {
      font-family: 'Fedra Mono',monospace;
      font-weight: 400;
    }

    .c4 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: hsl(0,0%,46%);
      border: none;
      border-radius: 7.619047619047619px;
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
      width: 285.7142857142857px;
    }

    .c5 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: hsl(0,0%,46%);
      border: none;
      border-radius: 7.619047619047619px;
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
      width: 285.7142857142857px;
    }

    .c5::before {
      content: '←';
      position: absolute;
      left: 15.238095238095237px;
    }

    @media only screen and (min-width:1024px) {
      .c0 {
        padding-bottom: 0.9865819209039548rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c1 {
        font-size: 1.765536723163842rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c6 {
        padding-top: 0.35714312499999995rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c6 {
        padding-bottom: 0.99816875rem;
      }
    }

    @media only screen and (min-width:1024px) {
      .c2 {
        padding-bottom: 1.874998125rem;
        padding-top: 1.874998125rem;
      }
    }

    @media (min-width:875px) {
      .c4 {
        border-radius: 8.88888888888889;
        font-size: 1.9617074701820465rem;
        height: 80px;
        width: 333.33333333333337px;
      }
    }

    @media (min-width:875px) {
      .c5 {
        border-radius: 8.88888888888889;
        font-size: 1.9617074701820465rem;
        height: 80px;
        width: 333.33333333333337px;
      }
    }

    @media (min-width:1024pxpx) {
      .c5::before {
        left: 17.77777777777778px;
      }
    }

    <div>
      <main>
        <section
          class=""
        >
          <div
            class="c0"
          >
            <h2
              class="c1"
            >
              Get CSS
            </h2>
          </div>
          <pre
            class="c2"
          >
            <code
              class="c3"
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
          <button
            aria-describedby="whatHappened howToResolve extraText"
            class="c4"
            data-testid="copy-button"
          >
            Copy CSS code
          </button>
        </section>
        <a
          class="c5"
          href="/preview"
        >
          Back
        </a>
        <section
          class=""
        >
          <p
            class="sc-AxheI c6"
            data-testid="whatHappened"
            id="whatHappened"
          >
            The browser doesn't allow us to copy the CSS code into your clipboard.
          </p>
          <p
            class="sc-AxheI c6"
            data-testid="howToResolve"
            id="howToResolve"
          >
            Please select the CSS code on your own to copy and paste it.
          </p>
          <p
            class="sc-AxheI c6"
            data-testid="extraText"
            id="extraText"
          >
            Alternatively, consider using the browsers that support the "click to copy into clipboard" feature: Edge (version 79 or later), Chrome (76 or later), Opera (63 or later). See
            <a
              class="c7"
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

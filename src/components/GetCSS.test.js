import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import GetCSS from './GetCSS';

test('renders correctly', () => {
  const {container} = render(<GetCSS />);
  expect(container).toMatchInlineSnapshot(`
    .c12 {
      white-space: nowrap;
    }

    .c14 {
      color: hsl(0,0%,96%);
    }

    .c8 {
      font-size: 3rem;
      font-weight: 200;
    }

    .c13 {
      color: hsl(335,71%,64%);
      font-size: 1rem;
      visibility: hidden;
    }

    .c9 {
      border: 1px solid hsl(0,0%,96%);
      padding: 1rem;
    }

    .c10 {
      font-family: monospace;
      font-size: 1rem;
    }

    .c1 {
      -webkit-clip: rect(1px 1px 1px 1px);
      clip: rect(1px 1px 1px 1px);
      -webkit-clip: rect(1px,1px,1px,1px);
      clip: rect(1px,1px,1px,1px);
      -webkit-clip-path: inset(50%);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    .c2 {
      display: block;
      fill: currentColor;
      height: auto;
      margin: 7.199999999999999% 0;
      visibility: visible;
      width: 20%;
    }

    .c0 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      width: 100%;
    }

    .c5 {
      color: currentColor;
      font-size: 5vw;
    }

    .c7 {
      color: hsl(0,0%,35%);
      font-size: 5vw;
    }

    .c4 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      width: 10vw;
    }

    .c6 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: currentColor;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      width: 10vw;
    }

    .c3 {
      -webkit-aling-items: center;
      -webkit-box-aling: center;
      -ms-flex-aling: center;
      aling-items: center;
      border-bottom: 1px solid currentColor;
      border-top: 1px solid currentColor;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      width: 70%;
    }

    .c11 {
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
      .c2 {
        margin: 63px 0;
      }
    }

    @media (min-width:875px) {
      .c5 {
        font-size: 43.75px;
      }
    }

    @media (min-width:875px) {
      .c7 {
        font-size: 43.75px;
      }
    }

    @media (min-width:875px) {
      .c4 {
        width: 87.5px;
      }
    }

    @media (min-width:875px) {
      .c6 {
        width: 87.5px;
      }
    }

    @media (min-width:875px) {
      .c11 {
        font-size: 43.75px;
      }
    }

    <div>
      <header
        class="c0"
      >
        <h1
          class="c1"
        >
          Line-height Picker
        </h1>
        <svg
          aria-labelledby="logoTitle"
          class="c2"
          height="308.000000pt"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          version="1.0"
          viewBox="0 0 778.000000 308.000000"
          width="778.000000pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title
            id="logoTitle"
          >
            Logo of Line-height Picker
          </title>
          <g
            stroke="none"
            transform="translate(0.000000,308.000000) scale(0.100000,-0.100000)"
          >
            <path
              d="M20 2643 c0 -516 6 -554 93 -647 l34 -36 137 0 c75 0 136 4 136 8 0 4 -16 24 -36 43 -40 38 -75 93 -101 159 -15 39 -18 98 -23 470 l-5 425 -117 3 -118 3 0 -428z"
            />
            <path
              d="M560 2975 l0 -95 120 0 120 0 0 95 0 95 -120 0 -120 0 0 -95z"
            />
            <path
              d="M3300 2515 l0 -555 120 0 120 0 0 555 0 555 -120 0 -120 0 0 -555z"
            />
            <path
              d="M5070 2975 l0 -95 120 0 120 0 0 95 0 95 -120 0 -120 0 0 -95z"
            />
            <path
              d="M6400 2515 l0 -555 120 0 120 0 0 555 0 555 -120 0 -120 0 0 -555z"
            />
            <path
              d="M7310 2578 c0 -444 8 -491 93 -582 l34 -36 137 0 c75 0 136 3 136 6 0 4 -21 29 -46 56 -89 95 -114 184 -114 404 l0 144 105 0 105 0 0 60 0 60 -105 0 -105 0 0 125 0 125 -120 0 -120 0 0 -362z"
            />
            <path
              d="M560 2330 l0 -370 120 0 120 0 0 370 0 370 -120 0 -120 0 0 -370z"
            />
            <path
              d="M1330 2695 c0 -3 16 -26 36 -51 89 -118 104 -182 104 -466 l0 -218 125 0 125 0 0 188 c0 301 -20 407 -96 506 l-35 46 -129 0 c-72 0 -130 -2 -130 -5z"
            />
            <path
              d="M2277 2694 c-3 -4 7 -32 23 -63 29 -59 54 -139 63 -203 l6 -38 -110 0 c-98 0 -109 2 -109 18 0 18 23 113 35 145 7 16 -3 17 -118 17 l-125 0 -17 -47 c-22 -62 -31 -249 -16 -339 6 -38 23 -104 38 -146 l26 -78 129 0 c70 0 128 4 128 9 0 5 -11 34 -25 66 -28 62 -55 164 -55 208 l0 27 236 0 237 0 -6 113 c-6 112 -21 179 -59 270 l-20 47 -128 0 c-69 0 -129 -3 -133 -6z"
            />
            <path
              d="M3600 2695 c0 -3 16 -26 36 -51 89 -118 104 -182 104 -466 l0 -218 125 0 125 0 0 188 c0 301 -20 407 -96 506 l-35 46 -129 0 c-72 0 -130 -2 -130 -5z"
            />
            <path
              d="M4547 2694 c-3 -4 7 -32 23 -63 29 -59 54 -139 63 -203 l6 -38 -110 0 c-98 0 -109 2 -109 18 0 18 23 113 35 145 7 16 -3 17 -118 17 l-125 0 -17 -47 c-22 -62 -31 -249 -16 -339 6 -38 23 -104 38 -146 l26 -78 129 0 c70 0 128 4 128 9 0 5 -11 34 -25 66 -28 62 -55 164 -55 208 l0 27 236 0 237 0 -6 113 c-6 112 -21 179 -59 270 l-20 47 -128 0 c-69 0 -129 -3 -133 -6z"
            />
            <path
              d="M5070 2330 l0 -370 120 0 120 0 0 370 0 370 -120 0 -120 0 0 -370z"
            />
            <path
              d="M5571 2662 c-49 -96 -66 -180 -66 -327 0 -150 13 -220 60 -322 l24 -53 130 0 c72 0 131 2 131 4 0 2 -13 32 -30 67 -47 102 -64 181 -64 304 0 120 22 217 70 304 13 24 24 47 24 52 0 5 -58 9 -130 9 l-130 0 -19 -38z"
            />
            <path
              d="M6700 2695 c0 -3 16 -26 36 -51 89 -118 104 -182 104 -466 l0 -218 125 0 125 0 0 188 c0 301 -20 407 -96 506 l-35 46 -129 0 c-72 0 -130 -2 -130 -5z"
            />
            <path
              d="M1030 2265 l0 -305 120 0 120 0 0 305 0 305 -120 0 -120 0 0 -305z"
            />
            <path
              d="M5928 2223 c-5 -319 -7 -353 -26 -412 -23 -71 -80 -161 -118 -186 -14 -9 -22 -20 -19 -25 4 -6 65 -10 139 -10 l132 0 30 33 c92 99 97 124 102 570 l4 377 -120 0 -120 0 -4 -347z"
            />
            <path
              d="M2860 2320 l0 -60 110 0 110 0 0 60 0 60 -110 0 -110 0 0 -60z"
            />
            <path
              d="M870 1395 l0 -95 120 0 120 0 0 95 0 95 -120 0 -120 0 0 -95z"
            />
            <path
              d="M2140 935 l0 -555 120 0 120 0 -2 553 -3 552 -117 3 -118 3 0 -556z"
            />
            <path
              d="M340 1116 c0 -2 15 -36 34 -77 44 -96 59 -171 58 -294 -1 -112 -25 -222 -66 -303 -14 -27 -22 -52 -19 -56 4 -3 63 -6 133 -6 l126 0 22 53 c45 108 57 176 57 317 0 145 -14 217 -60 318 l-24 52 -130 0 c-72 0 -131 -2 -131 -4z"
            />
            <path
              d="M870 750 l0 -370 120 0 120 0 0 370 0 370 -120 0 -120 0 0 -370z"
            />
            <path
              d="M1383 1078 c-14 -24 -38 -77 -52 -118 -21 -63 -25 -94 -25 -200 -1 -138 12 -202 63 -314 l30 -66 130 0 c145 0 146 1 110 60 -29 47 -65 151 -79 228 -19 109 7 250 69 369 21 40 36 75 33 78 -3 3 -61 5 -129 5 l-123 0 -27 -42z"
            />
            <path
              d="M1720 965 l0 -155 125 0 126 0 -3 153 -3 152 -122 3 -123 3 0 -156z"
            />
            <path
              d="M2481 934 l-72 -185 57 -147 c31 -81 63 -164 71 -184 l15 -38 134 0 c81 0 134 4 134 10 0 5 -36 91 -80 190 l-80 181 75 170 c41 94 73 175 70 180 -4 5 -61 9 -129 9 l-123 0 -72 -186z"
            />
            <path
              d="M3327 1114 c-3 -4 7 -32 23 -63 29 -59 54 -139 63 -203 l6 -38 -110 0 c-98 0 -109 2 -109 18 0 18 23 113 35 145 7 16 -3 17 -118 17 l-125 0 -17 -47 c-22 -62 -31 -249 -16 -339 6 -38 23 -104 38 -146 l26 -78 129 0 c70 0 128 4 128 9 0 5 -11 34 -25 66 -28 62 -55 164 -55 208 l0 27 236 0 237 0 -6 113 c-6 112 -21 179 -59 270 l-20 47 -128 0 c-69 0 -129 -3 -133 -6z"
            />
            <path
              d="M4090 1115 c0 -3 20 -32 44 -65 49 -66 82 -154 92 -242 l7 -58 123 0 124 0 -6 58 c-12 127 -43 214 -99 281 l-27 31 -129 0 c-71 0 -129 -2 -129 -5z"
            />
            <path
              d="M20 500 l0 -490 120 0 120 0 0 490 0 490 -120 0 -120 0 0 -490z"
            />
            <path
              d="M3840 685 l0 -305 120 0 120 0 0 305 0 305 -120 0 -120 0 0 -305z"
            />
          </g>
        </svg>
        <div
          class="c3"
          data-testid="stepIndicator"
        >
          <div
            class="c4"
          >
            <span
              class="c5"
            >
              1
            </span>
          </div>
          <div
            class="c4"
          >
            <span
              class="c5"
            >
              2
            </span>
          </div>
          <div
            class="c4"
          >
            <span
              class="c5"
            >
              3
            </span>
          </div>
          <div
            class="c4"
          >
            <span
              class="c5"
            >
              4
            </span>
          </div>
          <div
            class="c6"
          >
            <span
              class="c7"
            >
              5
            </span>
          </div>
        </div>
      </header>
      <main>
        <h2
          class="c8"
        >
          Get CSS
        </h2>
        <pre
          class="c9"
        >
          <code
            class="c10"
            data-testid="cssCode"
            id="cssCode"
          >
            p {
      font-family: undefined;
      font-size: undefinedpx;
      font-weight: undefined;
      line-height: undefined;
    }

    p:not(:first-child) {
      margin-top: undefinedpx;
    }
          </code>
        </pre>
        <button
          aria-describedby="whatHappened howToResolve extraText"
          class="c11"
        >
          Copy to clipboard
        </button>
        <a
          class="c11"
          href="/preview"
        >
          Back to preview
          <span
            class="c12"
          >
            ←
          </span>
        </a>
        <section
          class=""
          data-testid="error-message-clipboard"
        >
          <p
            class="sc-AxheI c13"
            id="whatHappened"
          >
            The browser doesn't allow us to copy the CSS code into your clipboard.
          </p>
          <p
            class="sc-AxheI c13"
            id="howToResolve"
          >
            Please select the CSS code on your own to copy and paste it.
          </p>
          <p
            class="sc-AxheI c13"
            id="extraText"
          >
            Alternatively, consider using the browsers that support the "click to copy into clipboard" feature: Edge (version 79 or later), Chrome (76 or later), Opera (63 or later). See
            <a
              class="c14"
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
  const mockProps = {
    fontFamily: 'Open Sans',
    fontSize: 18.6543,
    fontWeight: 400,
    lineHeight: 1.6055,
    marginTop: 23.3394,
  };
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
    fontSize: 17.4059,
    fontWeight: 500,
    lineHeight: 1.5,
    marginTop: 23.5674,
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

test('Clicking the button copys the CSS code into the user clipboard', async () => {
  // I'm not sure how we can access to the content of the clipboard.
  // navigator.clipboard.readText() does not work.
});

test('is accessible', async () => {
  const {container} = render(<GetCSS />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

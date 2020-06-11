import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import LogoImage from './LogoImage';

test('renders correctly', () => {
  const {container} = render(<LogoImage />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <svg
        aria-labelledby="logoTitle"
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
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<LogoImage />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});
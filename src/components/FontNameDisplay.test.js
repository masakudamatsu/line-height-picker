import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import FontNameDisplay from './FontNameDisplay';

const fontName = 'Open Sans';
const fontSubfamily = 'Regular';

test('renders correctly', () => {
  const {container} = render(
    <FontNameDisplay fontFamily={fontName} fontSubfamily={fontSubfamily} />,
  );
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      height: auto;
      min-height: 97.63392857142857px;
    }

    .c1 {
      font-family: Open Sans;
      font-size: NaNrem;
      line-height: 2.6786rem;
      padding-bottom: 1.3058rem;
      padding-top: 1.3058rem;
    }

    .c1:before,
    .c1:after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c1:before {
      margin-bottom: -NaNrem;
    }

    .c1:after {
      margin-top: -NaNrem;
    }

    @media only screen and (min-width:728px) {
      .c0 {
        min-height: 113.90625px;
      }
    }

    @media only screen and (min-width:728px) {
      .c1 {
        font-size: NaNrem;
        line-height: 3.1250rem;
        padding-bottom: 1.5234rem;
        padding-top: 1.5234rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c1:before {
        margin-bottom: -NaNrem;
      }
    }

    @media only screen and (min-width:728px) {
      .c1:after {
        margin-top: -NaNrem;
      }
    }

    <div>
      <div
        class="c0"
      >
        <p
          class="c1"
          data-testid="FontNameDisplay"
          font-family="Open Sans"
        >
          Open Sans Regular
        </p>
      </div>
    </div>
  `);
});

test('displays the props value as the font name', () => {
  const {getByTestId} = render(
    <FontNameDisplay fontFamily={fontName} fontSubfamily={fontSubfamily} />,
  );
  expect(getByTestId('FontNameDisplay')).toHaveTextContent(
    `${fontName} ${fontSubfamily}`,
  );
});

test('is accessible', async () => {
  const {container} = render(
    <FontNameDisplay fontFamily={fontName} fontSubfamily={fontSubfamily} />,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

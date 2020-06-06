import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import SampleParagraphs from './SampleParagraphs';

const paragraphStyle = {
  fontMetrics: {
    ascender: '2146',
    descender: '-555',
    fontFamily: 'Roboto Slab',
    fontWeight: '300',
    unitsPerEm: '2048',
    xHeight: '1082',
  },
  fontSize: '18',
  lineHeight: '1.15',
  marginTop: '23.467',
};

test('renders correctly', () => {
  const {container} = render(
    <SampleParagraphs
      fontMetrics={paragraphStyle.fontMetrics}
      fontSize={paragraphStyle.fontSize}
      lineHeight={paragraphStyle.lineHeight}
      marginTop={paragraphStyle.marginTop}
    />,
  );
  expect(container).toMatchInlineSnapshot(`
    .c5 {
      background: hsl(0,0%,74%);
      background: linear-gradient( to bottom, transparent 50%, hsl(0,0%,90%) 50%, hsl(0,0%,90%) );
      background-position: 0 calc( 0.125em + 0.708em );
      background-repeat: no-repeat;
      background-size: 100% 1px;
      color: hsl(0,0%,90%);
      cursor: pointer;
      -webkit-text-decoration: none;
      text-decoration: none;
      text-shadow: 0.03em 0 hsl(0,0%,10%), -0.03em 0 hsl(0,0%,10%),0 0.03em hsl(0,0%,10%), 0 -0.03em hsl(0,0%,10%);
    }

    .c5:visited {
      background: hsl(0,0%,36%);
      background: linear-gradient( to bottom, transparent 50%, hsl(180,70%,89%) 50%, hsl(180,70%,89%) );
      color: hsl(180,70%,89%);
    }

    .c5:focus,
    .c5:hover {
      background: hsl(0,0%,74%);
      display: inline-block;
      outline: none;
      text-shadow: none;
    }

    .c5:active {
      background: none;
    }

    .c5:visited:focus,
    .c5:visited:hover {
      background: hsl(0,0%,36%);
      display: inline-block;
      outline: none;
      text-shadow: none;
    }

    .c5:visited:active {
      background: none;
    }

    .c3 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
    }

    .c3::before,
    .c3::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c3::before {
      margin-bottom: -0.2545em;
    }

    .c3::after {
      margin-top: -0.4025em;
    }

    .c0 {
      background: hsla(0,0%,100%,0.9);
      box-shadow: 0 0 10px 0 hsla(0,0%,100%,0.56), 0 0 20px 0 hsla(0,0%,100%,0.56), 0 0 40px 0 hsla(0,0%,100%,0.56);
      height: 2px;
      width: 100%;
    }

    .c1 {
      font-family: Roboto Slab;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.15;
      padding-bottom: 10.7015625px;
      padding-top: 6.2279296875px;
    }

    .c1 p + p {
      margin: 23.467px 0 0 0;
    }

    .c4 {
      font-style: normal;
    }

    .c2 {
      height: 0.8035714285714286rem;
      width: auto;
    }

    @media only screen and (min-width:728px) {
      .c2 {
        height: 0.9375rem;
      }
    }

    <div>
      <blockquote>
        <div
          class="c0"
        />
        <div
          class="c1"
          data-testid="sampleParagraphs"
          font-size="18"
        >
          <p
            data-testid="sampleParagraph1"
          >
            … I learned about serif and sans serif typefaces, about varying the amount of space between different letter combinations, about what makes great typography great. It was beautiful, historical, artistically subtle in a way that science can’t capture, and I found it fascinating.
          </p>
          <p
            data-testid="sampleParagraph2"
          >
            None of this had even a hope of any practical application in my life. But 10 years later, when we were designing the first Macintosh computer, it all came back to me. And we designed it all into the Mac. It was the first computer with beautiful typography. If I had never dropped in on that single course in college, the Mac would have never had multiple typefaces or proportionally spaced fonts. And since Windows just copied the Mac, it’s likely that no personal computer would have them. If I had never dropped out, I would have never dropped in on this calligraphy class, and personal computers might not have the wonderful typography that they do. …
          </p>
        </div>
        <div
          class="c0"
        />
        <div
          class="c2"
          height="1"
        />
        <footer
          class="c3"
        >
          ―Excerpt from “
          <cite
            class="c4"
          >
            <a
              class="c5"
              href="https://news.stanford.edu/2005/06/14/jobs-061505/"
            >
              2005 Stanford Commencement Address
            </a>
          </cite>
          ” by Steve Jobs
        </footer>
      </blockquote>
    </div>
  `);
});

test('renders paragraphs according to the props values', () => {
  const {getByTestId} = render(
    <SampleParagraphs
      fontMetrics={paragraphStyle.fontMetrics}
      fontSize={paragraphStyle.fontSize}
      lineHeight={paragraphStyle.lineHeight}
      marginTop={paragraphStyle.marginTop}
    />,
  );
  expect(getByTestId('sampleParagraphs')).toHaveStyle(`
    font-family: ${paragraphStyle.fontMetrics.fontFamily};
    font-size: ${paragraphStyle.fontSize}px;
    font-weight: ${paragraphStyle.fontMetrics.fontWeight};
    line-height: ${paragraphStyle.lineHeight};
    `);
  expect(getByTestId('sampleParagraph2')).toHaveStyle(`
    margin-top: ${paragraphStyle.marginTop}px;
    `);
});

test('is accessible', async () => {
  const {container} = render(
    <SampleParagraphs
      fontMetrics={paragraphStyle.fontMetrics}
      fontSize={paragraphStyle.fontSize}
      lineHeight={paragraphStyle.lineHeight}
      marginTop={paragraphStyle.marginTop}
    />,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

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
    .c3 {
      color: hsl(0,0%,96%);
    }

    .c1 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
      padding-top: 0.30612226071428567rem;
    }

    .c0 {
      border-bottom: 1px solid hsl(0,0%,46%);
      border-top: 1px solid hsl(0,0%,46%);
      font-family: Roboto Slab;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.15;
      padding-bottom: 10.7015625px;
      padding-top: 6.2279296875px;
    }

    .c0 p + p {
      margin: 23.467px 0 0 0;
    }

    .c2 {
      font-style: normal;
    }

    @media only screen and (min-width:1024px) {
      .c1 {
        padding-top: 0.35714312499999995rem;
      }
    }

    <div>
      <blockquote>
        <div
          class="c0"
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
        <footer
          class="c1"
        >
          ―Excerpt from “
          <cite
            class="c2"
          >
            <a
              class="c3"
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

import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import SampleParagraphs from './SampleParagraphs';

test('renders correctly', () => {
  const {container} = render(<SampleParagraphs />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      border: 1px solid hsl(0,0%,96%);
      line-height: 1.6;
      padding: 1rem;
      margin: 2rem 0 0.5rem 0;
    }

    .c0 p:not(:first-child) {
      margin: 1rem 0 0 0;
    }

    <div>
      <section
        class="c0"
        data-testid="sampleParagraphs"
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
      </section>
    </div>
  `);
});

test('renders paragraphs according to the props values', () => {
  const paragraphStyle = {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.15,
  };
  const {getByTestId} = render(
    <SampleParagraphs
      fontFamily={paragraphStyle.fontFamily}
      fontSize={paragraphStyle.fontSize}
      fontWeight={paragraphStyle.fontWeight}
      lineHeight={paragraphStyle.lineHeight}
    />,
  );
  expect(getByTestId('sampleParagraphs')).toHaveStyle(`
    font-family: ${paragraphStyle.fontFamily};
    font-size: ${paragraphStyle.fontSize}px;
    font-weight: ${paragraphStyle.fontWeight};
    line-height: ${paragraphStyle.lineHeight};
    `);
});

test('is accessible', async () => {
  const {container} = render(<SampleParagraphs />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

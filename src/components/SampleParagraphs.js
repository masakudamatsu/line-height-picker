import React from 'react';
import {SampleParagraphWrapper} from '../theme/style';

const SampleParagraphs = props => {
  const paragraphStyle = {
    fontFamily: props.fontFamily,
    fontSize: `${props.fontSize}px`, // Number(props.fontSize) would cause a warning in concole. See issue #73
    fontWeight: props.fontWeight,
    lineHeight: props.lineHeight,
  };
  return (
    <SampleParagraphWrapper
      data-testid="sampleParagraphs"
      style={paragraphStyle}
    >
      <p data-testid="sampleParagraph1">
        … I learned about serif and sans serif typefaces, about varying the
        amount of space between different letter combinations, about what makes
        great typography great. It was beautiful, historical, artistically
        subtle in a way that science can’t capture, and I found it fascinating.
      </p>
      <p data-testid="sampleParagraph2">
        None of this had even a hope of any practical application in my life.
        But 10 years later, when we were designing the first Macintosh computer,
        it all came back to me. And we designed it all into the Mac. It was the
        first computer with beautiful typography. If I had never dropped in on
        that single course in college, the Mac would have never had multiple
        typefaces or proportionally spaced fonts. And since Windows just copied
        the Mac, it’s likely that no personal computer would have them. If I had
        never dropped out, I would have never dropped in on this calligraphy
        class, and personal computers might not have the wonderful typography
        that they do. …
      </p>
    </SampleParagraphWrapper>
  );
};

export default SampleParagraphs;

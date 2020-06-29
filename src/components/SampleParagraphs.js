import React from 'react';
import PropTypes from 'prop-types';

import {
  Cite,
  ExternalLink,
  LinearLight,
  ParagraphOneRem,
  SampleParagraphWrapper,
  SpacerVertical,
} from '../theme/style';

const SampleParagraphs = props => {
  return (
    <blockquote>
      <LinearLight />
      <SampleParagraphWrapper
        data-testid="sampleParagraphs"
        fontMetrics={props.fontMetrics}
        fontSize={props.fontSize}
        lineHeight={props.lineHeight}
        marginTop={props.marginTop}
      >
        <p data-testid="sampleParagraph1">
          … I learned about serif and sans serif typefaces, about varying the
          amount of space between different letter combinations, about what
          makes great typography great. It was beautiful, historical,
          artistically subtle in a way that science can’t capture, and I found
          it fascinating.
        </p>
        <p data-testid="sampleParagraph2">
          None of this had even a hope of any practical application in my life.
          But 10 years later, when we were designing the first Macintosh
          computer, it all came back to me. And we designed it all into the Mac.
          It was the first computer with beautiful typography. If I had never
          dropped in on that single course in college, the Mac would have never
          had multiple typefaces or proportionally spaced fonts. And since
          Windows just copied the Mac, it’s likely that no personal computer
          would have them. If I had never dropped out, I would have never
          dropped in on this calligraphy class, and personal computers might not
          have the wonderful typography that they do. …
        </p>
      </SampleParagraphWrapper>
      <LinearLight />
      <SpacerVertical height="1" />
      <ParagraphOneRem as="footer">
        ―Excerpt from “
        <Cite>
          <ExternalLink href="https://news.stanford.edu/2005/06/14/jobs-061505/">
            2005 Stanford Commencement Address
          </ExternalLink>
        </Cite>
        ” by Steve Jobs
      </ParagraphOneRem>
    </blockquote>
  );
};

SampleParagraphs.propTypes = {
  fontMetrics: PropTypes.object,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  marginTop: PropTypes.string,
};

export default SampleParagraphs;

import React from 'react';
// import PropTypes from 'prop-types';

import {
  ParagraphOneRem,
  Section,
  SectionTitle,
  SpacerVertical,
} from '../theme/style';

const PreviewGuide = () => {
  return (
    <>
      <Section>
        <SectionTitle>How to fine-tune the look of paragraphs</SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          Use arrow up/down keys to change values incrementally by 0.1. There
          will be a moment that paragraphs look great to your eyes, and
          increasing or reducing the values will not improve the appearance.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          I bet that sweet-spot moment comes when the ratio of x-height to
          line-height is a simple one like 2:5 or 1:3.
        </ParagraphOneRem>
      </Section>
      <SpacerVertical height="3" />
      <Section>
        <SectionTitle>Space between paragraphs</SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          In the above preview, the vertical space between the two paragraphs is
          set by taking the following considerations.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          To clearly indicate a new paragraph, rather than the continuation of
          the same paragraph, the space between paragraphs should be larger than
          the space between lines within a paragraph. The question is how much
          larger it should be.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          We propose to set the height ratio of within-paragraph whitespace to
          between-paragraph whitespace to be the same as the ratio of x-height
          to within-paragraph whitespace. If we multiply x-height with 1.5 to
          obtain the height of the within-paragraph whitespace, we will multiply
          x-height with 1.5 twice (that is, 2,25) to obtain the vertical space
          between paragraphs.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          The vertical space between paragraphs is defined as the length from
          the bottom of the last x-height stripe in the previous paragraph to
          the top of the uppercase letter at the beginning of the next
          paragraph, not to the top of the first x-height stripe in the next
          paragraph as you might expect.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          When our eyes move on from one paragraph to next, the first thing that
          comes into our sight is the first letter in the new paragraph and the
          white space around it. By convention, the first letter in a new
          paragraph is an uppercase letter. Visually speaking, x-height is not
          relevant for an uppercase letter. The relevant whitespace at the
          moment we start reading a new paragraph is therefore the vertical
          space between the bottom of the previous paragraph to the top of the
          uppercase letter.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          We think this vertical space will look pleasant if it clearly relates
          to the height of within-paragraph whitespace. The paragraphs you have
          been reading so far is an example of this approach: multiply x-height
          with 1.5 for within-paragraph whitespace and with 1.5 twice (i.e.
          2.25) for between-paragraph whitespace.
        </ParagraphOneRem>
      </Section>
    </>
  );
};

// PreviewGuide.propTypes = {};

export default PreviewGuide;

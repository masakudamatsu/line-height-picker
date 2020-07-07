import React from 'react';
// import PropTypes from 'prop-types';

import {
  Abbr,
  CodeInline,
  FigureFrame,
  Image,
  ParagraphOneRem,
  Section,
  SectionTitle,
  SpacerVertical,
} from '../theme/style';

import betweenParagraphWhitespace1x from '../img/between-paragraph-whitespace1x.png';
import betweenParagraphWhitespace2x from '../img/between-paragraph-whitespace2x.png';
import betweenParagraphWhitespace3x from '../img/between-paragraph-whitespace3x.png';
import betweenParagraphWhitespace4x from '../img/between-paragraph-whitespace4x.png';

const PreviewGuide = () => {
  return (
    <>
      <Section>
        <SectionTitle>How to fine-tune the look of paragraphs</SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          Use up-arrow and down-arrow keys to change values incrementally by
          0.1. There will be a moment that paragraphs look great to your eyes,
          and increasing or reducing the values will not improve the appearance.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          Most likely, the sweet-spot moment comes when the ratio of x-height to
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
          the same paragraph, the whitespace between paragraphs should be larger
          than the whitespace between lines within a paragraph. The question is
          how much larger it should be.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          We propose to set the height ratio of within-paragraph whitespace to
          between-paragraph whitespace to be the same as the ratio of x-height
          to within-paragraph whitespace. If we multiply x-height with 1.5 to
          obtain the height of the within-paragraph whitespace, we will multiply
          x-height with 1.5 twice (that is, 2.25) to obtain the
          between-paragraph whitespace.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          We measure the vertical space between paragraphs as the length from
          the bottom of the last x-height stripe in the previous paragraph to
          the top of the uppercase letter at the beginning of the next
          paragraph:
        </ParagraphOneRem>
        <SpacerVertical height="1" />
        <FigureFrame>
          <Image
            src={betweenParagraphWhitespace1x}
            srcSet={`${betweenParagraphWhitespace1x} 605w, ${betweenParagraphWhitespace2x} 1210w, ${betweenParagraphWhitespace3x} 1815w, ${betweenParagraphWhitespace4x} 2420w`}
            sizes="(min-width: 740px) 602px, (min-width: 600px) 516px, (min-width: 380px) calc(82vw + 40px), calc(66.67vw + 92px)"
            alt="Diagram indicating the vertical space between paragraphs"
          />
        </FigureFrame>
        <SpacerVertical height="1" />{' '}
        <ParagraphOneRem>
          When our eyes move on from one paragraph to next, the first thing that
          comes into our sight is the first letter in the new paragraph and the
          white space around it. By convention, the first letter in a new
          paragraph is an uppercase letter. Visually speaking, x-height is not
          relevant for an uppercase letter. When we start reading a new
          paragraph, therefore, the relevant whitespace is the vertical space
          between the bottom of the previous paragraph to the top of the
          uppercase letter.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          We think this vertical space will look pleasant if it clearly relates
          to the height of within-paragraph whitespace. The space beween this
          paragraph and the previous paragraph is an example of this approach:
          we multiply x-height with 1.5 for within-paragraph whitespace and with
          1.5 twice (i.e. 2.25) for between-paragraph whitespace.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          The Line-height Picker gives you the{' '}
          <CodeInline>margin-top</CodeInline> <Abbr>css</Abbr> value to achieve
          the paragraph-spacing described above.
        </ParagraphOneRem>
      </Section>
    </>
  );
};

// PreviewGuide.propTypes = {};

export default PreviewGuide;

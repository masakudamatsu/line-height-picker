import React from 'react';
// import PropTypes from 'prop-types';

import {
  CodeInline,
  ExternalLink,
  ParagraphOneRem,
  Section,
  SectionTitle,
  SpacerVertical,
} from '../theme/style';

const LineHeightGuide = () => {
  return (
    <>
      <Section>
        <SectionTitle>What is line-height?</SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          When you select the text for copy-and-paste it, the box will appear
          that surrounds the selected text. The height of this box is set by the{' '}
          <CodeInline>line-height</CodeInline> CSS value.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          The <CodeInline>line-height</CodeInline> value is also the sum of
          x-height and vertical space between the two consequtive x-height
          stripes.
        </ParagraphOneRem>
      </Section>
      <SpacerVertical height="3" />
      <Section>
        <SectionTitle>
          How to choose the x-height to line-height ratio
        </SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          I recommend picking a simple ratio such as 1:3 or 2:5.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          A simple size ratio is easy to recognize. If one shape is twice as
          large as another, we can immediately notice it. The same cannot be
          true if the size ratio is, say, 147:289.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          What we tend to find beautiful often comes from such a simple size
          ratio. In photography, the{' '}
          <ExternalLink href="https://en.wikipedia.org/wiki/Rule_of_thirds">
            rule of thirds
          </ExternalLink>{' '}
          tells you to place the main object at one-third of the photo-frame
          length from the edge, in order to take a beautiful photograph. In a
          photo shot this way, the object divides the image into two sections,
          one of which is twice as large as the other.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          Professional typographers often recommend taking a cue from musical
          scale such as the perfect fifth (2:3) or perfect forth (3:4),
          believing in that graphically applying the same ratio will deliever
          the same kind of feelings as the corresponding musical harmony does.
          We could apply the perfect fifth to obtain 2:5 or the perfect forth to
          obtain 3:7 as the ratio of x-height and line-height. There appeaers to
          be something about the simple ratios when it comes to what we perceive
          as pleasant.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          The 2:5 ratio of x-height to line-height is actually used in Twitter
          (at least on iOS devices). The font is SF Pro Display, iOS’s system
          font. The font-size is 25px, yielding the x-height of 14px. The
          line-height is 35px, 2.5 times as large as x-height. Personally,
          reading tweets on Twitter never disrupts the flow of reading text,
          while many news websites often distract me from reading their article
          because there is something weird about whitespace.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          Of course, we need to consider practial constraints when we choose{' '}
          <CodeInline>line-height</CodeInline> values.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          {' '}
          The simplest ratio would be 1:2, which means the x-height stripe has
          the same height as the whitespace stripe. But such tight line-spacing
          is likely to make the lowerpart of lowercase letters such as g and y
          (known as the “
          <ExternalLink href="https://en.wikipedia.org/wiki/Descender">
            descender
          </ExternalLink>
          ”) overlap the upper part of lowercase letters such as d and h (known
          as the “
          <ExternalLink href="https://en.wikipedia.org/wiki/Ascender_(typography)">
            ascender
          </ExternalLink>
          ”).
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          Also, the whitespace between two x-height stripes should be at least
          as wide as the space between words (which is about half of the{' '}
          <CodeInline>font-size</CodeInline>, but differs across fonts).
          Otherwise, one word may appear to belong to another word in the next
          line, instead of the words before and after in the same line. This
          will disrupt people from reading line by line.
        </ParagraphOneRem>{' '}
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          Another consideration is the width of a paragraph. Typography
          textbooks typically recommend that line-height should be shorter for
          narrower paragraphs. For a narrow column of text, it is not very
          difficult to spot the beginning of next line while reading a
          paragraph. So the space between lines does not need to be large to
          clearly indicate where next line starts.
        </ParagraphOneRem>{' '}
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          The most important thing is whether the chosen{' '}
          <CodeInline>line-height</CodeInline> value provides comfortable
          reading experiences to the user. The pleasant appearance due to the
          simple ratio of x-height to line-height is just one of several factors
          to ensure the best reading experience, but perhaps it is a good
          starting point.
        </ParagraphOneRem>{' '}
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          The Line-height Picker helps you convert your chosen ratio of x-height
          to line-height into the <CodeInline>line-height</CodeInline> CSS
          value.
        </ParagraphOneRem>{' '}
      </Section>
    </>
  );
};

// XheightGuide.propTypes = {};

export default LineHeightGuide;

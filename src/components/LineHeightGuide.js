import React from 'react';
// import PropTypes from 'prop-types';

import {
  Abbr,
  CodeInline,
  ExternalLink,
  FigureFrame,
  Image,
  ParagraphOneRem,
  Section,
  SectionTitle,
  SpacerVertical,
} from '../theme/style';

import lineHeight1x from '../img/line-height1x.png';
import lineHeight2x from '../img/line-height2x.png';
import lineHeight3x from '../img/line-height3x.png';
import lineHeight4x from '../img/line-height4x.png';

const LineHeightGuide = () => {
  return (
    <>
      <Section>
        <SectionTitle>What is line-height?</SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          When you select the text to copy-and-paste it, you will see the box
          that surrounds the selected text. The height of this box is set by the{' '}
          <CodeInline>line-height</CodeInline> <Abbr>css</Abbr> value.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          The <CodeInline>line-height</CodeInline> value is also the sum of
          x-height and vertical space between the two consequtive x-height
          stripes.
        </ParagraphOneRem>
        <SpacerVertical height="1" />
        <FigureFrame>
          <Image
            width={605}
            height={403}
            src={lineHeight1x}
            srcSet={`${lineHeight1x} 605w, ${lineHeight2x} 1210w, ${lineHeight3x} 1815w, ${lineHeight4x} 2420w`}
            sizes="(min-width: 740px) 602px, (min-width: 600px) 516px, (min-width: 380px) calc(82vw + 40px), calc(66.67vw + 92px)"
            alt="Diagram indicating which lengths the line-height CSS value refers to"
          />
        </FigureFrame>
      </Section>
      <SpacerVertical height="3" />
      <Section>
        <SectionTitle>
          How to choose the x-height to line-height ratio
        </SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          We recommend picking a simple ratio such as 1:3 or 2:5.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          A simple size ratio is easy to recognize. If one shape is twice as
          large as another, we can immediately notice it. The same cannot be
          true if the size ratio is, say, 147:289.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          A simple size ratio often ensures the beauty of what we see. In
          photography, the{' '}
          <ExternalLink
            href="https://en.wikipedia.org/wiki/Rule_of_thirds"
            title="Wikipedia entry on the rule of the thirds"
          >
            rule of thirds
          </ExternalLink>{' '}
          tells you to place the main object at one-third of the photo-frame
          length from the edge, in order to shoot a beautiful photograph. In a
          photo taken this way, the object divides the image into two sections,
          one of which is twice as large as the other.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          In typography, professionals often recommend taking a cue from musical
          scale such as the perfect fifth (2:3) or perfect forth (3:4),
          believing in that applying the same ratio graphically will deliever
          the same kind of feelings as the corresponding musical harmony does
          (as{' '}
          <ExternalLink
            href="https://youtu.be/_PGOlb2eKf0?t=595"
            title="a YouTube video of James Steinbach's talk entitled Using Musical Scales to Build Harmonious Typography"
          >
            demonstrated by James Steinbach at the Scotland CSS conference in
            2016
          </ExternalLink>
          ).
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          We could apply the rule of thirds in photography to obtain 1:3, or the
          perfect fifth in musical scale to obtain 2:5, as the ratio of x-height
          and line-height. This paragraph uses the ratio of 2:5.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          The 2:5 ratio of x-height to line-height is actually used in{' '}
          <ExternalLink href="https://twitter.com/">Twitter</ExternalLink>, at
          least on Mac OS and iOS devices. Personally, reading tweets on Twitter
          never disrupts the flow of reading text, while many news websites
          often distract me from reading their articles because there is
          something weird about whitespace.
        </ParagraphOneRem>
      </Section>
      <SpacerVertical height="3" />
      <Section>
        <SectionTitle>Other considerations on line-height</SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          Of course, we need to consider practial constraints when we choose{' '}
          <CodeInline>line-height</CodeInline> values.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          Too small line-height values will cause the overlapping of the lower
          part of lowercase letters such as g and y (known as the “
          <ExternalLink
            href="https://en.wikipedia.org/wiki/Descender"
            title="Wikipedia entry on the descender"
          >
            descender
          </ExternalLink>
          ”) with the upper part of lowercase letters such as d and h (known as
          the “
          <ExternalLink
            href="https://en.wikipedia.org/wiki/Ascender_(typography)"
            title="Wikipedia entry on the ascender"
          >
            ascender
          </ExternalLink>
          ”).
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          Also, the whitespace between two x-height stripes should be at least
          as wide as the space between words. Otherwise, one word will appear to
          belong to another word in the next line, instead of the words before
          and after in the same line. This will disrupt people from reading line
          by line.
        </ParagraphOneRem>{' '}
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          Another consideration is the width of a paragraph. Typography
          textbooks typically recommend that line-height should be shorter for
          narrower paragraphs. For a narrow column of text, it is not very
          difficult to spot the beginning of next line while reading a
          paragraph. So the space between lines does not need to be so large to
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
          to line-height into the <CodeInline>line-height</CodeInline>{' '}
          <Abbr>css</Abbr> value.
        </ParagraphOneRem>
      </Section>
    </>
  );
};

// XheightGuide.propTypes = {};

export default LineHeightGuide;

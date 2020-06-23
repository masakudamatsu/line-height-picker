import React from 'react';
// import PropTypes from 'prop-types';

import {
  Abbr,
  CodeInline,
  ExternalLink,
  ParagraphOneRem,
  Section,
  SectionTitle,
  SpacerVertical,
} from '../theme/style';

const About = () => {
  return (
    <Section>
      <SectionTitle>About the Line-height Picker</SectionTitle>
      <SpacerVertical height="2" />
      <ParagraphOneRem>
        The idea starts with a simple observation: a paragraph of text in Latin
        alphabets consists of stripes of{' '}
        <ExternalLink href="https://en.wikipedia.org/wiki/X-height">
          x-height
        </ExternalLink>{' '}
        and whitespace.
      </ParagraphOneRem>
      <SpacerVertical height="2" />
      <ParagraphOneRem>
        For a paragraph to be visually appealing, then these stripes should look
        harmonious. And a visual harmony can be achieved if the relative size of
        x-height and whitespace stripes is described by a simple ratio such as
        1:2.
      </ParagraphOneRem>
      <SpacerVertical height="2" />
      <ParagraphOneRem>
        However, it is challenging to control the height of stripes in a
        paragraph on webpages. We cannot directly specify the size of x-height
        in <Abbr>css</Abbr>. The ratio of x-height to the{' '}
        <CodeInline>font-size</CodeInline> <Abbr>css</Abbr> property value
        varies across fonts. And the <CodeInline>line-height</CodeInline> value
        needs to be relative to <CodeInline>font-size</CodeInline>, not to
        x-height.
      </ParagraphOneRem>
      <SpacerVertical height="2" />
      <ParagraphOneRem>
        Here comes the Line-height Picker for rescue. Set x-height and its ratio
        to line-height, and then the Line-height Picker converts them into the{' '}
        <CodeInline>font-size</CodeInline> and{' '}
        <CodeInline>line-height</CodeInline> values, based on the font you have
        selected. You can then copy these values into the <Abbr>css</Abbr>{' '}
        stylesheet for your webpages.
      </ParagraphOneRem>
      <SpacerVertical height="2" />
      <ParagraphOneRem>
        We will take you through this process step by step. Click the “Open font
        file...” button above to select a font file. Or click the “Start demo”
        button to see how the Line-height Picker works, with{' '}
        <ExternalLink href="https://fonts.google.com/specimen/Open+Sans">
          Open Sans
        </ExternalLink>
        —the second most popular font in Google Fonts (
        <ExternalLink href="https://fonts.google.com/analytics">
          source
        </ExternalLink>
        )—as a sample font.
      </ParagraphOneRem>
    </Section>
  );
};

// XheightGuide.propTypes = {};

export default About;

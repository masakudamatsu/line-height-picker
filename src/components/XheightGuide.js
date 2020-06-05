import React from 'react';
// import PropTypes from 'prop-types';

import {
  Code,
  NoWrap,
  ParagraphOneRem,
  Section,
  SectionTitle,
  SpacerVertical,
} from '../theme/style';

const XheightGuide = () => {
  return (
    <Section>
      <SectionTitle>
        How to choose <NoWrap>x-height</NoWrap> for your website
      </SectionTitle>
      <SpacerVertical height="2" />
      <ParagraphOneRem>
        First, think of which other websites frequently visited by the
        (potential) visitors to your site.
      </ParagraphOneRem>
      <SpacerVertical height="2" />
      <ParagraphOneRem>
        For example, suppose you are designing your own blog on web development.
        Those interested in the subject usually visit Medium.com and Dev.to,
        where they often end up landing, after Google search, to find out
        possible solutions to the problem they are facing.
      </ParagraphOneRem>
      <SpacerVertical height="2" />
      <ParagraphOneRem>
        Second, find out the x-height used for paragraphs in these websites.
      </ParagraphOneRem>
      <SpacerVertical height="2" />
      <ParagraphOneRem>
        Continuing the above example, Medium.com sets <Code>font-size</Code> to
        be 18px for mobile screens and 21px for desktop screens. Medium uses
        Charter as its body text font. By taking the screenshot of an article on
        Medium.com and analyzing it on Sketch app, I find out the x-height is
        10px for desktop screens. So the ratio of x-height to font-size for the
        Charter font is 10:21. Which means the x-height for mobile screens is
        8.5714px.
      </ParagraphOneRem>
      <SpacerVertical height="2" />
      <ParagraphOneRem>
        Finally, use this x-height value for your website as well.
      </ParagraphOneRem>
      <SpacerVertical height="2" />
      <ParagraphOneRem>
        This value reflects the text size familiar to the visitor to your
        website. If your website has a smaller text, it may look difficult to
        read. If your website has a larger text, it may look unprofessional.
      </ParagraphOneRem>
      <SpacerVertical height="2" />
      <ParagraphOneRem>
        Our webapp helps you convert this x-height value into the{' '}
        <Code>font-size</Code> value for the font of your choice.
      </ParagraphOneRem>{' '}
    </Section>
  );
};

// XheightGuide.propTypes = {};

export default XheightGuide;

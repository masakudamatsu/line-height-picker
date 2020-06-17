import React from 'react';
// import PropTypes from 'prop-types';

import {
  Code,
  ExternalLink,
  NoWrap,
  ParagraphOneRem,
  Section,
  SectionTitle,
  SpacerVertical,
} from '../theme/style';

const XheightGuide = () => {
  return (
    <>
      <Section>
        <SectionTitle>What is x-height?</SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          X-height is the height of the lowercase x. Roughly speaking, it is
          also the height of several other lowercase letters (a, c, e, i, m, n,
          o, r, s, t, u, v, w, z).
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          In addition, the top of the x is lined up with the lowercase g, j, p,
          q, y. The bottom of the x is lined up with the lowercase b, d, h, k,
          l, and all the uppercase letters (and the lowercase f as well for most
          fonts except the one you see now).
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          As a result, a line of text in a paragraph appears to be a stripe
          whose height equals to x-height.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          Each font has its own ratio of x-height to <Code>font-size</Code>.
          Therefore, the same <Code>font-size</Code> value does not ensure the
          same x-height—and the overall size of text— across fonts. For more
          detail on this point, I recommend reading{' '}
          <ExternalLink href="https://www.fonts.com/content/learning/fontology/level-1/type-anatomy/x-height">
            Allan Haley's article entitled "X-height"
          </ExternalLink>
          .
        </ParagraphOneRem>
      </Section>
      <SpacerVertical height="3" />
      <Section>
        <SectionTitle>
          Choosing <NoWrap>x-height</NoWrap> for your website
        </SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          Here is one idea, largely inspired by what Tim Brown suggests in
          Chapter 4 of his book{' '}
          <ExternalLink href="https://abookapart.com/products/flexible-typesetting">
            Flexible Typesetting
          </ExternalLink>{' '}
          (A Book Apart, 2018).
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          First, imagine which websites the (potential) visitors to your website
          frequently visit.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          For example, suppose you are designing your own blog on web
          development. Those interested in the subject usually visit Medium.com
          and Dev.to, where they often end up landing, after Google search, to
          find out possible solutions to the problem they are facing.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          Second, find out the x-height used for paragraphs in these websites.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          Continuing the above example, Medium.com sets <Code>font-size</Code>{' '}
          to be 18px for mobile screens and 21px for desktop screens. Medium
          uses{' '}
          <ExternalLink href="https://www.myfonts.com/fonts/itc/charter/">
            ITC Charter
          </ExternalLink>{' '}
          as its body text font (
          <ExternalLink href="https://medium.design/project-tnt-4b9b4ea97cda">
            source
          </ExternalLink>
          ). Its x-height is 10px for desktop screens, based on my own
          measurement. So the ratio of x-height to font-size is 10:21. Which
          means the x-height for mobile screens is 8.5714px.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          Finally, use this x-height value for your website as well.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          This value reflects the text size familiar to your website visitors,
          which will ensure the comfort when they read paragraphs on the web. If
          your website has a smaller text, it may look difficult to read. If
          your website has a larger text, it may look unprofessional.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          The Line-height Picker will convert this x-height value into the{' '}
          <Code>font-size</Code> value for the font of your choice.
        </ParagraphOneRem>{' '}
      </Section>
    </>
  );
};

// XheightGuide.propTypes = {};

export default XheightGuide;

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

const CssGuide = () => {
  return (
    <>
      <Section>
        <SectionTitle>How we obtain the above CSS values</SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          We use font metrics, extracted from the font file you have selected to
          convert the x-height value and its ratio to line-height into font-size
          and line-height values (and the margin-top value for a paragraph
          element directly after another paragraph element).
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          To learn about font metrics, I recommend reading{' '}
          <ExternalLink href="http://westonthayer.com/writing/intro-to-font-metrics/">
            Weston Thayer's article entitled "Intro to Font Metrics"
          </ExternalLink>
          .
        </ParagraphOneRem>
        <SpacerVertical height="3" />
        <SectionTitle as="h3">Font-size</SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          To convert the x-height value you have entered into the font-size
          value shown above, we use the ratio of two font metric values:
          sxHeight and unitsPerEm.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          The unitsPerEm is the number of units that correspond to the font-size
          value. It is usually either 1000 or 2048. The sxHeight value refers to
          the size of x-height in the number of units defined by unitsPerEm.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          For example, Open Sans has the values of 2048 for unitsPerEm and of
          1096 for sxHeight. For the ease of calculation, imagine you set
          font-size to be 20.48px. Then one unit in these font metric values
          equals to 0.01px. Consequently, the x-height will be 10.96px.
          Conversely, if you select Open Sans and the x-height value of 10.96px,
          then the font-size will be 20.48px. That is exactly how we convert
          x-height into font-size.
        </ParagraphOneRem>
        <SpacerVertical height="3" />
        <SectionTitle as="h3">Line-height</SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          The line-height value is then calculated as follows. We use the ratio
          of x-height to line-height to obtain the line-height value in px from
          the x-height value. For example, if you set x-height to be 10.96px and
          the ratio to be 1:3, then the line-height value is 32.88px. We then
          divide this value with the font-size value calculated in the way the
          previous paragraph describes.
        </ParagraphOneRem>
        <SpacerVertical height="3" />
        <SectionTitle as="h3">Margin-top</SectionTitle>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          The margin-top value for vertical space between paragraphs is
          calculated in three steps.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          We first use the ratio of x-height to line-height to obtain the
          vertical space in px from x-height. If x-height is 10.96px and the
          ratio is 1:3, then we multiply 10.96px with two twice to obtain
          43.84px.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          The next step subtracts the height of whitespace included in the text
          boxes in the last line of the first paragraph and the first line of
          the second paragraph.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          For the last line of the first paragraph, the font metric called
          descender gives the negative number of units, defined by unitsPerEm,
          for the distance between the bottom of the x-height stripe and the
          bottom of the text box. For Open Sans, it is -600. In our example, the
          font-size is 20.48px. So we will subtract 6px from the 43.84px of
          between-paragraph vertical space.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          For the first line of the second paragraph, we use two font metrics,
          ascender and sCapHeight. The ascender value refers to the distance
          between the top of the text box to the bottom of the x-height stripe.
          The sCapHeight indicates the distance between the top of the uppercase
          H (and other uppercase characters) and the bottom of the x-height
          stripe. What we need is the difference between the two, that is the
          distance from the top of the text box to the top of an uppercase
          chracter. For Open Sans, it is 727 (the ascender of 2189 subtracted by
          the sCapHeight of 1462). If the font-size is 20.48px, we will then
          subtract 7.27px from the 43.84px of between-paragraph vertical space.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          In the final step, we further subtract the value of line-height in px
          minus font-size.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          So the margin-top value will be 26.73px.
        </ParagraphOneRem>
      </Section>
    </>
  );
};

// CssGuide.propTypes = {};

export default CssGuide;

import React from 'react';
// import PropTypes from 'prop-types';

import {
  Code,
  ExternalLink,
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
          We use font metrics—extracted from the font file you have selected—to
          convert the x-height value and its ratio to line-height into{' '}
          <Code>font-size</Code>, <Code>line-height</Code>, and{' '}
          <Code>margin-top</Code> values.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          Below we explain how the Line-height Picker obtains each of these
          three CSS values. To learn more about font metrics, I recommend
          reading{' '}
          <ExternalLink href="http://westonthayer.com/writing/intro-to-font-metrics/">
            “Intro to Font Metrics”
          </ExternalLink>
          , an article written by Weston Thayer in 2019 .
        </ParagraphOneRem>
        <SpacerVertical height="3" />
        <SectionTitle as="h3">Font-size</SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          To convert your x-height value into the <Code>font-size</Code> value
          shown above, we use the ratio of two font metric values:{' '}
          <Code>unitsPerEm</Code> and <Code>sxHeight</Code>.
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          The <Code>unitsPerEm</Code> is the number of font-metric units that
          correspond to the <Code>font-size</Code> value. It is usually either
          1000 or 2048. For example, Open Sans has the <Code>unitsPerEm</Code>{' '}
          value of 2048. If you set <Code>font-size</Code> to be 20.48px, then
          one font-metric unit equals to 0.01px.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          The <Code>sxHeight</Code> value specifies the size of x-height in the
          number of font-metric units. Continuing the Open Sans example, we have
          the <Code>sxHeight</Code> value of 1096. Consequently, the x-height
          will be 10.96px if <Code>font-size</Code> is 20.48px, because one
          font-metric unit is then 0.01px as explained above.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          Conversely, if you select Open Sans and the x-height value of 10.96px,
          then the <Code>font-size</Code> will be 20.48px. This is exactly how
          we convert x-height into <Code>font-size</Code>.
        </ParagraphOneRem>
        <SpacerVertical height="3" />
        <SectionTitle as="h3">Line-height</SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          The <Code>line-height</Code> value is then calculated in two steps.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          First, we use the ratio of x-height to line-height to obtain the
          line-height value in px from the x-height value. For example, if you
          set x-height to be 10.96px and the ratio to be 1:3, then the
          line-height value is 32.88px.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          In the second step, we convert the px value of line-height into the
          unitless value relative to <Code>font-size</Code>, by dividing the
          former with the <Code>font-size</Code> value. Continuing the same
          example, we divide the line-height value of 32.88px with the{' '}
          <Code>font-size</Code> value of 20.48px, to obtain 1.6055. (We round
          to four decimal places.)
        </ParagraphOneRem>
        <SpacerVertical height="3" />
        <SectionTitle as="h3">Margin-top</SectionTitle>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          The <Code>margin-top</Code> value for vertical space between
          paragraphs is calculated in three steps. (If you haven't read “Space
          between Paragraphs” in{' '}
          <ExternalLink href="preview">the Preview page</ExternalLink>, we
          recommend reading it first.)
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          We first use the ratio of x-height to line-height to obtain the
          vertical space in px from x-height. If x-height is 10.96px and the
          ratio is 1:3, then we multiply 10.96px twice with two (
          <Code>=3-1</Code>) to obtain 43.84px.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          The next step calculates the distance from the bottom of the x-height
          stripe to the top of the uppercase letter when <Code>margin-top</Code>{' '}
          is zero. It is the amount of whitespace we need to subtract from the
          total vertical distance between paragraphs. For this purpose, we need
          two values.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          The first value is the distance from the top of an uppercase letter to
          the top of the lowercase x. Another font metric value called{' '}
          <Code>sCapHeight</Code> gives the distance from the top of an
          uppercase letter to the bottom of the x-height stripe. We then
          subtract from it the <Code>sxHeight</Code> value. In our example, Open
          Sans has the <Code>sCapHeight</Code> of 1462. Its difference from the{' '}
          <Code>sxHeight</Code> value of 1096 is then 466. As one font-metric
          unit is 0.01px in our example, it amounts to 3.66px.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          The second value is the distance between two consequtive x-height
          stripes. It equals to the difference between the line-height value and
          the x-height value. In our example, the former is 32.88px while the
          latter is 10.96px. Therefore, we have 21.92px.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          Consequently, the difference between these two values, 18.26px (
          <Code>=21.92-3.66</Code>), is what we are after: the distance from the
          bottom of the x-height stripe to the top of the uppercase letter when{' '}
          <Code>margin-top</Code> is zero.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          In the final step, we obtain the extra amount of whitespace to achieve
          the desired distance between paragraphs from the two values obtained
          in the previous two steps. In our example, we subtract the whitespace
          in the absence of any margin, 18.26px, from the target whitespace of
          43.84px. So the <Code>margin-top</Code> value will be 25.58px (
          <Code>=43.84-18.26</Code>).
        </ParagraphOneRem>
        <SpacerVertical height="2" />
        <ParagraphOneRem>Phew! :-)</ParagraphOneRem>
      </Section>
    </>
  );
};

// CssGuide.propTypes = {};

export default CssGuide;

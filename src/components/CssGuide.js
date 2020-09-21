import React from 'react';
// import PropTypes from 'prop-types';

import {
  Abbr,
  ArticleTitle,
  CodeInline,
  ExternalLink,
  FigureFrame,
  Image,
  ParagraphOneRem,
  Section,
  SectionTitle,
  SpacerVertical,
} from '../theme/style';

import imageMarginTop1x from '../img/margin-top1x.png';
import imageMarginTop2x from '../img/margin-top2x.png';
import imageMarginTop3x from '../img/margin-top3x.png';
import imageMarginTop4x from '../img/margin-top4x.png';

const CssGuide = () => {
  return (
    <>
      <Section>
        <SectionTitle>
          How we obtain the above <Abbr>css</Abbr> values
        </SectionTitle>
        <SpacerVertical height="2" />
        <ParagraphOneRem>
          We use font metrics—extracted from the font file you have selected—to
          convert the x-height value and its ratio to line-height into{' '}
          <CodeInline>font-size</CodeInline>,{' '}
          <CodeInline>line-height</CodeInline>, and{' '}
          <CodeInline>margin-top</CodeInline> values.
        </ParagraphOneRem>
        <SpacerVertical height="2" />{' '}
        <ParagraphOneRem>
          Below we explain how the Line-height Picker obtains each of these
          three <Abbr>css</Abbr> values. To learn more about font metrics, have
          a look at{' '}
          <ArticleTitle>
            <ExternalLink href="http://westonthayer.com/writing/intro-to-font-metrics/">
              “Intro to Font Metrics”
            </ExternalLink>
          </ArticleTitle>
          , an article written by Weston Thayer in 2019 .
        </ParagraphOneRem>
        <SpacerVertical height="3" />
        <section>
          <SectionTitle as="h3">Font-size</SectionTitle>
          <SpacerVertical height="2" />
          <ParagraphOneRem>
            To convert your x-height value into the{' '}
            <CodeInline>font-size</CodeInline> value shown above, we use the
            ratio of two font metric values: <CodeInline>unitsPerEm</CodeInline>{' '}
            and <CodeInline>sxHeight</CodeInline>.
          </ParagraphOneRem>
          <SpacerVertical height="2" />
          <ParagraphOneRem>
            The <CodeInline>unitsPerEm</CodeInline> value is the number of
            font-metric units that correspond to the{' '}
            <CodeInline>font-size</CodeInline> value. It is usually either 1000
            or 2048. For example, Open Sans has the{' '}
            <CodeInline>unitsPerEm</CodeInline> value of 2048. If you set{' '}
            <CodeInline>font-size</CodeInline> to be 20.48px, then one
            font-metric unit equals to 0.01px.
          </ParagraphOneRem>
          <SpacerVertical height="2" />{' '}
          <ParagraphOneRem>
            The <CodeInline>sxHeight</CodeInline> value specifies the size of
            x-height in the number of font-metric units. Continuing the Open
            Sans example, we have the <CodeInline>sxHeight</CodeInline> value of
            1096. Consequently, the x-height will be 10.96px if{' '}
            <CodeInline>font-size</CodeInline> is 20.48px, because one
            font-metric unit is then 0.01px as explained above.
          </ParagraphOneRem>
          <SpacerVertical height="2" />{' '}
          <ParagraphOneRem>
            Conversely, if you select Open Sans and the x-height value of
            10.96px, then the <CodeInline>font-size</CodeInline> value will be
            20.48px. This is exactly how we convert x-height into{' '}
            <CodeInline>font-size</CodeInline>.
          </ParagraphOneRem>
        </section>
        <SpacerVertical height="3" />
        <section>
          <SectionTitle as="h3">Line-height</SectionTitle>
          <SpacerVertical height="2" />
          <ParagraphOneRem>
            The <CodeInline>line-height</CodeInline> value is then calculated in
            two steps.
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
            unitless value relative to <CodeInline>font-size</CodeInline>, by
            dividing the former with the <CodeInline>font-size</CodeInline>{' '}
            value. Continuing the same example, we divide the line-height value
            of 32.88px with the <CodeInline>font-size</CodeInline> value of
            20.48px, to obtain 1.6055. (We round to four decimal places.)
          </ParagraphOneRem>
        </section>
        <SpacerVertical height="3" />
        <section>
          <SectionTitle as="h3">Margin-top</SectionTitle>
          <SpacerVertical height="2" />{' '}
          <ParagraphOneRem>
            The <CodeInline>margin-top</CodeInline> value for vertical space
            between paragraphs is calculated in three steps. The diagram below
            indicates what lengths the <CodeInline>margin-top</CodeInline> value
            and the vertical space between paragraphs refer to, respectively:
          </ParagraphOneRem>
          <SpacerVertical height="1" />
          <FigureFrame>
            <Image
              width={606}
              height={403}
              src={imageMarginTop1x}
              srcSet={`${imageMarginTop1x} 605w, ${imageMarginTop2x} 1210w, ${imageMarginTop3x} 1815w, ${imageMarginTop4x} 2430w`}
              sizes="(min-width: 740px) 602px, (min-width: 600px) 516px, (min-width: 380px) calc(82vw + 40px), calc(66.67vw + 92px)"
              alt="Diagram indicating what length is referred to by the margin-top and the vertical space between paragraphs"
            />
          </FigureFrame>
          <SpacerVertical height="1" />
          <ParagraphOneRem>
            (If you haven't read “Space between Paragraphs” in{' '}
            <ExternalLink href="preview">the Preview page</ExternalLink>, we
            recommend reading it first.)
          </ParagraphOneRem>
          <SpacerVertical height="2" />
          <ParagraphOneRem>
            Step 1—We first use the ratio of x-height to line-height to obtain
            the vertical space in px from x-height. If x-height is 10.96px and
            the ratio is 1:3, then we multiply 10.96px twice with two (
            <CodeInline>=3-1</CodeInline>) to obtain 43.84px.
          </ParagraphOneRem>
          <SpacerVertical height="2" />{' '}
          <ParagraphOneRem>
            Step 2—We then calculates the distance from the bottom of the
            x-height stripe to the top of the uppercase letter when{' '}
            <CodeInline>margin-top</CodeInline> is zero. It is the amount of
            whitespace we need to subtract from the total vertical distance
            between paragraphs. For this purpose, we need two values.
          </ParagraphOneRem>
          <SpacerVertical height="2" />{' '}
          <ParagraphOneRem>
            The first value we need is the distance from the top of an uppercase
            letter to the top of the lowercase x. Another font metric value
            called <CodeInline>sCapHeight</CodeInline> gives the distance from
            the top of an uppercase letter to the bottom of the x-height stripe.
            We then subtract from it the <CodeInline>sxHeight</CodeInline>{' '}
            value. In our example, Open Sans has the{' '}
            <CodeInline>sCapHeight</CodeInline> of 1462. Its difference from the{' '}
            <CodeInline>sxHeight</CodeInline> value of 1096 is then 366. As one
            font-metric unit is 0.01px in our example, it amounts to 3.66px.
          </ParagraphOneRem>
          <SpacerVertical height="2" />{' '}
          <ParagraphOneRem>
            The second value we need is the distance between two consequtive
            x-height stripes. It equals to the difference between the
            line-height value and the x-height value. In our example, the former
            is 32.88px while the latter is 10.96px. Therefore, we have 21.92px.
          </ParagraphOneRem>
          <SpacerVertical height="2" />{' '}
          <ParagraphOneRem>
            Consequently, the difference between these two values, 18.26px (
            <CodeInline>=21.92-3.66</CodeInline>), is what we are after: the
            distance from the bottom of the x-height stripe to the top of the
            uppercase letter when <CodeInline>margin-top</CodeInline> is zero.
          </ParagraphOneRem>
          <SpacerVertical height="2" />{' '}
          <ParagraphOneRem>
            Step 3—Finally, we obtain the extra amount of whitespace to achieve
            the desired distance between paragraphs from the two values obtained
            in the previous two steps. In our example, we subtract the
            whitespace in the absence of any margin, 18.26px, from the target
            whitespace of 43.84px. So the <CodeInline>margin-top</CodeInline>{' '}
            value will be 25.58px (<CodeInline>=43.84-18.26</CodeInline>).
          </ParagraphOneRem>
          <SpacerVertical height="2" />
          <ParagraphOneRem>Phew! :-)</ParagraphOneRem>
        </section>
      </Section>
    </>
  );
};

// CssGuide.propTypes = {};

export default CssGuide;

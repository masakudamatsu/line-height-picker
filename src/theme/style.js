import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colorPalette from './colorPalette';
import fontPalette from './fontPalette';
import buttonSize from './buttonSize';
import inputSize from './inputSize';
import LogoImage from '../components/LogoImage';

// Parameters
const minScreenWidthPx = 320;
const minFontSizePx = 16;

// Typography
const fontWeight = 200;

// Inline modifier
export const NoWrap = styled.span`
  white-space: nowrap;
`;

export const BringAttention = styled.b`
  font-weight: ${props => (props.yes ? '700' : 'inherit')};
`;

export const ExternalLink = styled.a`
  color: ${colorPalette.bodyText};
`;

export const InternalLink = styled(Link)`
  color: ${colorPalette.linkText};
`;

export const SectionTitleWrapper = styled.div`
  padding-bottom: ${props =>
    props.aboveBodyText
      ? fontPalette.sectionTitle.paddingBottomAboveBodyText.mobile + 2 / 16
      : fontPalette.sectionTitle.paddingBottom.mobile +
        2 / 16}rem; /* 2px is optical adjustmnet */
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
    padding-bottom: ${props =>
      props.aboveBodyText
        ? fontPalette.sectionTitle.paddingBottomAboveBodyText.desktop + 2 / 16
        : fontPalette.sectionTitle.paddingBottom.desktop +
          2 / 16}rem; /* 2px is optical adjustmnet */
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${fontPalette.sectionTitle.fontSize.mobile}rem;
  font-weight: ${fontPalette.sectionTitle.fontWeight};
  line-height: ${fontPalette.sectionTitle.lineHeight};
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
    font-size: ${fontPalette.sectionTitle.fontSize.desktop}rem;
  }
`;

export const ParagraphOneRem = styled.p`
  color: ${props =>
    props.errorText ? colorPalette.errorText : 'currentColor'};
  font-weight: ${props =>
    props.errorText ? fontPalette.alertText.fontWeight : 'inherit'};
  font-variant-numeric: oldstyle-nums;
  font-feature-settings: 'calt', 'clig', 'kern', 'liga', 'onum';
  padding-top: ${fontPalette.lineSpacingBelowBox.mobile}rem;
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
    padding-top: ${fontPalette.lineSpacingBelowBox.desktop}rem;
  }
`;

export const AlertMessage = styled(ParagraphOneRem)`
  font-weight: ${fontPalette.alertText.fontWeight};
  margin-top: 0;
  visibility: ${props => (props.error ? 'visible' : 'hidden')};
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
  }
`;

export const ParagraphOneRemRightAligned = styled(ParagraphOneRem)`
  text-align: right;
`;

export const Section = styled.section``;

export const CodeSnippet = styled.pre`
  border-bottom: 1px solid ${colorPalette.inputField};
  border-top: 1px solid ${colorPalette.inputField};
  padding-bottom: ${fontPalette.code.paddingBottom.mobile}rem;
  padding-top: ${fontPalette.code.paddingTop.mobile}rem;
  white-space: pre-wrap; /* https://developer.mozilla.org/en-US/docs/Web/CSS/white-space */
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
    padding-bottom: ${fontPalette.code.paddingBottom.desktop}rem;
    padding-top: ${fontPalette.code.paddingTop.desktop}rem;
  }
`;

export const Code = styled.code`
  font-family: ${fontPalette.code.fontFamily};
  font-weight: ${fontPalette.code.fontWeight};
`;

export const HiddenH1 = styled.h1`
  /* Hide the h1 element except for the screen reader. */
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; /* See https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe */
  width: 1px;
`;

// Layout parameters
const logoWidth = 0.8;
const maxLogoWidthPx = 700;
const mediaQueryCutoff = maxLogoWidthPx / logoWidth;

export const SideMarginRegulator = styled.div`
  margin: 0 ${fontPalette.marginSide}px;
  max-width: ${maxLogoWidthPx}px;
  @media (min-width: ${mediaQueryCutoff}px) {
    margin: 0 auto;
  }
`;

// Logo

// Calculate the Logo's margin-top property vaue
const scale = 1.5;
const verticalSpacePx = 42; // a space between the two lines when the logo width is 700px.
const logoMarginTopAboveCutoffPx = verticalSpacePx * scale;
const logoMarginTopBelowCutoff = logoMarginTopAboveCutoffPx / mediaQueryCutoff;

export const Logo = styled(LogoImage)`
  display: block;
  fill: currentColor;
  height: auto;
  margin: ${logoMarginTopBelowCutoff * 100}% 0;
  visibility: ${props => (props.topPage ? 'hidden' : 'visible')};
  width: ${props => (props.header ? '20%' : '100%')};
  @media (min-width: ${mediaQueryCutoff}px) {
    margin: ${logoMarginTopAboveCutoffPx}px 0;
  }
`;

// Header

export const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const StepIndicatorWrapper = styled.nav`
  width: 70%;
`;
export const StepIndicator = styled.ol`
  aling-items: center;
  border-bottom: 1px solid currentColor;
  border-top: 1px solid currentColor;
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 100%;
`;
const numberBoxWidth = 0.1;
export const StepNumberBox = styled.li`
  align-items: center;
  background-color: ${props => props.now && 'currentColor'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${numberBoxWidth * 100}vw;
  @media (min-width: ${mediaQueryCutoff}px) {
    width: ${mediaQueryCutoff * numberBoxWidth}px;
  }
`;

// https://github.com/styled-components/styled-components/issues/1198#issuecomment-425650423
export const StepNumber = styled(({done, ...props}) => <Link {...props} />)`
  color: ${props => (props.done ? 'currentColor' : colorPalette.disabledText)};
  cursor: ${props => (props.done ? 'pointer' : 'default')};
  font-size: ${(minFontSizePx / minScreenWidthPx) * 100}vw;
  text-decoration: none;
  @media (min-width: ${mediaQueryCutoff}px) {
    font-size: ${mediaQueryCutoff * (minFontSizePx / minScreenWidthPx)}px;
  }
`;

// Landing Page

// Font-size for description
const descriptionFontSize = 2.5;
const descriptionFontSizeBelowCutoff =
  (16 * descriptionFontSize) / mediaQueryCutoff;

export const DescriptionWrapper = styled.p`
  font-size: ${descriptionFontSizeBelowCutoff * 100}vw;
  font-weight: ${fontWeight};
  margin: 0;
  text-indent: -1px;
  width: 100%;
  @media (min-width: ${mediaQueryCutoff}px) {
    font-size: ${descriptionFontSize}rem;
  }
`;

// Font Name display
export const UserDataDisplayWrapper = styled.section`
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  padding: 1rem 0;
`;
export const UserDataDisplayTitle = styled.h2`
  font-size: 1.5rem;
`;
export const UserDataDisplay = styled.p`
  font-family: ${props => props.fontFamily};
  font-size: 2rem;
  font-weight: ${props => props.fontWeight};
`;

// Buttons

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: ${logoMarginTopBelowCutoff * 100}% 0;
  max-width: ${maxLogoWidthPx}px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  margin-top: ${props =>
    props.belowBodyText
      ? fontPalette.button.marginTop.belowBodyText.mobile
      : fontPalette.button.marginTop.belowBox.mobile}rem;
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
    margin-top: ${props =>
      props.belowBodyText
        ? fontPalette.button.marginTop.belowBodyText.desktop
        : fontPalette.button.marginTop.belowBox.desktop}rem;
  }
`;

export const Button = styled.button`
  align-items: center; /* For when the as={Link} attribute is added.  */
  background-color: ${colorPalette.button.default};
  border: none;
  border-radius: ${buttonSize.borderRadius.mobile}px;
  box-shadow: -2px 0 6px 0px hsla(0, 0%, 100%, 0.5),
    0 -2px 6px 0px hsla(0, 0%, 100%, 0.5), 2px 0 6px 0 hsla(0, 0%, 100%, 0.5),
    0 2px 6px 0 hsla(0, 0%, 1000%, 0.5);
  color: inherit;
  cursor: pointer;
  display: flex;
  font-family: ${fontPalette.button.fontFamily};
  font-size: ${buttonSize.fontSize.mobile}rem;
  font-weight: ${fontPalette.button.fontWeight};
  height: ${buttonSize.height.mobile}px;
  justify-content: center;
  position: relative;
  text-decoration: none; /* when the as={Link} attribute is added. */
  width: ${buttonSize.width.mobile}px;

  &:focus,
  &:hover {
    background-color: ${colorPalette.button.focus};
    box-shadow: -4px 0 12px 0px hsla(0, 0%, 100%, 0.5),
      0 -4px 12px 0px hsla(0, 0%, 100%, 0.5),
      4px 0 12px 0 hsla(0, 0%, 100%, 0.5), 0 4px 12px 0 hsla(0, 0%, 1000%, 0.5);
    outline: none;
  }

  &:active {
    background-color: ${colorPalette.button.focus};
    box-shadow: -1px 0 1px 0px hsla(0, 0%, 100%, 0.5),
      0 -1px 1px 0px hsla(0, 0%, 100%, 0.5), 1px 0 1px 0 hsla(0, 0%, 100%, 0.5),
      0 1px 1px 0 hsla(0, 0%, 1000%, 0.5);
    outline: none;
  }

  &[disabled] {
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.35;
  }

  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
    border-radius: ${buttonSize.borderRadius.desktop};
    font-size: ${buttonSize.fontSize.desktop}rem;
    height: ${buttonSize.height.desktop}px;
    width: ${buttonSize.width.desktop}px;
  }
`;

export const ButtonWithRightArrow = styled(Button)`
  &::after {
    content: '→';
    position: absolute;
    right: ${buttonSize.paddingSide.mobile / 2}px;
    @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
      right: ${buttonSize.paddingSide.desktop / 2}px;
    }
  }
`;

export const ButtonWithLeftArrow = styled(Button)`
  &::before {
    content: '←';
    position: absolute;
    left: ${buttonSize.paddingSide.mobile / 2}px;
    @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
      left: ${buttonSize.paddingSide.desktop / 2}px;
    }
  }
`;

// Forms
export const Form = styled.form.attrs(props => ({
  autoComplete: 'off',
}))`
  display: flex;
  flex-direction: column;
  padding: 0 0 3rem 0;
`;

export const Label = styled.label`
  position: absolute;
  left: ${inputSize.labelLeftPx}px;
  top: ${inputSize.labelTopFallbackPx}px; /* Fallback for Opera Mini and IE */
  top: calc(
    ${inputSize.labelTopPx}px - ${inputSize.labelTopOffsetRem.mobile}rem
  );
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
    top: calc(
      ${inputSize.labelTopPx}px - ${inputSize.labelTopOffsetRem.desktop}rem
    );
  }
`;
export const InputWrapper = styled.div`
  height: ${inputSize.height.mobile}rem;
  position: relative; /* To place XheightInputUnit component */
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
    height: ${inputSize.height.desktop}rem;
  }
`;

export const Input = styled.input.attrs(props => ({
  type: 'text',
}))`
  background-color: ${colorPalette.background};
  border: 2px solid ${colorPalette.inputField};
  border-radius: 4px;
  color: ${colorPalette.bodyText};
  font-family: ${fontPalette.code.fontFamily};
  font-size: ${fontPalette.inputNumber.fontSize.mobile}rem;
  height: 100%;
  line-height: 1;
  padding-left: ${inputSize.paddingSidePx - 4}px; /* optical adjustmnet */
  padding-top: ${inputSize.extraTopPaddingToCenterAlignRem.mobile +
    inputSize.labelTextCapHeightRem.mobile +
    0.5}rem; /* fallback for Opera Mini */
  padding-top: calc(
    ${inputSize.extraTopPaddingToCenterAlignRem.mobile}rem +
      ${inputSize.labelTextCapHeightRem.mobile}rem + ${inputSize.labelTopPx}px
  );
  text-align: center;

  &:active,
  &:hover,
  &:focus {
    border: 2px solid ${colorPalette.bodyText};
    outline: none;
  }

  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
    font-size: ${fontPalette.inputNumber.fontSize.desktop}rem;
    padding-top: ${inputSize.extraTopPaddingToCenterAlignRem.desktop +
      inputSize.labelTextCapHeightRem.desktop +
      0.5}rem; /* fallback for Opera Mini */
    padding-top: calc(
      ${inputSize.extraTopPaddingToCenterAlignRem.desktop}rem +
        ${inputSize.labelTextCapHeightRem.desktop}rem +
        ${inputSize.labelTopPx}px
    );
  }
`;
export const NumberInput = styled(Input).attrs(props => ({
  inputMode: 'decimal', // for not only Chrome but also iOS to show number key pad. See https://css-tricks.com/better-form-inputs-for-better-mobile-user-experiences/
}))``;

export const InputInstruction = styled(ParagraphOneRem)`
  text-align: right;
`;

export const XheightInput = styled(NumberInput)`
  padding-right: ${inputSize.paddingSidePx *
    2.7}px; /* fallback for Opera Mini and IE */
  padding-right: calc(
    ${inputSize.paddingSidePx * 2}px + 0.7rem
  ); /* 0.7rem is picked by optical alignment */
  width: 100%;
`;

export const XheightInputUnit = styled.span`
  display: inline-block;
  font-weight: 500; /* to match the large font-size of input values */
  position: absolute;
  right: ${inputSize.paddingSidePx}px;
  bottom: ${inputSize.suffixBottomRem
    .mobile}rem; /* to aligh with input values at the baseline */
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
    bottom: ${inputSize.suffixBottomRem.desktop}rem;
  }
`;

export const ModularScaleInputWrapper = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ModularScaleText = styled.p`
  line-height: 1;
  padding-bottom: ${fontPalette.bodyText.paddingBottomAboveBox.mobile}rem;
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff}) {
    padding-bottom: ${fontPalette.bodyText.paddingBottomAboveBox.desktop}rem;
  }
`;

export const RatioWrapper = styled(InputWrapper)`
  width: 45%;
`;

export const ModularScaleInput = styled(NumberInput)`
  padding-right: ${inputSize.paddingSidePx - 4}px; /* Same as padding-left */
  width: 100%;
`;

export const ModularScaleInputUnit = styled.span``;

export const SampleParagraphWrapper = styled.div`
  border-bottom: 1px solid ${colorPalette.inputField};
  border-top: 1px solid ${colorPalette.inputField};
  font-family: ${props => props.fontMetrics.fontFamily};
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontMetrics.fontWeight};
  line-height: ${props => props.lineHeight};
  padding-bottom: ${props =>
    props.fontSize *
      ((props.fontMetrics.ascender - props.fontMetrics.xHeight) /
        props.fontMetrics.unitsPerEm) +
    (props.fontSize * (props.lineHeight - 1)) / 2}px;
  padding-top: ${props =>
    props.fontSize *
      (-props.fontMetrics.descender / props.fontMetrics.unitsPerEm) +
    (props.fontSize * (props.lineHeight - 1)) / 2}px;
  p + p {
    margin: ${props => props.marginTop || '16'}px 0 0 0;
  }
`;

export const Cite = styled.cite`
  font-style: normal;
`;
// Footer

export const FooterWrapper = styled.footer`
  border-top: 1px solid currentColor;
  color: ${colorPalette.footerText};
  font-size: 0.75rem;
  padding: 0.75rem 0;
`;

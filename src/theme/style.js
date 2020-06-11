import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import colorPalette from './colorPalette';
import fontPalette from './fontPalette';
import buttonSize from './buttonSize';
import inputSize from './inputSize';
import LogoImage from '../img/LogoImage';

// Parameters
const minFontSizePx = 16;

// Layout parameters
const logoWidth = 0.8;
const maxLogoWidthPx = 700;
const mediaQueryCutoff = maxLogoWidthPx / logoWidth;

// Inline modifier
export const NoWrap = styled.span`
  white-space: nowrap;
`;

const linkTextStyle = css`
  background: ${colorPalette.link.background.hover}; /* Fallback */
  background: linear-gradient(
    to bottom,
    transparent 50%,
    ${colorPalette.link.underline} 50%,
    ${colorPalette.link.underline}
  );
  background-position: 0
    calc(
      0.125em +
        ${fontPalette.fontMetrics.capHeight /
          fontPalette.fontMetrics.unitsPerEm}em
    );
  background-repeat: no-repeat;
  background-size: 100% 1px;
  color: ${colorPalette.link.text.default};
  cursor: pointer;
  text-decoration: none;
  text-shadow: 0.03em 0 ${colorPalette.background},
    -0.03em 0 ${colorPalette.background}, 0 0.03em ${colorPalette.background},
    0 -0.03em ${colorPalette.background}; /* following https://eager.io/blog/smarter-link-underlines/ */

  &:visited {
    background: ${colorPalette.link.background.hoverVisited}; /* fallback */
    background: linear-gradient(
      to bottom,
      transparent 50%,
      ${colorPalette.link.underline} 50%,
      ${colorPalette.link.underline}
    );
    color: ${colorPalette.link.text.visited};
  }

  &:focus,
  &:hover {
    background: ${colorPalette.link.background.hover};
    outline: none;
    text-shadow: none;
    &::before,
    &::after {
      display: none; /* Disable Text Crop */
    }
  }

  &:active {
    background: none; /* To make it blink */
  }

  &:visited:focus,
  &:visited:hover {
    background: ${colorPalette.link.background.hoverVisited};
    outline: none;
    text-shadow: none;
    &::before,
    &::after {
      display: none; /* Disable Text Crop */
    }
  }

  &:visited:active {
    background: none;
  }
`;

export const ExternalLink = styled.a`
  ${linkTextStyle}
`;
export const InternalLink = styled(Link)`
  ${linkTextStyle}
`;

export const Section = styled.section`
  max-width: ${fontPalette.maxWidthInEm}em;
`;

export const SectionTitle = styled.h2`
  font-family: ${fontPalette.fontFamily.sectionTitle};
  font-size: ${fontPalette.fontSize.mobile.sectionTitle}rem;
  font-weight: ${fontPalette.fontWeight.sectionTitle};
  line-height: ${fontPalette.lineHeight.sectionTitle};
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
      .fontSize}px) {
    font-size: ${fontPalette.fontSize.desktop.sectionTitle}rem;
  }
  /* Text Box Cropping parameters */
  &::before,
  &::after {
    content: '';
    display: block;
    height: 0;
    width: 0;
  }
  &::before {
    margin-bottom: -${fontPalette.textCrop.topCap.sectionTitle}em;
  }
  &::after {
    margin-top: -${fontPalette.textCrop.bottom.sectionTitle}em;
  }
`;

export const ParagraphOneRem = styled.p`
  color: ${props =>
    props.errorText ? colorPalette.errorText : 'currentColor'};
  font-weight: ${props =>
    props.errorText ? fontPalette.fontWeight.alertText : 'inherit'};
  font-variant-numeric: oldstyle-nums;
  font-feature-settings: 'calt', 'clig', 'kern', 'liga', 'onum';

  /* Text Box Cropping */
  &::before,
  &::after {
    content: '';
    display: block;
    height: 0;
    width: 0;
  }
  &::before {
    margin-bottom: -${fontPalette.textCrop.topCap.bodyText}em;
  }
  &::after {
    margin-top: -${fontPalette.textCrop.bottom.bodyText}em;
  }
`;

export const AlertMessage = styled(ParagraphOneRem)`
  font-family: ${fontPalette.fontFamily.alertText};
  font-weight: ${fontPalette.fontWeight.alertText};
  visibility: ${props => (props.error ? 'visible' : 'hidden')};
`;

export const ParagraphOneRemRightAligned = styled(ParagraphOneRem)`
  text-align: right;
`;

export const FontFileErrorWrapper = styled.div`
  display: ${props => (props.fontFileError ? 'block' : 'none')};
`;

export const CodeSnippet = styled.pre`
  padding-bottom: ${fontPalette.code.paddingBottom.mobile}rem;
  padding-top: ${fontPalette.code.paddingTop.mobile}rem;
  white-space: pre-wrap; /* https://developer.mozilla.org/en-US/docs/Web/CSS/white-space */
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
      .fontSize}px) {
    padding-bottom: ${fontPalette.code.paddingBottom.desktop}rem;
    padding-top: ${fontPalette.code.paddingTop.desktop}rem;
  }
`;

export const Code = styled.code`
  font-family: ${fontPalette.fontFamily.code};
  font-weight: ${fontPalette.fontWeight.code};
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

export const LinearLight = styled.div`
  background: ${colorPalette.linearLight.backgroundColor};
  box-shadow: 0 0 10px 0 ${colorPalette.linearLight.shadow},
    0 0 20px 0 ${colorPalette.linearLight.shadow},
    0 0 40px 0 ${colorPalette.linearLight.shadow};
  height: 2px;
  width: 100%;
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
  visibility: ${props => (props.topPage ? 'hidden' : 'visible')};
  width: ${props => (props.header ? '20%' : '100%')};
`;

// Header

export const HeaderWrapper = styled(Section)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${fontPalette.xHeight.mobile.rem *
      Math.pow(fontPalette.modularScale, 1)}rem
    0;
  width: 100%;
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff.layout}px) {
    max-width: calc(
      ${fontPalette.width.controlPanel}px + ${fontPalette.maxWidthInEm}em +
        ${fontPalette.marginSide.desktop.first}px
    );
    padding: ${fontPalette.xHeight.desktop.rem *
        Math.pow(fontPalette.modularScale, 2)}rem
      0;
  }
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
export const StepNumberBox = styled.li`
  align-items: center;
  background-color: ${props => props.now && 'currentColor'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 20%;
`;

export const StepNumber = styled.a`
  color: ${props =>
    props.now ? colorPalette.background : colorPalette.bodyText};
  cursor: ${props => (props.done ? 'pointer' : 'default')};
  display: inline-block;
  font-family: ${fontPalette.fontFamily.stepNumber};
  font-size: ${fontPalette.fontSize.mobile.stepNumber}rem;
  font-weight: ${fontPalette.fontWeight.stepNumber};
  line-height: ${fontPalette.lineHeight.stepNumber};
  opacity: ${props =>
    !props.done && !props.now ? colorPalette.disabledText : '1'};
  padding: ${fontPalette.xHeight.mobile.rem}rem 0;
  text-align: center;
  text-decoration: none;
  width: 100%;
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
      .fontSize}px) {
    font-size: ${fontPalette.fontSize.desktop.stepNumber}rem;
    padding: ${fontPalette.xHeight.desktop.rem}rem 0;
  }

  &:focus,
  &:hover {
    background: ${props => props.done && colorPalette.link.background.hover};
    outline: none;
  }

  &:active {
    background: none; /* To make it blink */
  }

  /* Text Box Cropping parameters */
  &::before,
  &::after {
    content: '';
    display: block;
    height: 0;
    width: 0;
  }
  &::before {
    margin-bottom: -${fontPalette.textCrop.topCap.stepNumber}em;
  }
  &::after {
    margin-top: -${fontPalette.textCrop.bottom.stepNumber}em;
  }
`;

// Landing Page

export const DescriptionWrapper = styled.p`
  font-family: ${fontPalette.fontFamily.landingPage};
  font-size: ${fontPalette.fontSize.mobile.landingPage}rem;
  font-weight: ${fontPalette.fontWeight.landingPage};
  margin: 0;
  text-indent: -1px;
  width: 100%;
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
      .fontSize}px) {
    font-size: ${fontPalette.fontSize.desktop.landingPage}rem;
  }
`;

// Font Name display
export const UserDataDisplayWrapper = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  min-height: ${inputSize.height.mobile}px;
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
      .fontSize}px) {
    min-height: ${inputSize.height.desktop}px;
  }
`;
export const UserDataDisplay = styled.p`
  font-family: ${props => props.fontFamily};
  font-size: ${props =>
    (
      (props.unitsPerEm / props.capHeight) *
      fontPalette.fontName.capHeight.mobile
    ).toFixed(4)}rem;
  font-weight: ${props => props.fontWeight};
  line-height: ${fontPalette.fontName.lineHeightRem.mobile.toFixed(4)}rem;
  padding-bottom: ${fontPalette.fontName.paddingBottom.mobile.toFixed(4)}rem;
  padding-top: ${fontPalette.fontName.paddingTop.mobile.toFixed(4)}rem;
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
      .fontSize}px) {
    font-size: ${props =>
      (
        (props.unitsPerEm / props.capHeight) *
        fontPalette.fontName.capHeight.desktop
      ).toFixed(4)}rem;
    line-height: ${fontPalette.fontName.lineHeightRem.desktop.toFixed(4)}rem;
    padding-bottom: ${fontPalette.fontName.paddingBottom.desktop.toFixed(4)}rem;
    padding-top: ${fontPalette.fontName.paddingTop.desktop.toFixed(4)}rem;
  }
  /* Text Box Cropping parameters */
  &::before,
  &::after {
    content: '';
    display: block;
    height: 0;
    width: 0;
  }
  &::before {
    margin-bottom: -${props => ((props.ascender - props.capHeight) / props.capHeight) * fontPalette.fontName.capHeight.mobile}rem;
    @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
        .fontSize}px) {
      margin-bottom: -${props => ((props.ascender - props.capHeight) / props.capHeight) * fontPalette.fontName.capHeight.desktop}rem;
    }
  }
  &::after {
    margin-top: -${props => (-props.descender / props.capHeight) * fontPalette.fontName.capHeight.mobile}rem;
    @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
        .fontSize}px) {
      margin-top: -${props => (-props.descender / props.capHeight) * fontPalette.fontName.capHeight.desktop}rem;
    }
  }
`;

// Buttons

export const ButtonContainer = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  align-items: center; /* For when the as={Link} attribute is added.  */
  background-color: ${colorPalette.button.default};
  border: none;
  border-radius: ${buttonSize.borderRadius.mobile}px;
  box-shadow: -3px 0 3px 0px ${colorPalette.button.shadow},
    0 -3px 3px 0px ${colorPalette.button.shadow},
    3px 0 3px 0 ${colorPalette.button.shadow},
    0 3px 3px 0 ${colorPalette.button.shadow};
  color: inherit;
  cursor: pointer;
  display: flex;
  font-family: ${fontPalette.fontFamily.button};
  font-size: ${buttonSize.fontSize.mobile}rem;
  font-weight: ${fontPalette.fontWeight.button};
  height: ${buttonSize.height.mobile}px;
  justify-content: center;
  position: relative;
  text-decoration: none; /* when the as={Link} attribute is added. */
  width: ${buttonSize.width.mobile}px;

  &:focus,
  &:hover {
    background-color: ${colorPalette.button.focus};
    box-shadow: -6px 0 6px 0px ${colorPalette.button.shadow},
      0 -6px 6px 0px ${colorPalette.button.shadow},
      6px 0 6px 0 ${colorPalette.button.shadow},
      0 6px 6px 0 ${colorPalette.button.shadow};
    outline: none;
  }

  &:active {
    background-color: ${colorPalette.button.focus};
    box-shadow: -1px 0 1px 0px ${colorPalette.button.shadow},
      0 -1px 1px 0px ${colorPalette.button.shadow},
      1px 0 1px 0 ${colorPalette.button.shadow},
      0 1px 1px 0 ${colorPalette.button.shadow};
    outline: none;
  }

  &[disabled] {
    border: 1px solid ${colorPalette.button.shadow};
    box-shadow: none;
    cursor: not-allowed;
    opacity: ${colorPalette.disabledText};
  }

  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
      .fontSize}px) {
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
    @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
        .fontSize}px) {
      right: ${buttonSize.paddingSide.desktop / 2}px;
    }
  }
`;

export const ButtonWithLeftArrow = styled(Button)`
  &::before {
    content: '←';
    position: absolute;
    left: ${buttonSize.paddingSide.mobile / 2}px;
    @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
        .fontSize}px) {
      left: ${buttonSize.paddingSide.desktop / 2}px;
    }
  }
`;

// Forms
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  height: ${inputSize.height.mobile}px;
  position: relative; /* To place XheightInputUnit component */
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
      .fontSize}px) {
    height: ${inputSize.height.desktop}px;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: ${inputSize.labelLeftPx}px;
  top: ${inputSize.labelTopFallbackPx}px; /* Fallback for Opera Mini and IE */
  top: calc(
    ${inputSize.labelTopPx}px - ${inputSize.labelTopOffsetRem.mobile}rem
  );
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
      .fontSize}px) {
    top: calc(
      ${inputSize.labelTopPx}px - ${inputSize.labelTopOffsetRem.desktop}rem
    );
  }
`;

export const Input = styled.input.attrs(props => ({
  autoComplete: 'off',
  type: 'text',
}))`
  background-color: ${colorPalette.background};
  border: 2px solid ${colorPalette.inputField};
  border-radius: 4px;
  color: ${colorPalette.bodyText};
  font-family: ${fontPalette.fontFamily.inputNumber};
  font-size: ${fontPalette.fontSize.mobile.inputNumber}rem;
  font-weight: ${fontPalette.fontWeight.inputNumber};
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

  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
      .fontSize}px) {
    font-size: ${fontPalette.fontSize.desktop.inputNumber}rem;
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
  /* Crop top of text box to x-height, not cap-height */
  &::before {
    margin-bottom: -${fontPalette.textCrop.topX.bodyText}em;
  }
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
  bottom: ${inputSize.suffixBottomPx
    .mobile}px; /* to aligh with input values at the baseline */
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
      .fontSize}px) {
    bottom: ${inputSize.suffixBottomPx.desktop}px;
  }
`;

export const ModularScaleInputWrapper = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  width: 100%;
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

export const FooterWrapper = styled(Section)`
  border-top: 1px solid ${colorPalette.footerText};
  position: ${props => (props.page404 ? 'absolute' : 'inherit')};
  bottom: 0;
  left: 0;
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff.layout}px) {
    max-width: calc(
      ${fontPalette.width.controlPanel}px + ${fontPalette.maxWidthInEm}em +
        ${fontPalette.marginSide.desktop.first}px
    );
  }
`;

export const ParagraphFooter = styled(ParagraphOneRem)`
  color: ${colorPalette.footerText};
  font-family: ${fontPalette.fontFamily.footer};
  font-size: ${fontPalette.fontSize.mobile.footer}rem;
  font-weight: ${fontPalette.fontWeight.footer};
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
      .fontSize}px) {
    font-size: ${fontPalette.fontSize.desktop.footer}rem;
  }
`;

export const FullScreenSpreader = styled.div`
  height: 100vh;
`;

// Layout

export const SideMarginRegulator = styled.div`
  margin: 0 ${fontPalette.marginSide.mobile.first}px;
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff.sideMargin
      .first}px) {
    margin: 0 ${fontPalette.marginSide.mobile.second}px;
  }
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff.sideMargin
      .second}px) {
    margin: 0 ${fontPalette.marginSide.mobile.third}px;
  }
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff.layout}px) {
    margin: 0 ${fontPalette.marginSide.desktop.first}px;
  }
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff.sideMargin
      .third}px) {
    margin: 0 ${fontPalette.marginSide.desktop.second}px;
  }
`;

export const CenterAligner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const MainLandingPage = styled.main`
  @media only screen and (min-width: ${maxLogoWidthPx}px) {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
  }
`;

export const RightAligner = styled.div`
  max-width: ${maxLogoWidthPx}px;
`; // Necessary to left-align the buttons with the logo and the description

export const SpacerVertical = styled.div`
  height: ${props =>
    fontPalette.xHeight.mobile.rem *
    Math.pow(fontPalette.modularScale, props.height)}rem;
  width: auto;
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff
      .fontSize}px) {
    height: ${props =>
      fontPalette.xHeight.desktop.rem *
      Math.pow(fontPalette.modularScale, props.height)}rem;
  }
`;

export const SpacerHorizontal = styled.div`
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff.layout}px) {
    flex: 0 0
      ${props =>
        fontPalette.xHeight.desktop.px *
        Math.pow(fontPalette.modularScale, props.width)}px;
    height: inherit;
    width: ${props =>
      fontPalette.xHeight.desktop.px *
      Math.pow(fontPalette.modularScale, props.width)}px;
  }
`;

export const Flexbox = styled.div`
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff.layout}px) {
    align-items: flex-start; /* To prevent flex-items from stretching (by default) */
    display: flex;
    flex-direction: row;
    padding-top: ${fontPalette.xHeight.desktop.rem *
      Math.pow(fontPalette.modularScale, 3)}rem;
  }
`;

export const MainPanel = styled.div`
  @media only screen and (min-width: 680px) {
  }
`;
export const ControlPanel = styled.div`
  @media only screen and (min-width: ${fontPalette.mediaQueryCutoff.layout}px) {
    background-color: ${colorPalette.controlPanel.background};
    border: 1px solid ${colorPalette.controlPanel.border};
    border-radius: ${colorPalette.controlPanel.borderRadius};
    flex: 0 0 ${fontPalette.width.controlPanel}px;
    padding: 0 ${fontPalette.marginSide.desktop.first}px;
    width: ${fontPalette.width.controlPanel}px;
  }
`;

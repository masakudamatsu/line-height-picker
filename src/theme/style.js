import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import colorPalette from './colorPalette';
import fontPalette from './fontPalette';
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

export const CenterAlignWrapperHorizontal = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  width: 100%;
`;
export const RatioWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const ExternalLink = styled.a`
  color: ${colorPalette.bodyText};
`;

export const InternalLink = styled(Link)`
  color: ${colorPalette.linkText};
`;

const h2FontSize = 3;
export const PageTitle = styled.h2`
  font-size: ${h2FontSize}rem;
  font-weight: ${fontWeight};
`;

export const ParagraphOneRem = styled.p`
  color: ${props =>
    props.errorText ? colorPalette.errorText : 'currentColor'};
  font-size: 1rem;
`;

export const AlertMessage = styled(ParagraphOneRem)`
  visibility: ${props => (props.error ? 'visible' : 'hidden')};
`;

export const ParagraphOneRemRightAligned = styled(ParagraphOneRem)`
  text-align: right;
`;

export const Section = styled.section``;

export const CodeSnippet = styled.pre`
  border: 1px solid ${colorPalette.bodyText};
  padding: 1rem;
`;

export const Code = styled.code`
  font-family: ${fontPalette.code};
  font-size: 1rem;
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
const marginLeft = (1 - logoWidth) / 2;

export const SideMarginRegulator = styled.div`
  margin: 0 ${marginLeft * 100}%;
  max-width: ${maxLogoWidthPx}px;
  width: ${logoWidth * 100}%;
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
  font-size: 2rem;
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

const buttonFontSizeVw = minFontSizePx / minScreenWidthPx;
const buttonFontSizeAboveCutoffPx = mediaQueryCutoff * buttonFontSizeVw;
const buttonWidth = 0.45;
const buttonMaxWidth = maxLogoWidthPx * buttonWidth;
const buttonPaddingTop = buttonWidth * 0.125;
const buttonPaddingLeft = buttonWidth * 0.25;
export const Button = styled.button`
  align-items: center;
  background-color: inherit;
  border: 2px solid currentColor;
  border-radius: 4px;
  color: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: ${buttonFontSizeVw * 100}vw;
  font-weight: bold;
  max-width: ${buttonMaxWidth}px;
  padding: ${buttonPaddingTop * 100}% ${buttonPaddingLeft * 100}%;
  text-decoration: none; /* when the as={Link} attribute is added. */
  text-transform: uppercase;
  width: ${buttonWidth * 100}%;
  @media (min-width: ${mediaQueryCutoff}px) {
    font-size: ${buttonFontSizeAboveCutoffPx}px;
  }
`;

// Forms
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: ${h2FontSize}rem;
  font-weight: ${fontWeight};
  padding: 0 0 3rem 0;
`;

export const Label = styled.label``;
export const NumberInputWrapper = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  padding: 3rem 0 1rem 0;
`;
export const Input = styled.input.attrs(props => ({
  type: 'text',
}))`
  background-color: ${colorPalette.background};
  border: none;
  border-bottom: 2px solid ${colorPalette.bodyText};
  border-radius: 4px 4px 0 0;
  color: ${colorPalette.bodyText};
  font-weight: ${fontWeight};
  font-size: 9rem;
  text-align: center;

  &:active,
  &:hover,
  &:focus {
    background-color: ${colorPalette.disabledText};
    outline: none;
  }
`;
export const NumberInput = styled(Input).attrs(props => ({
  pattern: '[0-9]*[.,]?[0-9]+',
  // to support Opera Mini; see https://css-tricks.com/form-validation-part-1-constraint-validation-html/
  type: 'number',
}))`
  /* Remove the arrows */
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const XheightInput = styled(NumberInput)`
  padding: 1rem;
  width: 90%;
`;

export const ModularScaleInput = styled(NumberInput)`
  width: 100%;
`;

export const SampleParagraphWrapper = styled.section`
  border: 1px solid ${colorPalette.bodyText};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  padding: 1rem;
  margin: 2rem 0 0.5rem 0;
  p:not(:first-child) {
    margin: ${props => props.marginTop || '16'}px 0 0 0;
  }
`;

// Footer

export const FooterWrapper = styled.footer`
  border-top: 1px solid currentColor;
  color: ${colorPalette.footerText};
  font-size: 0.75rem;
  padding: 0.75rem 0;
`;

import styled from 'styled-components';
import {Link} from 'react-router-dom';
import LogoImage from '../components/LogoImage';

// Parameters
const minScreenWidthPx = 320;
const minFontSizePx = 16;

// Typography
const fontWeight = 200;

// Color
const footerTextColor = 'hsl(0, 0%, 67%)';
const greyedOut = 'hsl(0, 0%, 35%)';

// Inline modifier
export const NoWrap = styled.span`
  white-space: nowrap;
`;

export const ExternalLink = styled.a`
  color: hsl(0, 0%, 96%);
`;

export const InternalLink = styled(Link)`
  color: hsl(192, 90%, 50%);
`;

export const ParagraphOneRem = styled.p`
  font-size: 1rem;
`;

export const HiddenH1 = styled.h1`
  height: 1px;
  left: -10000px;
  overflow: hidden;
  position: absolute;
  top: auto;
  width: 1px;
  /* Hide the h1 element except for the screen reader. For detail, see https://webaim.org/techniques/css/invisiblecontent/ */
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

export const StepNumber = styled.span`
  color: ${props => (props.done ? 'currentColor' : greyedOut)};
  font-size: ${(minFontSizePx / minScreenWidthPx) * 100}vw;
  @media (min-width: ${mediaQueryCutoff}px) {
    font-size: ${mediaQueryCutoff * (minFontSizePx / minScreenWidthPx)}px;
  }
`;

const numberBoxWidth = 0.1;
export const StepNumberBox = styled.div`
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

export const StepIndicator = styled.div`
  aling-items: center;
  border-bottom: 1px solid currentColor;
  border-top: 1px solid currentColor;
  display: flex;
  justify-content: space-between;
  width: 70%;
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
  font-size: 3rem;
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
export const NumberInput = styled.input.attrs(props => ({
  step: 0.0001,
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

  background-color: hsl(0, 0%, 25%);
  border: none;
  border-bottom: 2px solid hsl(0, 0%, 96%);
  border-radius: 4px 4px 0 0;
  color: hsl(0, 0%, 96%);
  font-weight: ${fontWeight};
  font-size: 9rem;
  text-align: center;

  &:active,
  &:hover,
  &:focus {
    background-color: hsl(0, 0%, 35%);
    outline: none;
  }
`;

export const XheightInput = styled(NumberInput)`
  padding: 1rem;
  width: 90%;
`;

// Footer

export const FooterWrapper = styled.footer`
  border-top: 1px solid currentColor;
  color: ${footerTextColor};
  font-size: 0.75rem;
  padding: 0.75rem 0;
`;

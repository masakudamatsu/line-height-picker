import styled from 'styled-components';
import {Link} from 'react-router-dom';
import LogoImage from '../components/LogoImage';

// Parameters
const minScreenWidthPx = 320;
const minFontSizePx = 16;

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
  font-weight: 200;
  margin: 0;
  text-indent: -1px;
  width: 100%;
  @media (min-width: ${mediaQueryCutoff}px) {
    font-size: ${descriptionFontSize}rem;
  }
`;

// Buttons

export const ButtonContainer = styled.div`
  display: flex;
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

// Footer

export const FooterWrapper = styled.footer`
  border-top: 1px solid currentColor;
  color: ${footerTextColor};
  font-size: 0.75rem;
  padding: 0.75rem 0;
`;

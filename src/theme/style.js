import styled from 'styled-components';

export const NoWrap = styled.span`
  white-space: nowrap;
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

// SVG logo CSS values
const logoWidth = 0.8;
const maxLogoWidthPx = 700;
const mediaQueryCutoff = maxLogoWidthPx / logoWidth;
const marginLeft = (1 - logoWidth) / 2;

// Calculate the Logo's margin-top property vaue
const scale = 1.5;
const verticalSpacePx = 42; // a space between the two lines when the logo width is 700px.
const logoMarginTopAboveCutoffPx = verticalSpacePx * scale;
const logoMarginTopBelowCutoff = logoMarginTopAboveCutoffPx / mediaQueryCutoff;

export const LogoWrapper = styled.svg`
  display: block;
  fill: currentColor;
  height: auto;
  margin: ${logoMarginTopBelowCutoff * 100}% ${marginLeft * 100}%;
  max-width: ${maxLogoWidthPx}px;
  width: ${logoWidth * 100}%;
  @media (min-width: ${mediaQueryCutoff}px) {
    margin: ${logoMarginTopAboveCutoffPx}px auto;
  }
`;

// Font-size for description
const descriptionFontSize = 2.5;
const descriptionFontSizeBelowCutoff =
  (16 * descriptionFontSize) / mediaQueryCutoff;

export const DescriptionWrapper = styled.p`
  font-size: ${descriptionFontSizeBelowCutoff * 100}vw;
  font-weight: 200;
  margin: 0 ${marginLeft * 100}%;
  text-indent: -1px;
  @media (min-width: ${mediaQueryCutoff}px) {
    font-size: ${descriptionFontSize}rem;
    margin-left: auto;
    margin-right: auto;
    width: ${maxLogoWidthPx}px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${logoMarginTopBelowCutoff * 100}% ${marginLeft * 100}%;
  max-width: ${maxLogoWidthPx}px;
  width: ${logoWidth * 100}%;
  @media (min-width: ${mediaQueryCutoff}px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const buttonFontSizeVw = 16 / 320;
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
  text-transform: uppercase;
  width: ${buttonWidth * 100}%;
  @media (min-width: ${mediaQueryCutoff}px) {
    font-size: ${buttonFontSizeAboveCutoffPx}px;
  }
`;

import styled from 'styled-components';

export const HiddenH1 = styled.h1`
  height: 1px;
  left: -10000px;
  overflow: hidden;
  position: absolute;
  top: auto;
  width: 1px;
  /* Hide the h1 element except for the screen reader. For detail, see https://webaim.org/techniques/css/invisiblecontent/ */
`;

// Calculate the Logo's margin-top property vaue
const svgWidth = 389;
const svgVerticalSpace = 24; // Space between the 1st line's baseline and the second line's ascender
const logoWidth = 0.8;
const screenWidth = svgWidth / logoWidth;
const logoMarginTop = svgVerticalSpace / screenWidth;

export const LogoWrapper = styled.svg`
  display: block;
  fill: currentColor;
  height: auto;
  margin: ${logoMarginTop * 100}% auto;
  max-width: 700px;
  width: ${logoWidth * 100}%;
`;

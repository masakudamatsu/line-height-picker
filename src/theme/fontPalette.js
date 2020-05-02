import {
  getFontSize,
} from '../helper/cssGenerators';

// # of pixels for 1rem
const oneRemPx = 16;

// Font metrics
const fontMetricsFedraSans = {
  unitsPerEm: 1000, // Contact with designer himself
  xHeight: 546, // Contact with designer himself
  capHeight: 708, // My own investigation. 707.5 to be exact
};

// Set x-height and modular scale
const xHeightPx = {
  mobile: 18 * (10 / 21), // Medium.com
  desktop: 10, // Medium.com and Dev.to
};
const xHeightRatio = 1;
const lineHeightRatio = {
  paragraph: 3,
};

// Calculate CSS font property values for paragraph text
const fontSize = xHeightPx => {
  const fontSizeInPx = getFontSize(fontMetricsFedraSans, xHeightPx);
  return fontSizeInPx / oneRemPx;
};

// Font CSS property value
const fontPalette = {
  bodyText: {
    fontFamily:
      "'Fedra Sans Alt',  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: {
      mobile: fontSize(xHeightPx.mobile),
      desktop: fontSize(xHeightPx.desktop),
  },
    fontWeight: 300,
  buttonLabel: {
    fontFamily:
      "'Fedra Sans Alt',  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontWeight: 500,
  },
  code: {
    fontFamily: "'Fedra Mono', monospace",
    fontWeight: 400,
  },
  fontMetrics: fontMetricsFedraSans,
  largeText: {
    fontSize: {
      mobile: fontSize(xHeightPx.mobile) * 4,
      desktop: fontSize(xHeightPx.desktop) * 4,
    },
  },
  marginSide: xHeightPx.mobile * (lineHeightRatio.paragraph - xHeightRatio),
  mediaQueryCutoff: '1024px', // common threshold between tablets and laptops
  paragraph: {
    fontFamily:
      "'Fedra Sans 2',  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontWeight: 400,
  },
  rem: oneRemPx,
  },
  xHeight: xHeightPx,
};

export default fontPalette;

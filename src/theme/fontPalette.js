import {
  getFontSize,
} from '../helper/cssGenerators';

// # of pixels for 1rem
const oneRemPx = 16;

// Font metrics
const fontMetricsFedraSans = {
  unitsPerEm: 1000, // Contact with designer himself
  xHeight: 546, // Contact with designer himself
};

// Set x-height and modular scale
const xHeightPx = {
  mobile: 18 * (10 / 21), // Medium.com
  desktop: 10, // Medium.com and Dev.to
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
      "'Fedra Sans Alt Light',  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: {
      mobile: fontSize(xHeightPx.mobile),
      desktop: fontSize(xHeightPx.desktop),
  },
  code: {
    fontFamily: "'Fedra Mono Book', monospace",
  },
  largeText: {
    fontSize: {
      mobile: fontSize(xHeightPx.mobile) * 4,
      desktop: fontSize(xHeightPx.desktop) * 4,
    },
  },
  mediaQueryCutoff: '1024px', // common threshold between tablets and laptops
  paragraph: {
    fontFamily:
      "'Fedra Sans Book 2',  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  },
};

export default fontPalette;

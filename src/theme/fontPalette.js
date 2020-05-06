import {
  getFontSize,
  getLineHeight,
  getMarginTop,
} from '../helper/cssGenerators';

// # of pixels for 1rem
const oneRemPx = 16;

// Font metrics
const fontMetricsFedraSans = {
  unitsPerEm: 1000, // Contact with designer himself
  xHeight: 546, // Contact with designer himself
  capHeight: 708, // My own investigation. 707.5 to be exact
  ascender: 780, // My own investigation
  descender: 220, // My own investigation
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

const lineHeight = {
  paragraph: getLineHeight(
    fontMetricsFedraSans,
    xHeightPx.desktop,
    xHeightRatio,
    lineHeightRatio.paragraph,
  ),
};

const getLineHeightInRem = xHeight => {
  const fontSizeInRem = fontSize(xHeight);
  return fontSizeInRem * lineHeight.paragraph;
};

const marginTop = xHeightPx => {
  const marginTopPx = getMarginTop(
    fontMetricsFedraSans,
    xHeightPx,
    xHeightRatio,
    lineHeightRatio.paragraph,
  );
  return marginTopPx / oneRemPx;
};

// Line-spacing below boxes
const getLineSpacingBelowBoxInRem = xHeightPx => {
  const fontSizeInRem = fontSize(xHeightPx);
  const targetHeightInPx = xHeightPx;
  const textBoxTopToLowercaseTop =
    (fontMetricsFedraSans.ascender - fontMetricsFedraSans.xHeight) /
    fontMetricsFedraSans.unitsPerEm;
  return targetHeightInPx / oneRemPx - fontSizeInRem * textBoxTopToLowercaseTop;
};

// Input number font size
const mapCapHeightToFontSize = capHeight => {
  const fontSizeInPx =
    capHeight *
    (fontMetricsFedraSans.unitsPerEm / fontMetricsFedraSans.capHeight);
  return fontSizeInPx / oneRemPx;
};

// Section title bottom padding
const getBottomPaddingInRem = (targetInPx, fontSizeInRem) => {
  const targetInRem = targetInPx / oneRemPx;
  const descenderToFontSizeRatio =
    fontMetricsFedraSans.descender / fontMetricsFedraSans.unitsPerEm;
  const descenderInRem = descenderToFontSizeRatio * fontSizeInRem;
  return targetInRem - descenderInRem;
};

const getTextBoxTopToCapTopInRem = xHeight => {
  const textBoxTopToCapTopInXHeight =
    (fontMetricsFedraSans.ascender - fontMetricsFedraSans.capHeight) /
    fontMetricsFedraSans.xHeight;
  return (xHeight * textBoxTopToCapTopInXHeight) / oneRemPx;
};

// Distance from baseline to the text box bottom
const getBaselineToTextBoxBottomInRem = xHeight => {
  const fontSizeInRem = fontSize(xHeight);
  const descenderToFontSizeRatio =
    fontMetricsFedraSans.descender / fontMetricsFedraSans.unitsPerEm;
  const extraSpaceByLineHeight = (getLineHeightInRem(xHeight) - 1) / 2;
  return fontSizeInRem * descenderToFontSizeRatio + extraSpaceByLineHeight;
};

// Font CSS property value
const fontPalette = {
  alertText: {
    fontWeight: 500,
    paddingBottom: {
      mobile: getBottomPaddingInRem(
        xHeightPx.mobile * (lineHeightRatio.paragraph - xHeightRatio),
        fontSize(xHeightPx.mobile),
      ),
      desktop: getBottomPaddingInRem(
        xHeightPx.desktop * (lineHeightRatio.paragraph - xHeightRatio),
        fontSize(xHeightPx.desktop),
      ),
    },
  },
  bodyText: {
    fontFamily:
      "'Fedra Sans Alt',  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: {
      mobile: fontSize(xHeightPx.mobile),
      desktop: fontSize(xHeightPx.desktop),
    },
    fontWeight: 300,
    lineHeight: lineHeight.paragraph,
    marginTop: {
      mobile: marginTop(xHeightPx.mobile),
      desktop: marginTop(xHeightPx.desktop),
    },
    paddingBottomAboveBox: {
      mobile: getBottomPaddingInRem(
        xHeightPx.mobile,
        fontSize(xHeightPx.mobile),
      ),
      desktop: getBottomPaddingInRem(
        xHeightPx.desktop,
        fontSize(xHeightPx.desktop),
      ),
    },
  },
  button: {
    fontFamily:
      "'Fedra Sans Alt',  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontWeight: 500,
    marginTop: {
      belowBox: {
        mobile: (xHeightPx.mobile * 2) / oneRemPx,
        desktop: (xHeightPx.desktop * 2) / oneRemPx,
      },
      belowBodyText: {
        mobile:
          (xHeightPx.mobile * 2) / oneRemPx -
          getBaselineToTextBoxBottomInRem(xHeightPx.mobile),
        desktop:
          (xHeightPx.desktop * 2) / oneRemPx -
          getBaselineToTextBoxBottomInRem(xHeightPx.desktop),
      },
    },
  },
  code: {
    fontFamily: "'Fedra Mono', monospace",
    fontWeight: 400,
    paddingBottom: {
      mobile: getLineHeightInRem(xHeightPx.mobile),
      desktop: getLineHeightInRem(xHeightPx.desktop),
    },
    paddingTop: {
      mobile: getLineHeightInRem(xHeightPx.mobile),
      desktop: getLineHeightInRem(xHeightPx.desktop),
    },
  },
  fontMetrics: fontMetricsFedraSans,
  inputNumber: {
    fontSize: {
      mobile: mapCapHeightToFontSize(xHeightPx.mobile * 2.5),
      desktop: mapCapHeightToFontSize(xHeightPx.desktop * 2.5),
    },
    paddingSide: 1,
    pxBottom: {
      // Derived visually to align at the baseline
      mobile: 31,
      desktop: 31 * (xHeightPx.desktop / xHeightPx.mobile) - 2,
    },
  },
  largeText: {
    fontSize: {
      mobile: fontSize(xHeightPx.mobile) * 4,
      desktop: fontSize(xHeightPx.desktop) * 4,
    },
    fontWeight: 300,
  },
  lineSpacingBelowBox: {
    mobile: getLineSpacingBelowBoxInRem(xHeightPx.mobile),
    desktop: getLineSpacingBelowBoxInRem(xHeightPx.desktop),
  },
  lineSpacingBelowInstruction: {
    mobile: getLineSpacingBelowBoxInRem(xHeightPx.mobile * 2),
    desktop: getLineSpacingBelowBoxInRem(xHeightPx.desktop * 2),
  },
  marginSide: xHeightPx.mobile * (lineHeightRatio.paragraph - xHeightRatio),
  mediaQueryCutoff: '1024px', // common threshold between tablets and laptops
  rem: oneRemPx,
  sectionTitle: {
    fontSize: {
      mobile: mapCapHeightToFontSize(xHeightPx.mobile * 2),
      desktop: mapCapHeightToFontSize(xHeightPx.desktop * 2),
    },
    fontWeight: 300,
    lineHeight: 1,
    paddingBottom: {
      mobile: getBottomPaddingInRem(
        xHeightPx.mobile * 2,
        mapCapHeightToFontSize(xHeightPx.mobile * 2),
      ),
      desktop: getBottomPaddingInRem(
        xHeightPx.desktop * 2,
        mapCapHeightToFontSize(xHeightPx.desktop * 2),
      ),
    },
    paddingBottomAboveBodyText: {
      mobile:
        getBottomPaddingInRem(
          xHeightPx.mobile * 2,
          mapCapHeightToFontSize(xHeightPx.mobile * 2),
        ) - getTextBoxTopToCapTopInRem(xHeightPx.mobile),
      desktop:
        getBottomPaddingInRem(
          xHeightPx.desktop * 2,
          mapCapHeightToFontSize(xHeightPx.desktop * 2),
        ) - getTextBoxTopToCapTopInRem(xHeightPx.desktop),
    },
  },
  xHeight: xHeightPx,
};

export default fontPalette;

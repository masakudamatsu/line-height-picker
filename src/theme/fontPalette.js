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
const modularScale = 1.5;

// Calculate CSS font property values for paragraph text
const fontSize = xHeightPx => {
  const fontSizeInPx = getFontSize(fontMetricsFedraSans, xHeightPx);
  return fontSizeInPx / oneRemPx;
};

// Font size for section titles
const sectionTitleXHeightPx = {
  mobile: xHeightPx.mobile * modularScale,
  desktop: xHeightPx.desktop * modularScale,
};

// Line-height
const xHeightRatio = 1;
const lineHeightRatio = {
  paragraph: xHeightRatio * (1 + modularScale),
};
const lineHeight = {
  paragraph: getLineHeight(
    fontMetricsFedraSans,
    xHeightPx.desktop,
    xHeightRatio,
    lineHeightRatio.paragraph,
  ),
  sectionTitle: 1, // Temporarily
};
const getLineHeightInRem = (xHeightInPx, lineHeight) => {
  const fontSizeInRem = fontSize(xHeightInPx);
  return fontSizeInRem * lineHeight;
};

// Text box cropping parameters
const getTextBoxTopToCapTopInRem = (xHeightInPx, lineHeight) => {
  const textBoxTopToCapTopInXHeight =
    (fontMetricsFedraSans.ascender - fontMetricsFedraSans.capHeight) /
    fontMetricsFedraSans.xHeight;
  const extraSpaceByLineHeight = getLineHeightInRem(
    xHeightInPx,
    (lineHeight - 1) / 2,
  );
  return (
    (xHeightInPx * textBoxTopToCapTopInXHeight) / oneRemPx +
    extraSpaceByLineHeight
  );
};

const getTextBoxTopToXTopInRem = (xHeightInPx, lineHeight) => {
  const textBoxTopToXTopInXHeight =
    (fontMetricsFedraSans.ascender - fontMetricsFedraSans.xHeight) /
    fontMetricsFedraSans.xHeight;
  const extraSpaceByLineHeight = getLineHeightInRem(
    xHeightInPx,
    (lineHeight - 1) / 2,
  );
  return (
    (xHeightInPx * textBoxTopToXTopInXHeight) / oneRemPx +
    extraSpaceByLineHeight
  );
};

const marginTop = xHeightInPx => {
  const marginTopPx = getMarginTop(
    fontMetricsFedraSans,
    xHeightInPx,
    xHeightRatio,
    lineHeightRatio.paragraph,
  );
  return marginTopPx / oneRemPx;
};

// Distance from baseline to the text box bottom
const getBaselineToTextBoxBottomInRem = (xHeightInPx, lineHeight) => {
  const descenderToXHeightRatio =
    fontMetricsFedraSans.descender / fontMetricsFedraSans.xHeight;
  const extraSpaceByLineHeight = getLineHeightInRem(
    xHeightInPx,
    (lineHeight - 1) / 2,
  );
  return (
    (xHeightInPx * descenderToXHeightRatio) / oneRemPx + extraSpaceByLineHeight
  );
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
    cropBottom: {
      mobile: getBaselineToTextBoxBottomInRem(
        xHeightPx.mobile,
        lineHeight.paragraph,
      ),
      desktop: getBaselineToTextBoxBottomInRem(
        xHeightPx.desktop,
        lineHeight.paragraph,
      ),
    },
    cropTopCap: {
      mobile: getTextBoxTopToCapTopInRem(
        xHeightPx.mobile,
        lineHeight.paragraph,
      ),
      desktop: getTextBoxTopToCapTopInRem(
        xHeightPx.desktop,
        lineHeight.paragraph,
      ),
    },
    cropTopX: {
      mobile: getTextBoxTopToXTopInRem(xHeightPx.mobile, lineHeight.paragraph),
      desktop: getTextBoxTopToXTopInRem(
        xHeightPx.desktop,
        lineHeight.paragraph,
      ),
    },
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
          getBaselineToTextBoxBottomInRem(
            xHeightPx.mobile,
            lineHeight.paragraph,
          ),
        desktop:
          (xHeightPx.desktop * 2) / oneRemPx -
          getBaselineToTextBoxBottomInRem(
            xHeightPx.desktop,
            lineHeight.paragraph,
          ),
      },
    },
  },
  code: {
    fontFamily: "'Fedra Mono', monospace",
    fontWeight: 400,
    paddingBottom: {
      mobile: getLineHeightInRem(xHeightPx.mobile, lineHeight.paragraph),
      desktop: getLineHeightInRem(xHeightPx.desktop, lineHeight.paragraph),
    },
    paddingTop: {
      mobile: getLineHeightInRem(xHeightPx.mobile, lineHeight.paragraph),
      desktop: getLineHeightInRem(xHeightPx.desktop, lineHeight.paragraph),
    },
  },
  fontMetrics: fontMetricsFedraSans,
  inputNumber: {
    fontSize: {
      mobile: mapCapHeightToFontSize(
        xHeightPx.mobile * Math.pow(modularScale, 3),
      ),
      desktop: mapCapHeightToFontSize(
        xHeightPx.desktop * Math.pow(modularScale, 3),
      ),
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
  modularScale: modularScale,
  rem: oneRemPx,
  sectionTitle: {
    cropBottom: {
      mobile: getBaselineToTextBoxBottomInRem(
        sectionTitleXHeightPx.mobile,
        lineHeight.sectionTitle,
      ),
      desktop: getBaselineToTextBoxBottomInRem(
        sectionTitleXHeightPx.desktop,
        lineHeight.sectionTitle,
      ),
    },
    cropTopCap: {
      mobile: getTextBoxTopToCapTopInRem(
        sectionTitleXHeightPx.mobile,
        lineHeight.sectionTitle,
      ),
      desktop: getTextBoxTopToCapTopInRem(
        sectionTitleXHeightPx.desktop,
        lineHeight.sectionTitle,
      ),
    },
    fontSize: {
      mobile: fontSize(sectionTitleXHeightPx.mobile),
      desktop: fontSize(sectionTitleXHeightPx.desktop),
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
        ) -
        getTextBoxTopToCapTopInRem(xHeightPx.mobile, lineHeight.sectionTitle),
      desktop:
        getBottomPaddingInRem(
          xHeightPx.desktop * 2,
          mapCapHeightToFontSize(xHeightPx.desktop * 2),
        ) -
        getTextBoxTopToCapTopInRem(xHeightPx.desktop, lineHeight.sectionTitle),
    },
  },
  xHeight: xHeightPx,
};

export default fontPalette;

import {getFontSize} from '../helper/cssGenerators';

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

// Font-size in rem as a function of x-height in px
const getFontSizeRemFromXHeightPx = xHeightPx => {
  const fontSizePx = getFontSize(fontMetricsFedraSans, xHeightPx);
  return fontSizePx / oneRemPx;
};

// Font-size in rem as a function of cap-height in px
const getFontSizeRemFromCapHeightPx = capHeightPx => {
  const fontSizePx =
    capHeightPx *
    (fontMetricsFedraSans.unitsPerEm / fontMetricsFedraSans.capHeight);
  return fontSizePx / oneRemPx;
};

// Set x-height and modular scale
const xHeightPx = {
  mobile: 18 * (10 / 21), // Medium.com
  desktop: 10, // Medium.com and Dev.to
};
const modularScale = 1.5;

// X-height for section titles
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
  paragraph:
    (xHeightPx.desktop * (1 + modularScale)) /
    getFontSize(fontMetricsFedraSans, xHeightPx.desktop),
};
lineHeight.sectionTitle =
  (xHeightPx.desktop * modularScale * 2) /
  getFontSize(
    fontMetricsFedraSans,
    xHeightPx.desktop * Math.pow(modularScale, 1),
  );

const getLineHeightInRem = (xHeightInPx, lineHeight) => {
  const fontSizeInRem = getFontSizeRemFromXHeightPx(xHeightInPx);
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

// Font name
const fontNameCapHeight = xHeightInPx => {
  return (xHeightInPx * Math.pow(modularScale, 3)) / oneRemPx;
};
const fontNameLineHeightInRem = {
  mobile: 2 * getLineHeightInRem(xHeightPx.mobile, lineHeight.paragraph),
  desktop: 2 * getLineHeightInRem(xHeightPx.desktop, lineHeight.paragraph),
};
const fontNamePaddingInRem = {
  mobile:
    (fontNameLineHeightInRem.mobile - fontNameCapHeight(xHeightPx.mobile)) *
    modularScale,
  desktop:
    (fontNameLineHeightInRem.desktop - fontNameCapHeight(xHeightPx.desktop)) *
    modularScale,
};

// Font CSS property value
const fontPalette = {
  fontFamily: {
    alertText:
      "'Fedra Sans 3',  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    bodyText:
      "'Fedra Sans 3',  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    button:
      "'Fedra Sans Alt 2',  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    code: "'Fedra Mono 2', monospace",
    footer:
      "'Fedra Sans 3',  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    inputNumber: "'Fedra Mono 2', monospace",
    landingPage:
      "'Fedra Sans Alt 2',  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    sectionTitle:
      "'Fedra Sans Alt 2',  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    stepNumber: "'Fedra Mono 2', monospace",
  },
  fontSize: {
    mobile: {
      alertText: getFontSizeRemFromXHeightPx(xHeightPx.mobile),
      bodyText: getFontSizeRemFromXHeightPx(xHeightPx.mobile),
      footer: getFontSizeRemFromXHeightPx(
        xHeightPx.mobile * Math.pow(modularScale, -1),
      ),
      inputNumber: getFontSizeRemFromCapHeightPx(
        xHeightPx.mobile * Math.pow(modularScale, 3),
      ),
      landingPage: getFontSizeRemFromXHeightPx(
        xHeightPx.mobile * Math.pow(modularScale, 1),
      ),
      sectionTitle: getFontSizeRemFromXHeightPx(
        xHeightPx.mobile * Math.pow(modularScale, 1),
      ),
      stepNumber: getFontSizeRemFromCapHeightPx(
        xHeightPx.mobile * Math.pow(modularScale, 1),
      ),
    },
    desktop: {
      alertText: getFontSizeRemFromXHeightPx(xHeightPx.desktop),
      bodyText: getFontSizeRemFromXHeightPx(xHeightPx.desktop),
      inputNumber: getFontSizeRemFromCapHeightPx(
        xHeightPx.desktop * Math.pow(modularScale, 3),
      ),
      landingPage: getFontSizeRemFromXHeightPx(
        xHeightPx.desktop * Math.pow(modularScale, 1),
      ),
      sectionTitle: getFontSizeRemFromXHeightPx(
        xHeightPx.desktop * Math.pow(modularScale, 1),
      ),
      stepNumber: getFontSizeRemFromCapHeightPx(
        xHeightPx.desktop * Math.pow(modularScale, 1),
      ),
    },
  },
  fontWeight: {
    alertText: 300,
    bodyText: 300,
    button: 500,
    code: 300,
    footer: 300,
    inputNumber: 300,
    landingPage: 300,
    sectionTitle: 300,
    stepNumber: 300,
  },
  lineHeight: {
    bodyText: lineHeight.paragraph,
    sectionTitle: lineHeight.sectionTitle,
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
  },
  code: {
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
  fontName: {
    capHeight: {
      mobile: fontNameCapHeight(xHeightPx.mobile),
      desktop: fontNameCapHeight(xHeightPx.desktop),
    },
    lineHeight: fontNameLineHeightInRem,
    padding: fontNamePaddingInRem,
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
  },
  stepNumber: {
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
  },
  xHeight: xHeightPx,
};

export default fontPalette;

// # of pixels for 1rem
const oneRemPx = 16;

// Font metrics
const fontMetricsFedraSans = {
  unitsPerEm: 1000, // Contact with designer himself
  xHeight: 546, // Contact with designer himself
  capHeight: 707, // Contact with designer himself
  ascender: 780, // My own investigation, confirmed by the designer as sTypoAscender
  descender: 220, // My own investigation, confirmed by the designer as sTypoDescender
};

// Set x-height and modular scale
const xHeightPx = {
  mobile: 18 * (10 / 21), // Medium.com
  desktop: 10, // Medium.com and Dev.to
};
const modularScale = 1.5;

// Minimum screen width
const minScreenWidthPx = {
  mobile: 320,
  desktop: 320 * (xHeightPx.desktop / xHeightPx.mobile),
};

// font-size scale, all in rem

const xHeightRem = {
  mobile: {bodyText: xHeightPx.mobile / oneRemPx},
  desktop: {bodyText: xHeightPx.desktop / oneRemPx},
};

xHeightRem.mobile.footer =
  xHeightRem.mobile.bodyText * Math.pow(modularScale, -1);
xHeightRem.desktop.footer =
  xHeightRem.desktop.bodyText * Math.pow(modularScale, -1);

xHeightRem.mobile.sectionTitle =
  xHeightRem.mobile.bodyText * Math.pow(modularScale, 1);
xHeightRem.desktop.sectionTitle =
  xHeightRem.desktop.bodyText * Math.pow(modularScale, 1);

xHeightRem.mobile.landingPage =
  xHeightRem.mobile.bodyText * Math.pow(modularScale, 1);
xHeightRem.desktop.landingPage =
  xHeightRem.desktop.bodyText * Math.pow(modularScale, 1);

const getFontSizeFromXHeight = xHeightRem => {
  return (
    xHeightRem *
    (fontMetricsFedraSans.unitsPerEm / fontMetricsFedraSans.xHeight)
  );
};

const capHeightRem = {
  mobile: {
    fontName: xHeightRem.mobile.bodyText * Math.pow(modularScale, 3),
    inputNumber: xHeightRem.mobile.bodyText * Math.pow(modularScale, 3),
    stepNumber: xHeightRem.mobile.bodyText * Math.pow(modularScale, 1),
  },
  desktop: {
    fontName: xHeightRem.desktop.bodyText * Math.pow(modularScale, 3),
    inputNumber: xHeightRem.desktop.bodyText * Math.pow(modularScale, 3),
    stepNumber: xHeightRem.desktop.bodyText * Math.pow(modularScale, 1),
  },
};

const getFontSizeFromCapHeight = capHeightRem => {
  return (
    capHeightRem *
    (fontMetricsFedraSans.unitsPerEm / fontMetricsFedraSans.capHeight)
  );
};

// line-height

const lineHeightRem = {
  bodyText: {
    mobile: xHeightRem.mobile.bodyText * (1 + modularScale),
    desktop: xHeightRem.desktop.bodyText * (1 + modularScale),
  },
  sectionTitle: {
    mobile: xHeightRem.mobile.bodyText * (modularScale * 2),
    desktop: xHeightRem.desktop.bodyText * (modularScale * 2),
  },
  stepNumber: {
    mobile: getFontSizeFromCapHeight(capHeightRem.mobile.stepNumber),
    desktop: getFontSizeFromCapHeight(capHeightRem.desktop.stepNumber),
  },
};

lineHeightRem.code = lineHeightRem.bodyText;
lineHeightRem.fontName = {
  mobile: lineHeightRem.bodyText.mobile * 2,
  desktop: lineHeightRem.bodyText.desktop * 2,
};

const lineHeightCss = {
  bodyText:
    lineHeightRem.bodyText.desktop /
    getFontSizeFromXHeight(xHeightRem.desktop.bodyText),
  sectionTitle:
    lineHeightRem.sectionTitle.desktop /
    getFontSizeFromXHeight(xHeightRem.desktop.sectionTitle),
  stepNumber:
    lineHeightRem.stepNumber.desktop /
    getFontSizeFromCapHeight(capHeightRem.desktop.stepNumber),
};
const getTextCropBottom = lineHeightCss => {
  return (
    fontMetricsFedraSans.descender / fontMetricsFedraSans.unitsPerEm +
    (lineHeightCss - 1) / 2
  ).toFixed(4);
};

const getTextCropTopCap = lineHeightCss => {
  return (
    (fontMetricsFedraSans.ascender - fontMetricsFedraSans.capHeight) /
      fontMetricsFedraSans.unitsPerEm +
    (lineHeightCss - 1) / 2
  ).toFixed(4);
};

const getTextCropTopX = lineHeightCss => {
  return (
    (fontMetricsFedraSans.ascender - fontMetricsFedraSans.xHeight) /
      fontMetricsFedraSans.unitsPerEm +
    (lineHeightCss - 1) / 2
  ).toFixed(4);
};

// Side margins
const sideMarginMobile = {
  first: xHeightPx.mobile * Math.pow(modularScale, 1), // space between lines
  second: xHeightPx.mobile * Math.pow(modularScale, 2), // space between paragraphs
  third: xHeightPx.mobile * Math.pow(modularScale, 3),
};
const sideMarginDesktop = {
  first: xHeightPx.desktop * Math.pow(modularScale, 2), // space between lines
  second: xHeightPx.desktop * Math.pow(modularScale, 3), // space between paragraphs
};

// max width
const maxWidthInEm = 33;

// Control panel width for wide screens
const controlPanelWidth =
  (minScreenWidthPx.mobile - sideMarginMobile.first * 2) *
    (xHeightPx.desktop / xHeightPx.mobile) +
  sideMarginDesktop.first * 2;

// Breakpoint for font-size
const breakpointFontSize = 728;

// Breakpoints for side margin
const breakpointSideMargin = {
  first: minScreenWidthPx.mobile * Math.pow(modularScale, 1), // 480
  second: minScreenWidthPx.mobile * Math.pow(modularScale, 2), // 720
  third: minScreenWidthPx.mobile * Math.pow(modularScale, 3), // 1080
};

// Breakpoint for layout
const breakpointLayout = (
  controlPanelWidth * 2 +
  sideMarginDesktop.first
).toFixed(0);

// Alert Icon
const alertIconPx = {
  boxSize: 24,
  height: 18,
  width: 20,
  marginTop: 2,
  marginBottom: 4,
  marginSide: 2,
};
const capHeightEm =
  fontMetricsFedraSans.capHeight / fontMetricsFedraSans.unitsPerEm;

const alertIconEm = {
  boxSize: (capHeightEm / alertIconPx.height) * alertIconPx.boxSize,
};

alertIconEm.marginLeft =
  (alertIconEm.boxSize / alertIconPx.boxSize) * alertIconPx.marginSide * -1;

alertIconEm.marginTop =
  (alertIconEm.boxSize / alertIconPx.boxSize) * alertIconPx.marginTop * -1;

const wordSpaceInEm = 0.4;
alertIconEm.marginRight = alertIconEm.marginLeft + wordSpaceInEm;

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
      bodyText: getFontSizeFromXHeight(xHeightRem.mobile.bodyText).toFixed(4),
      footer: getFontSizeFromXHeight(xHeightRem.mobile.footer).toFixed(4),
      inputNumber: getFontSizeFromCapHeight(
        capHeightRem.mobile.inputNumber,
      ).toFixed(4),
      landingPage: getFontSizeFromXHeight(
        xHeightRem.mobile.landingPage,
      ).toFixed(4),
      sectionTitle: getFontSizeFromXHeight(
        xHeightRem.mobile.sectionTitle,
      ).toFixed(4),
      stepNumber: getFontSizeFromCapHeight(
        capHeightRem.mobile.stepNumber,
      ).toFixed(4),
    },
    desktop: {
      bodyText: getFontSizeFromXHeight(xHeightRem.desktop.bodyText).toFixed(4),
      footer: getFontSizeFromXHeight(xHeightRem.desktop.footer).toFixed(4),
      inputNumber: getFontSizeFromCapHeight(
        capHeightRem.desktop.inputNumber,
      ).toFixed(4),
      landingPage: getFontSizeFromXHeight(
        xHeightRem.desktop.landingPage,
      ).toFixed(4),
      sectionTitle: getFontSizeFromXHeight(
        xHeightRem.desktop.sectionTitle,
      ).toFixed(4),
      stepNumber: getFontSizeFromCapHeight(
        capHeightRem.desktop.stepNumber,
      ).toFixed(4),
    },
  },
  fontWeight: {
    alertText: 500,
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
    bodyText: lineHeightCss.bodyText.toFixed(4),
    sectionTitle: lineHeightCss.sectionTitle.toFixed(4),
    stepNumber: lineHeightCss.stepNumber.toFixed(4),
  },
  textCrop: {
    bottom: {
      bodyText: getTextCropBottom(lineHeightCss.bodyText),
      sectionTitle: getTextCropBottom(lineHeightCss.sectionTitle),
      stepNumber: getTextCropBottom(lineHeightCss.stepNumber),
    },
    topCap: {
      bodyText: getTextCropTopCap(lineHeightCss.bodyText),
      sectionTitle: getTextCropTopCap(lineHeightCss.sectionTitle),
      stepNumber: getTextCropTopCap(lineHeightCss.stepNumber),
    },
    topX: {
      bodyText: getTextCropTopX(lineHeightCss.bodyText),
    },
  },
  code: {
    paddingBottom: {
      mobile: lineHeightRem.code.mobile,
      desktop: lineHeightRem.code.desktop,
    },
    paddingTop: {
      mobile: lineHeightRem.code.mobile,
      desktop: lineHeightRem.code.desktop,
    },
  },
  fontMetrics: fontMetricsFedraSans,
  fontName: {
    capHeight: {
      mobile: capHeightRem.mobile.fontName,
      desktop: capHeightRem.desktop.fontName,
    },
    lineHeightRem: {
      mobile: lineHeightRem.fontName.mobile,
      desktop: lineHeightRem.fontName.desktop,
    },
    paddingBottom: {
      mobile:
        (lineHeightRem.fontName.mobile - capHeightRem.mobile.fontName) *
        modularScale,
      desktop:
        (lineHeightRem.fontName.desktop - capHeightRem.desktop.fontName) *
        modularScale,
    },
    paddingTop: {
      mobile:
        (lineHeightRem.fontName.mobile - capHeightRem.mobile.fontName) *
        modularScale,
      desktop:
        (lineHeightRem.fontName.desktop - capHeightRem.desktop.fontName) *
        modularScale,
    },
  },
  icon: {
    height: alertIconEm.boxSize.toFixed(4),
    marginLeft: alertIconEm.marginLeft.toFixed(4),
    marginRight: alertIconEm.marginRight.toFixed(4),
    marginTop: alertIconEm.marginTop.toFixed(4),
    width: alertIconEm.boxSize.toFixed(4),
  },
  marginSide: {
    mobile: sideMarginMobile,
    desktop: sideMarginDesktop,
  }, // This value has to be in px, to avoid the side margin from expanding when the user enlarges the base font size.
  maxWidthInEm: maxWidthInEm,
  mediaQueryCutoff: {
    fontSize: breakpointFontSize,
    layout: breakpointLayout,
    sideMargin: breakpointSideMargin,
  },
  minScreenWidth: {
    px: {
      mobile: minScreenWidthPx.mobile,
      desktop: minScreenWidthPx.desktop,
    },
  },
  modularScale: modularScale,
  rem: oneRemPx,
  width: {
    controlPanel: controlPanelWidth.toFixed(0),
  },
  xHeight: {
    mobile: {
      px: xHeightPx.mobile,
      rem: xHeightRem.mobile.bodyText,
    },
    desktop: {
      px: xHeightPx.desktop,
      rem: xHeightRem.desktop.bodyText,
    },
  },
};

export default fontPalette;

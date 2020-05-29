import fontPalette from './fontPalette';

// Visible spacing
const paddingSidePx = 16;
const labelPaddingTopPx = paddingSidePx / 2;

// Values necessary to convert the above two spacing values into CSS property values
const getTextBoxTopToCapTopInRem = xHeightRem => {
  const textBoxTopToCapTopInXHeight =
    (fontPalette.fontMetrics.ascender - fontPalette.fontMetrics.capHeight) /
    fontPalette.fontMetrics.xHeight;
  return xHeightRem * textBoxTopToCapTopInXHeight;
};

// Center-align the user input numbers in between the label's baseline and the input field bottom border
const getExtraTopPadding = fontSize => {
  const a =
    fontPalette.fontMetrics.ascender - fontPalette.fontMetrics.capHeight;
  const b = fontPalette.fontMetrics.descender - a;
  const extraTopPaddingInRem = b / fontPalette.fontMetrics.unitsPerEm;
  return fontSize * extraTopPaddingInRem;
};

// Label text cap-height in rem
const getCapHeightInRem = xHeightRem => {
  const capToXRatio =
    fontPalette.fontMetrics.capHeight / fontPalette.fontMetrics.xHeight;
  return xHeightRem * capToXRatio;
};

const labelTextHeightInRem = {
  mobile: getCapHeightInRem(fontPalette.xHeight.mobile.rem),
  desktop: getCapHeightInRem(fontPalette.xHeight.desktop.rem),
};

const inputHeight = {
  mobile: Math.pow(fontPalette.modularScale, 6) * fontPalette.xHeight.mobile.px,
  desktop:
    Math.pow(fontPalette.modularScale, 6) * fontPalette.xHeight.desktop.px,
};

const inputSize = {
  height: inputHeight,
  labelLeftPx: paddingSidePx,
  labelTopPx: labelPaddingTopPx,
  labelTopOffsetRem: {
    mobile: getTextBoxTopToCapTopInRem(fontPalette.xHeight.mobile.rem),
    desktop: getTextBoxTopToCapTopInRem(fontPalette.xHeight.desktop.rem),
  },
  labelTopFallbackPx: labelPaddingTopPx, // For IE and Opera Mini
  paddingSidePx: paddingSidePx,
  extraTopPaddingToCenterAlignRem: {
    mobile: getExtraTopPadding(fontPalette.fontSize.mobile.inputNumber),
    desktop: getExtraTopPadding(fontPalette.fontSize.desktop.inputNumber),
  },
  labelTextCapHeightRem: labelTextHeightInRem,
  suffixBottomPx: {
    mobile: 18,
    desktop: 22,
  } /* to aligh with input values at the baseline */,
};

export default inputSize;

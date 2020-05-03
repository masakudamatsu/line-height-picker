import fontPalette from './fontPalette';

// Visible spacing
const paddingLeftPx = 16;
const labelPaddingTopPx = paddingLeftPx / 2;

// Values necessary to convert the above two spacing values into CSS property values
const getTextBoxTopToCapTopInRem = xHeight => {
  const textBoxTopToCapTopInXHeight =
    (fontPalette.fontMetrics.ascender - fontPalette.fontMetrics.capHeight) /
    fontPalette.fontMetrics.xHeight;
  return (xHeight * textBoxTopToCapTopInXHeight) / fontPalette.rem;
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
const getCapHeightInRem = xHeight => {
  const capToXRatio =
    fontPalette.fontMetrics.capHeight / fontPalette.fontMetrics.xHeight;
  return (xHeight * capToXRatio) / fontPalette.rem;
};

const labelTextHeightInRem = {
  mobile: getCapHeightInRem(fontPalette.xHeight.mobile),
  desktop: getCapHeightInRem(fontPalette.xHeight.desktop),
};

// Covert into rem where appropriate
const inputSize = {
  labelLeftPx: paddingLeftPx,
  labelTopPx: labelPaddingTopPx,
  labelTopOffsetRem: {
    mobile: getTextBoxTopToCapTopInRem(fontPalette.xHeight.mobile),
    desktop: getTextBoxTopToCapTopInRem(fontPalette.xHeight.desktop),
  },
  labelTopFallbackPx: labelPaddingTopPx, // For IE and Opera Mini
  paddingLeftPx: paddingLeftPx - 4, // optical adjustmnet
  extraTopPaddingToCenterAlignRem: {
    mobile: getExtraTopPadding(fontPalette.inputNumber.fontSize.mobile),
    desktop: getExtraTopPadding(fontPalette.inputNumber.fontSize.desktop),
  },
  labelTextCapHeightRem: labelTextHeightInRem,
};

export default inputSize;

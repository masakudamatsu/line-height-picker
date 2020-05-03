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
};

export default inputSize;

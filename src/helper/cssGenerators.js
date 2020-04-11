export const getFontSize = (fontMetrics, xHeight) => {
  const xHeightToFontSizeRatio = fontMetrics.xHeight / fontMetrics.unitsPerEm;
  const newFontSize = (xHeight / xHeightToFontSizeRatio).toFixed(4);
  return newFontSize;
};

export const getLineHeight = (
  fontMetrics,
  xHeight,
  xHeightRatio,
  lineHeightRatio,
) => {
  if (xHeightRatio === 0) {
    console.log('X-height ratio is zero. Replace it with a positive number.');
    return;
  }
  const lineToXRatio = lineHeightRatio / xHeightRatio;
  const newLineHeightPx = xHeight * lineToXRatio;
  const newLineHeight = (
    newLineHeightPx / getFontSize(fontMetrics, xHeight)
  ).toFixed(4);
  return newLineHeight;
};

export const getMarginTop = (
  fontMetrics,
  xHeight,
  xHeightRatio,
  lineHeightRatio,
) => {
  const a = (lineHeightRatio - xHeightRatio) * xHeight;
  const b =
    (fontMetrics.capHeight - fontMetrics.xHeight) / fontMetrics.unitsPerEm;
  const newMarginTop = (a + b * getFontSize(fontMetrics, xHeight)).toFixed(4);
  return newMarginTop;
};

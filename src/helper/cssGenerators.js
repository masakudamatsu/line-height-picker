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
  const lineSpacing = xHeight * (lineHeightRatio / xHeightRatio - 1);
  const paragraphSpacing =
    xHeight * Math.pow(lineHeightRatio / xHeightRatio - 1, 2);
  const capHeight = xHeight * (fontMetrics.capHeight / fontMetrics.xHeight);
  const newMarginTop = paragraphSpacing + (capHeight - xHeight) - lineSpacing;
  return newMarginTop.toFixed(4);
};

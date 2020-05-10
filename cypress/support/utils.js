export const getFontSize = (xHeight, fontMetrics) => {
  return (xHeight * (fontMetrics.unitsPerEm / fontMetrics.sxHeight)).toFixed(4);
};

export const getLineHeight = (
  xHeight,
  lineHeightRatio,
  xHeightRatio,
  fontMetrics,
) => {
  const fontSize = getFontSize(xHeight, fontMetrics);
  return ((xHeight * (lineHeightRatio / xHeightRatio)) / fontSize).toFixed(4);
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
  const capHeight = xHeight * (fontMetrics.sCapHeight / fontMetrics.sxHeight);
  const newMarginTop = paragraphSpacing + (capHeight - xHeight) - lineSpacing;
  return newMarginTop.toFixed(4);
};

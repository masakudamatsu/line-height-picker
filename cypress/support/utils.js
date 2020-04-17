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
  xHeightPx,
  xHeightRatio,
  lineHeightRatio,
) => {
  const a = (lineHeightRatio - xHeightRatio) * (xHeightPx / xHeightRatio);
  const b =
    (fontMetrics.sCapHeight - fontMetrics.sxHeight) / fontMetrics.unitsPerEm;
  return (a + b * getFontSize(xHeightPx, fontMetrics)).toFixed(4);
};

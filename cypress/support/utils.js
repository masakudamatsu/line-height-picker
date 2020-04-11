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
  const a = (lineHeightRatio - xHeightRatio) * xHeightPx;
  console.log(a);
  const b =
    (fontMetrics.sCapHeight - fontMetrics.sxHeight) / fontMetrics.unitsPerEm;
  console.log(b);
  return (a + b * getFontSize(xHeightPx, fontMetrics)).toFixed(4);
};

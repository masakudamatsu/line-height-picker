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

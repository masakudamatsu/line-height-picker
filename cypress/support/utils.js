export const getFontSize = (xHeight, FontMetrics) => {
  return (xHeight * (FontMetrics.unitsPerEm / FontMetrics.sxHeight)).toFixed(4);
};

export const getLineHeight = (
  xHeight,
  lineHeightRatio,
  xHeightRatio,
  FontMetrics,
) => {
  const fontSize = getFontSize(xHeight, FontMetrics);
  return ((xHeight * (lineHeightRatio / xHeightRatio)) / fontSize).toFixed(4);
};

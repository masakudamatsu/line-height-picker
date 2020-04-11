const getFontMetrics = font => {
  const fontMetrics = {};

  const namingTable = font.tables['name'];
  fontMetrics.fontFamily = namingTable['fontFamily'].en;
  fontMetrics.fontSubfamily = namingTable['fontSubfamily'].en;
  fontMetrics.fullName = namingTable['fullName'].en;

  const headTable = font.tables['head'];
  fontMetrics.unitsPerEm = headTable['unitsPerEm'];

  const os2Table = font.tables['os2'];
  fontMetrics.fontWeight = os2Table['usWeightClass'];
  fontMetrics.xHeight = os2Table['sxHeight'];
  fontMetrics.capHeight = os2Table['sCapHeight'];
  return fontMetrics;
};

export default getFontMetrics;

const getFontMetrics = font => {
  const fontMetrics = {};

  const namingTable = font.tables['name'];
  fontMetrics.fontFamily = namingTable['fontFamily'].en;
  fontMetrics.fontSubfamily = namingTable['fontSubfamily'].en;
  fontMetrics.fullName = namingTable['fullName'].en;

  const headTable = font.tables['head'];
  fontMetrics.unitsPerEm = headTable['unitsPerEm'];

  const os2Table = font.tables['os2'];
  fontMetrics.usWeightClass = os2Table['usWeightClass'];
  fontMetrics.sxHeight = os2Table['sxHeight'];

  return fontMetrics;
};

export default getFontMetrics;

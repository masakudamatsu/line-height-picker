const getFontMetrics = font => {
  const fontMetrics = {};

  const namingTable = font.tables['name'];
  fontMetrics.fontFamily = namingTable['preferredFamily']
    ? namingTable['preferredFamily'].en
    : (fontMetrics.fontFamily = namingTable['fontFamily'].en);
  fontMetrics.fontSubfamily = namingTable['preferredSubfamily']
    ? namingTable['preferredSubfamily'].en
    : namingTable['fontSubfamily'].en;

  const headTable = font.tables['head'];
  fontMetrics.unitsPerEm = headTable['unitsPerEm'];

  const os2Table = font.tables['os2'];
  fontMetrics.fontWeight = os2Table['usWeightClass'].toString();
  fontMetrics.xHeight = os2Table['sxHeight'];
  fontMetrics.capHeight = os2Table['sCapHeight'];
  return fontMetrics;
};

export default getFontMetrics;

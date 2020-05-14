const getFontMetrics = font => {
  const fontMetrics = {};

  const namingTable = font.tables['name'];

  // For the rationale for the code block below, see https://github.com/adobe-fonts/source-sans-pro/issues/50#issuecomment-59972936
  fontMetrics.fontFamily = namingTable['preferredFamily']
    ? namingTable['preferredFamily'].en
    : (fontMetrics.fontFamily = namingTable['fontFamily'].en);
  fontMetrics.fontSubfamily = namingTable['preferredSubfamily']
    ? namingTable['preferredSubfamily'].en
    : namingTable['fontSubfamily'].en;

  const headTable = font.tables['head'];
  fontMetrics.unitsPerEm = headTable['unitsPerEm'];

  const hheaTable = font.tables['hhea'];
  fontMetrics.ascender = hheaTable['ascender'];
  fontMetrics.descender = hheaTable['descender'];
  console.log(fontMetrics.ascender);
  console.log(fontMetrics.descender);

  const os2Table = font.tables['os2'];
  fontMetrics.fontWeight = os2Table['usWeightClass'].toString();
  fontMetrics.xHeight = os2Table['sxHeight'];
  fontMetrics.capHeight = os2Table['sCapHeight'];
  return fontMetrics;
};

export default getFontMetrics;

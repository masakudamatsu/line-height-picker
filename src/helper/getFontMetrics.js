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

  const os2Table = font.tables['os2'];
  fontMetrics.fontWeight = os2Table['usWeightClass'].toString();
  fontMetrics.xHeight = os2Table['sxHeight'];
  fontMetrics.capHeight = os2Table['sCapHeight'];

  console.log(
    `The following font metrics for ${fontMetrics.fontFamily} ${fontMetrics.fontSubfamily} are extracted:`,
  );

  console.log(`head.unitsPerEm: ${fontMetrics.unitsPerEm}`);
  console.log(`hhea.ascender: ${fontMetrics.ascender}`);
  console.log(`hhea.descender: ${fontMetrics.descender}`);
  console.log(`os2.sxHeight: ${fontMetrics.xHeight}`);
  console.log(`os2.sCapHeight: ${fontMetrics.capHeight}`);

  return fontMetrics;
};

export default getFontMetrics;

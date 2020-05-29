import fontPalette from './fontPalette';

const minimumScreenWidth = 320;
const buttonHeight = {
  mobile: Math.pow(fontPalette.modularScale, 5) * fontPalette.xHeight.mobile.px,
  desktop:
    Math.pow(fontPalette.modularScale, 5) * fontPalette.xHeight.desktop.px,
};

const getButtonMetrics = scale => {
  return {
    mobile: scale * buttonHeight.mobile,
    desktop: scale * buttonHeight.desktop,
  };
};

const buttonBorderRadius = getButtonMetrics(2 / 18);

const capHeightToFontSizeRatio =
  fontPalette.fontMetrics.capHeight / fontPalette.fontMetrics.unitsPerEm;

const buttonFontSize = {
  mobile:
    getButtonMetrics(5 / 18).mobile /
    capHeightToFontSizeRatio /
    fontPalette.rem,
  desktop:
    getButtonMetrics(5 / 18).desktop /
    capHeightToFontSizeRatio /
    fontPalette.rem,
};
const buttonPaddingSide = getButtonMetrics(8 / 18);

const buttonWidthMobile = minimumScreenWidth - fontPalette.marginSide * 2;
const buttonWidthDesktop =
  buttonWidthMobile *
  (fontPalette.xHeight.desktop.rem / fontPalette.xHeight.mobile.rem);
const buttonWidth = {
  mobile: buttonWidthMobile,
  desktop: buttonWidthDesktop,
};

const buttonSize = {
  borderRadius: buttonBorderRadius,
  fontSize: buttonFontSize,
  height: buttonHeight,
  paddingSide: buttonPaddingSide,
  width: buttonWidth,
};

export default buttonSize;

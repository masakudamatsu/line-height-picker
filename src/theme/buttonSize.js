import fontPalette from './fontPalette';

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

const buttonWidthMobile =
  fontPalette.minScreenWidth.px.mobile -
  fontPalette.marginSide.mobile.first * 2;
const buttonWidthDesktop =
  buttonWidthMobile *
  (fontPalette.xHeight.desktop.rem / fontPalette.xHeight.mobile.rem);
const buttonWidth = {
  mobile: buttonWidthMobile,
  desktop: buttonWidthDesktop,
};

const buttonSize = {
  borderRadius: {
    mobile: buttonBorderRadius.mobile.toFixed(4),
    desktop: buttonBorderRadius.desktop.toFixed(4),
  },
  fontSize: {
    mobile: buttonFontSize.mobile.toFixed(4),
    desktop: buttonFontSize.desktop.toFixed(4),
  },
  height: {
    mobile: buttonHeight.mobile.toFixed(4),
    desktop: buttonHeight.desktop.toFixed(4),
  },
  paddingSide: {
    mobile: buttonPaddingSide.mobile.toFixed(4),
    desktop: buttonPaddingSide.desktop.toFixed(4),
  },
  width: {
    mobile: buttonWidth.mobile.toFixed(4),
    desktop: buttonWidth.desktop.toFixed(4),
  },
};

export default buttonSize;

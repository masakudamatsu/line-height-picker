const darkest = 'hsl(0, 0%, 15%)';
const darkerThanDarkest = 'hsl(0, 0%, 25%)';
const disabled = 'hsl(0, 0%, 35%)'; // For disabled links on header navigation
const middleDark = 'hsl(0, 0%, 36%)';
const middle = 'hsl(0, 0%, 46%)'; // 1:4.5 contrast ratio to both pure black and pure white
const footerText = 'hsl(0, 0%, 67%)';
const visitedLink = 'hsl(0, 0%, 76%)';
const opacityForDisabledText = '0.35'; // For disabled text for navigation and buttons
const pureBlack = 'hsl(0, 0%, 0%)';
const alert = 'hsl(335, 71%, 64%)';
const light = {
  source: 'hsla(0, 0%, 100%, 0.9)',
  reflection: 'hsla(0, 0%, 100%, 0.5)',
};

const colorPalette = {
  background: darkest,
  bodyText: brightest,
  button: {
    default: darkest,
    focus: middle,
    shadow: light.reflection,
  },
  controlPanel: darkerThanDarkest,
  disabledText: opacityForDisabledText,
  displayBackground: pureBlack,
  footerText: footerText,
  errorText: alert,
  inputField: middle,
  linearLight: {
    backgroundColor: light.source,
    shadow: light.reflection,
  },
  link: {
    text: {
      default: brightest,
      visited: visitedLink,
    },
    underline: {
      default: brightest,
      visited: visitedLink,
    },
    background: {
      fallback: middle,
      fallbackVisited: middleDark,
      hover: middle,
      hoverVisited: middleDark,
    },
  },
};

export default colorPalette;

const darkest = 'hsl(0, 0%, 15%)';
const darkerThanDarkest = 'hsl(0, 0%, 25%)';
const disabled = 'hsl(0, 0%, 35%)'; // For disabled links on header navigation
const middleDark = 'hsl(0, 0%, 36%)';
const middle = 'hsl(0, 0%, 46%)'; // 1:4.5 contrast ratio to both pure black and pure white
const footerText = 'hsl(0, 0%, 67%)';
const visitedLink = 'hsl(0, 0%, 76%)';
const brightest = 'hsl(0, 0%, 96%)';
const pureBlack = 'hsl(0, 0%, 0%)';
const alert = 'hsl(335, 71%, 64%)';

const colorPalette = {
  background: darkest,
  bodyText: brightest,
  button: {
    default: darkest,
    focus: middle,
  },
  controlPanel: darkerThanDarkest,
  disabledText: disabled,
  displayBackground: pureBlack,
  footerText: footerText,
  errorText: alert,
  inputField: middle,
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

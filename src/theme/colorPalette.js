const backgroundDark = 'hsl(0, 0%, 10%)';
const figureDark = 'hsl(0, 0%, 51%)'; // 1 to 4.5 contrast ratio to backgroundDark
const backgroundLight = 'hsl(0, 0%, 40%)'; // 1 to 3 contrast ratio to the backgroundDark
const alert = 'hsl(60,80%,60%)'; // 1 to 4.5 contrast ratio with backgroundLight
const figureLight = 'hsl(0, 0%, 90%)'; // 1 to 4.5 contrast ratio with backgroundLight
const backgroundLightest = 'hsl(0, 0%, 51%)'; // 1 to 3 contrast ratio to the figureLight for button's focus-state color

const opacityForDisabledText = '0.35'; // For disabled text for navigation and buttons

const light = {
  source: 'hsla(0, 0%, 100%, 0.9)',
  reflection: 'hsla(0, 0%, 100%, 0.56)', // 1 to 3 contrast ratio with backgroundLight (button shadow against control panel)
};

// For link text
const middle = 'hsl(0, 0%, 74%)'; // 1 to 3 contrast ratio to backgroundLight
const middleDark = 'hsl(0, 0%, 36%)';
const visitedLink = 'hsl(180,70%,89%)'; // 1 to 5 contrast ratio with second darkest color

const colorPalette = {
  background: backgroundDark,
  bodyText: figureLight,
  button: {
    default: backgroundDark,
    focus: backgroundLightest,
    shadow: light.reflection,
  },
  controlPanel: backgroundLight,
  disabledText: opacityForDisabledText,
  footerText: figureDark,
  errorText: alert,
  inputField: backgroundLight,
  linearLight: {
    backgroundColor: light.source,
    shadow: light.reflection,
  },
  link: {
    text: {
      default: figureLight,
      visited: visitedLink,
    },
    underline: {
      default: figureLight,
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

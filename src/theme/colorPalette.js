const backgroundDark = 'hsl(0, 0%, 10%)';
const figureDark = 'hsl(0, 0%, 51%)'; // 1 to 4.5 contrast ratio to backgroundDark
const backgroundLight = 'hsl(0, 0%, 40%)'; // 1 to 3 contrast ratio to the backgroundDark
const figureLight = 'hsl(0, 0%, 90%)'; // 1 to 4.5 contrast ratio with backgroundLight
const alert = 'hsl(60,80%,60%)'; // 1 to 4.5 contrast ratio with backgroundLight
const backgroundLightest = 'hsl(0, 0%, 51%)'; // 1 to 3 contrast ratio to the figureLight for button's focus-state color

const opacityForDisabledText = '0.35'; // For disabled text for navigation and buttons

const light = {
  source: 'hsla(0, 0%, 100%, 0.9)',
  reflection: 'hsla(0, 0%, 100%, 0.56)', // 1 to 3 contrast ratio with backgroundLight (button shadow against control panel)
};

// For link text
const middle = 'hsl(0, 0%, 74%)'; // 1 to 3 contrast ratio to backgroundLight
const middleDark = 'hsl(0, 0%, 36%)';
const visitedLink = 'hsl(0, 0%, 64%)'; // 1 to 1.5 contrast ratio to footer text
const unvisitedLink = 'hsl(0, 0%, 79%)'; // 1 to 1.5 contrast ratio to visitedLink

// Plan 1: body, link, visited link, footer, background
// 7/49-62-76-93

// Plan 2: body, link, visited link, background
// 15/55-69-85

// Plan 3: body, footer, background 1, background 2
// 10/51, 40/90

const colorPalette = {
  background: backgroundDark,
  bodyText: figureLight,
  button: {
    default: 'inherit',
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
      visited: figureLight,
    },
    underline: figureLight, // should be the same as text.visited
    background: {
      hover: backgroundLight,
      hoverVisited: backgroundLight,
    },
  },
};

export default colorPalette;

const backgroundDark = 'hsl(0, 0%, 10%)';
const backgroundLight = 'hsl(0, 0%, 40%)'; // 3:1 to backgroundDark
const figureLight = 'hsl(0, 0%, 90%)'; // 4.5:1 to backgroundLight
const figureDark = 'hsl(0, 0%, 51%)'; // 1:3 to figureLight & 4.5:1 to backgroundDark
const alert = 'hsl(0,0%,74%)'; // 1:1.5 to figureLight (can be darker up to hsl(0, 0%, 51%))

const opacityForDisabledText = '0.35'; // For disabled text for navigation and buttons

const light = {
  source: 'hsla(0, 0%, 100%, 0.9)',
  reflection: 'hsla(0, 0%, 100%, 0.56)', // 1 to 3 contrast ratio with backgroundLight (button shadow against control panel)
};

const colorPalette = {
  background: backgroundDark,
  bodyText: figureLight,
  button: {
    default: 'inherit',
    focus: figureDark,
    shadow: light.reflection,
  },
  controlPanel: {
    background: backgroundDark,
    border: backgroundLight,
    borderRadius: '0',
  },
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
      default: 'currentColor',
      visited: 'currentColor',
    },
    underline: 'currentColor', // should be the same as text.visited
    background: {
      hover: backgroundLight,
      hoverVisited: backgroundLight,
    },
  },
};

export default colorPalette;

# Line-height Picker

---

A front-end web app that helps web designers / developers pick the best
`line-height` value for their websites

## URL

[https://line-height-picker.app](https://line-height-picker.app), where you will
find more detail about the app (motivation, how to use, etc.).

## Features

In essence, Line-height Picker converts three user inputs

- Font file (`.otf`, `.ttf`, `.woff`)
- X-height value in pixel
- Ratio of x-height to line-height

into the CSS values of

- `font-size`
- `line-height`
- `margin-top` (to set the space between paragraphs)

In addition, the app uses these CSS values to render two paragraphs excerpted
from Steve Jobs's famous speech in the user-selected font. This way, the user
can check whether they are happy with the result.

## JS libraries used

- [opentype.js](https://github.com/opentypejs/opentype.js) to extract the font
  metrics of the user-selected font
- [React](https://reactjs.org/) (via
  [Create React App](https://create-react-app.dev/))
- [React Router](https://reacttraining.com/react-router/)
- [React Transition Group](https://reactcommunity.org/react-transition-group/)
- [Styled Components](https://styled-components.com/)
- [store.js](https://github.com/marcuswestin/store.js/)

## Web APIs used

- [Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)
- [Constraint Validation](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation)
- [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
- [FontFace](https://developer.mozilla.org/en-US/docs/Web/API/FontFace) to
  render sample paragraphs in the user-selected font

## How the app works

### Step 1

- After the user selects a font file,
  [FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
  reads the file content.
- Then [opentype.js](https://github.com/opentypejs/opentype.js) extracts font
  metric values.
- Finally,
  [FontFace API](https://developer.mozilla.org/en-US/docs/Web/API/FontFace)
  stores the font rendering information.
- The URL will automatically change to `https://line-height-picker.app/x-height`
  with `history.push` from
  [React Router](https://reacttraining.com/react-router/), and page transition
  animation is activated with
  [React Transition Group](https://reactcommunity.org/react-transition-group/).
- The new page displays the font name by using the extracted font metric values.

### Step 2

- After the user enters an x-height value, its validity is checked with
  [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation).
- The x-height value will then be converted into the `font-size` CSS value by
  using the extracted font metric values.
- When the user clicks the "Next" button, the URL changes to
  `https://line-height-picker.app/modular-scale` (with
  [React Router](https://reacttraining.com/react-router/) and
  [React Transition Group](https://reactcommunity.org/react-transition-group/)
  as before).
- The new page displays the x-height value along with the font name.

### Step 3

- After the user enters the ratio of x-height to line-height, its validity is
  checked with
  [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation).
- The ratio values will then be converted into the `line-height` and
  `margin-top` CSS values by using the extracted font metric values.
- When the user clicks the "Preview" button, the URL changes to
  `https://line-height-picker.app/preview` (with
  [React Router](https://reacttraining.com/react-router/) and
  [React Transition Group](https://reactcommunity.org/react-transition-group/)
  as before).

### Step 4

- The new page renders sample paragraphs with the font rendering information
  (step 1) and the CSS values (steps 2 and 3).
- The user can revise any of the three inputs (the font name, the x-height, the
  x-height to line-height ratio), and the change will immediately be reflected
  in the rendering of sample paragraphs.
- When the user clicks the "CSS code" button, the URL changes to
  `https://line-height-picker.app/css` (with
  [React Router](https://reacttraining.com/react-router/) and
  [React Transition Group](https://reactcommunity.org/react-transition-group/)
  as before).

### Step 5

- The new page displays the CSS code to replicate the rendering of sample
  paragraphs.
- When the user clicks the "Copy CSS code" button, the app copies the CSS code
  into the user's clipboard with
  [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard).
- When the user clicks the "Back" button, the URL changes back to
  `https://line-height-picker.app/preview` (with
  [React Router](https://reacttraining.com/react-router/) and
  [React Transition Group](https://reactcommunity.org/react-transition-group/)
  as before).

### After page reloads

- The app uses [store.js](https://github.com/marcuswestin/store.js/) to keep the
  user input values even if the user (possibly by mistake) reloads the page.
- When the browser tab is closed, the user input values will be deleted (due to
  the use of `sessionStorage` rather than `localStorage`).

### Styling

- The app uses [Styled Components](https://styled-components.com/) to style HTML
  elements.
- It allows the whole page layout to be derived from just two values: x-height
  (8.5714px for mobile screens; 10px for desktop screens) and modular scale
  (1.5).

## Known issues

- Does not work with font files purchased from font foundries.
- Sample paragraphs will be rendered in Times New Roman after page reloads.
- Page transition animation is not intuitive when the user clicks the browser's
  back/forward buttons.

## Contributing

Pull requests are welcome.

## Setting up local environment

Requirements: [Node.js](http://nodejs.org/) (and [NPM](https://npmjs.org/) which
comes with it).

To install:

```
$ git clone https://github.com/masakudamatsu/line-height-picker.git
$ cd line-height-picker
$ npm install
```

To start server:

```
$ npm start
```

## Testing

The following testing tools are used:

- [Cypress](https://www.cypress.io/)
- [cypress-image-snapshot](https://www.npmjs.com/package/cypress-image-snapshot)
- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

To run e2e tests with Cypress and cypress-image-snapshot:

```
$ npx cypress run
```

To run component tests with Testing-Library and Jest:

```
$ npm test
```

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import Footer from './Footer';

test('renders correctly', () => {
  const {container} = render(<Footer />);
  expect(container).toMatchInlineSnapshot(`
    .c3 {
      background: hsl(0,0%,40%);
      background: linear-gradient( to bottom, transparent 50%, currentColor 50%, currentColor );
      background-position: 0 calc( 0.125em + 0.707em );
      background-repeat: no-repeat;
      background-size: 100% 1px;
      color: currentColor;
      cursor: pointer;
      -webkit-text-decoration: none;
      text-decoration: none;
      text-shadow: 0.03em 0 hsl(0,0%,10%), -0.03em 0 hsl(0,0%,10%),0 0.03em hsl(0,0%,10%), 0 -0.03em hsl(0,0%,10%);
    }

    .c3:visited {
      background: hsl(0,0%,40%);
      background: linear-gradient( to bottom, transparent 50%, currentColor 50%, currentColor );
      color: currentColor;
    }

    .c3:focus,
    .c3:hover {
      background: hsl(0,0%,40%);
      outline: none;
      text-shadow: none;
    }

    .c3:focus:before,
    .c3:hover:before,
    .c3:focus:after,
    .c3:hover:after {
      display: none;
    }

    .c3:active {
      background: none;
    }

    .c3:visited:focus,
    .c3:visited:hover {
      background: hsl(0,0%,40%);
      outline: none;
      text-shadow: none;
    }

    .c3:visited:focus:before,
    .c3:visited:hover:before,
    .c3:visited:focus:after,
    .c3:visited:hover:after {
      display: none;
    }

    .c3:visited:active {
      background: none;
    }

    .c0 {
      max-width: 33em;
      border-top: 1px solid hsl(0,0%,90%);
      position: inherit;
      bottom: 0;
      left: 0;
      width: 100%;
    }

    .c2 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
      color: hsl(0,0%,90%);
      font-family: 'Fedra Sans 3',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 0.6541rem;
      font-weight: 300;
    }

    .c2:before,
    .c2:after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c2:before {
      margin-bottom: -0.2555em;
    }

    .c2:after {
      margin-top: -0.4025em;
    }

    .c1 {
      height: 1.2053571428571428rem;
      width: auto;
    }

    .c4 {
      height: 0.8035714285714286rem;
      width: auto;
    }

    @media only screen and (min-width:799px) {
      .c0 {
        max-width: calc( 388px + 33em + 22.5000px );
      }
    }

    @media only screen and (min-width:728px) {
      .c2 {
        font-size: 0.7631rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c1 {
        height: 1.40625rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c4 {
        height: 0.9375rem;
      }
    }

    <div>
      <footer
        class="sc-AxhCb c0"
        data-testid="footer"
      >
        <div
          class="c1"
          height="2"
        />
        <p
          class="sc-AxgMl c2"
        >
          Designed, Written, and Coded by Masa Kudamatsu (
          <a
            class="c3"
            href="https://twitter.com/masa_kudamatsu"
          >
            @masa_kudamatsu
          </a>
          ) in 2020.
        </p>
        <div
          class="c4"
          height="1"
        />
        <p
          class="sc-AxgMl c2"
        >
          GitHub hosts
           
          <a
            class="c3"
            href="https://github.com/masakudamatsu/line-height-picker"
          >
            the source code for the Line-height Picker
          </a>
          . Please report bugs and send feature requests there.
        </p>
        <div
          class="c4"
          height="1"
        />
        <p
          class="sc-AxgMl c2"
        >
          The Line-height Picker is powered by
           
          <a
            class="c3"
            href="https://github.com/opentypejs/opentype.js"
          >
            Opentype.js
          </a>
           
          for extracting font file information;
           
          <a
            class="c3"
            href="https://create-react-app.dev/"
          >
            Create React App
          </a>
          ,
           
          <a
            class="c3"
            href="https://reacttraining.com/react-router/"
          >
            React Router
          </a>
          ,
           
          <a
            class="c3"
            href="https://reactcommunity.org/react-transition-group/"
          >
            React Transition Group
          </a>
          ,
           
          <a
            class="c3"
            href="https://styled-components.com/"
          >
            Styled Components
          </a>
          ,
           
          <a
            class="c3"
            href="https://github.com/marcuswestin/store.js/"
          >
            Store.js
          </a>
           
          for building what you see and interact with;
           
          <a
            class="c3"
            href="https://www.cypress.io/"
          >
            Cypress
          </a>
          ,
           
          <a
            class="c3"
            href="https://testing-library.com/"
          >
            Testing Library
          </a>
          , 
          <a
            class="c3"
            href="https://jestjs.io/"
          >
            Jest
          </a>
          ,
           
          <a
            class="c3"
            href="https://eslint.org/"
          >
            ESLint
          </a>
          , and
           
          <a
            class="c3"
            href="https://prettier.io/"
          >
            Prettier
          </a>
           for minimizing the number of errors you might encounter; and—last but not least—
          <a
            class="c3"
            href="https://www.nouvellenoire.ch/product/atl-aleph/"
          >
            Aleph
          </a>
           
          and
           
          <a
            class="c3"
            href="https://www.typotheque.com/fonts/fedra_sans"
          >
            Fedra Sans
          </a>
           
          for the beautiful typefaces.
        </p>
        <div
          class="c4"
          height="1"
        />
        <p
          class="sc-AxgMl c2"
        >
          Special thanks go to
           
          <a
            class="c3"
            href="https://tbrown.org/"
          >
            Tim Brown
          </a>
           for inspiring the basic idea of the Line-height Picker through his book Flexible Typesetting,
           
          <a
            class="c3"
            href="https://kentcdodds.com/"
          >
            Kent C. Dodds
          </a>
           
          for teaching how to test JavaScript applications in his course TestingJavaScript.com, Philippe Apeloig and the
           
          <a
            class="c3"
            href="https://www.100daysofcode.com/"
          >
            #100DaysOfCode
          </a>
           
          community for encouragement during the 100 days of making the Line-height Picker.
        </p>
         
        <div
          class="c1"
          height="2"
        />
      </footer>
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<Footer />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

import React from 'react';
import render from './test-utils/render';
import {cleanup} from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import {axe} from 'jest-axe';
import 'jest-axe/extend-expect';

import GetCSS from './GetCSS';

const mockProps = {
  fontFamily: 'Open Sans',
  fontSize: '18.6543',
  fontWeight: '400',
  lineHeight: '1.6055',
  marginTop: '23.3394',
};

test('renders correctly', () => {
  const {container} = render(
    <GetCSS
      fontFamily={mockProps.fontFamily}
      fontSize={mockProps.fontSize}
      fontWeight={mockProps.fontWeight}
      lineHeight={mockProps.lineHeight}
      marginTop={mockProps.marginTop}
    />,
  );
  expect(container).toMatchInlineSnapshot(`
    .c16 {
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

    .c16:visited {
      background: hsl(0,0%,40%);
      background: linear-gradient( to bottom, transparent 50%, currentColor 50%, currentColor );
      color: currentColor;
    }

    .c16:focus,
    .c16:hover {
      background: hsl(0,0%,40%);
      outline: none;
      text-shadow: none;
    }

    .c16:focus:before,
    .c16:hover:before,
    .c16:focus:after,
    .c16:hover:after {
      display: none;
    }

    .c16:active {
      background: none;
    }

    .c16:visited:focus,
    .c16:visited:hover {
      background: hsl(0,0%,40%);
      outline: none;
      text-shadow: none;
    }

    .c16:visited:focus:before,
    .c16:visited:hover:before,
    .c16:visited:focus:after,
    .c16:visited:hover:after {
      display: none;
    }

    .c16:visited:active {
      background: none;
    }

    .c0 {
      max-width: 33em;
    }

    .c2 {
      font-family: 'Fedra Sans Alt',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 1.4717rem;
      font-weight: 300;
      line-height: 1.0920;
    }

    .c2:before,
    .c2:after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c2:before {
      margin-bottom: -0.1190em;
    }

    .c2:after {
      margin-top: -0.2660em;
    }

    .c12 {
      color: hsl(51,100%,44%);
      font-weight: 500;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
    }

    .c12:before,
    .c12:after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c12:before {
      margin-bottom: -0.2555em;
    }

    .c12:after {
      margin-top: -0.4025em;
    }

    .c13 {
      color: currentColor;
      font-weight: inherit;
      font-variant-numeric: oldstyle-nums;
      font-feature-settings: 'calt','clig','kern','liga','onum';
    }

    .c13:before,
    .c13:after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c13:before {
      margin-bottom: -0.2555em;
    }

    .c13:after {
      margin-top: -0.4025em;
    }

    .c10 {
      -webkit-align-items: flex-start;
      -webkit-box-align: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-family: 'Fedra Sans',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-weight: 500;
      visibility: hidden;
    }

    .c11 {
      -webkit-flex: 0 0 0.9427em;
      -ms-flex: 0 0 0.9427em;
      flex: 0 0 0.9427em;
      height: 0.9427em;
      width: 0.9427em;
      margin-left: -0.0786em;
      margin-right: 0.3214em;
      margin-top: -0.0786em;
      stroke: hsl(51,100%,44%);
      visibility: hidden;
    }

    .c6 {
      padding-bottom: 1.3393rem;
      padding-top: 1.3393rem;
      white-space: pre-wrap;
    }

    .c7 {
      font-family: 'Fedra Mono',monospace;
      font-weight: 300;
    }

    .c14 {
      font-family: 'Fedra Mono',monospace;
      font-weight: 300;
      border: 1px solid hsl(0,0%,40%);
      font-size: 85%;
      -webkit-letter-spacing: -0.04em;
      -moz-letter-spacing: -0.04em;
      -ms-letter-spacing: -0.04em;
      letter-spacing: -0.04em;
      padding: 2px 4px 1px;
    }

    .c15 {
      font-style: normal;
    }

    .c3 {
      font-feature-settings: 'smcp';
      -webkit-letter-spacing: 0.01em;
      -moz-letter-spacing: 0.01em;
      -ms-letter-spacing: 0.01em;
      letter-spacing: 0.01em;
    }

    .c5 {
      background: hsla(0,0%,100%,0.9);
      box-shadow: 0 0 10px 0 hsla(0,0%,100%,0.56), 0 0 20px 0 hsla(0,0%,100%,0.56), 0 0 40px 0 hsla(0,0%,100%,0.56);
      height: 2px;
      width: 100%;
    }

    .c8 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: inherit;
      border: none;
      border-radius: 7.2321px;
      box-shadow: -3px 0 3px 0px hsla(0,0%,100%,0.56), 0 -3px 3px 0px hsla(0,0%,100%,0.56), 3px 0 3px 0 hsla(0,0%,100%,0.56), 0 3px 3px 0 hsla(0,0%,100%,0.56);
      color: inherit;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-family: 'Fedra Sans Alt',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 1.5983rem;
      font-weight: 500;
      height: 65.0893px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      -webkit-text-decoration: none;
      text-decoration: none;
      width: 294.2858px;
    }

    .c8:focus,
    .c8:hover {
      background-color: hsl(0,0%,51%);
      box-shadow: -6px 0 6px 0px hsla(0,0%,100%,0.56), 0 -6px 6px 0px hsla(0,0%,100%,0.56), 6px 0 6px 0 hsla(0,0%,100%,0.56), 0 6px 6px 0 hsla(0,0%,100%,0.56);
      outline: none;
    }

    .c8:active {
      background-color: hsl(0,0%,51%);
      box-shadow: -1px 0 1px 0px hsla(0,0%,100%,0.56), 0 -1px 1px 0px hsla(0,0%,100%,0.56), 1px 0 1px 0 hsla(0,0%,100%,0.56), 0 1px 1px 0 hsla(0,0%,100%,0.56);
      outline: none;
    }

    .c8[disabled] {
      border: 1px solid hsla(0,0%,100%,0.56);
      box-shadow: none;
      cursor: not-allowed;
      opacity: 0.35;
    }

    .c9 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: inherit;
      border: none;
      border-radius: 7.2321px;
      box-shadow: -3px 0 3px 0px hsla(0,0%,100%,0.56), 0 -3px 3px 0px hsla(0,0%,100%,0.56), 3px 0 3px 0 hsla(0,0%,100%,0.56), 0 3px 3px 0 hsla(0,0%,100%,0.56);
      color: inherit;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-family: 'Fedra Sans Alt',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
      font-size: 1.5983rem;
      font-weight: 500;
      height: 65.0893px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      position: relative;
      -webkit-text-decoration: none;
      text-decoration: none;
      width: 294.2858px;
    }

    .c9:focus,
    .c9:hover {
      background-color: hsl(0,0%,51%);
      box-shadow: -6px 0 6px 0px hsla(0,0%,100%,0.56), 0 -6px 6px 0px hsla(0,0%,100%,0.56), 6px 0 6px 0 hsla(0,0%,100%,0.56), 0 6px 6px 0 hsla(0,0%,100%,0.56);
      outline: none;
    }

    .c9:active {
      background-color: hsl(0,0%,51%);
      box-shadow: -1px 0 1px 0px hsla(0,0%,100%,0.56), 0 -1px 1px 0px hsla(0,0%,100%,0.56), 1px 0 1px 0 hsla(0,0%,100%,0.56), 0 1px 1px 0 hsla(0,0%,100%,0.56);
      outline: none;
    }

    .c9[disabled] {
      border: 1px solid hsla(0,0%,100%,0.56);
      box-shadow: none;
      cursor: not-allowed;
      opacity: 0.35;
    }

    .c9:before {
      content: '←';
      position: absolute;
      left: 14.4643px;
    }

    .c1 {
      height: 1.8080357142857142rem;
      width: auto;
    }

    .c4 {
      height: 1.2053571428571428rem;
      width: auto;
    }

    .c17 {
      height: 0.8035714285714286rem;
      width: auto;
    }

    .c18 {
      border: 1px solid hsl(0,0%,40%);
      max-width: 33em;
      overflow: hidden;
      width: 100%;
    }

    .c19 {
      display: block;
      height: auto;
      max-width: 100%;
      margin: auto;
    }

    @media only screen and (min-width:728px) {
      .c2 {
        font-size: 1.7170rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c6 {
        padding-bottom: 1.5625rem;
        padding-top: 1.5625rem;
      }
    }

    @supports (font-variant-caps:small-caps) {
      .c3 {
        font-variant-caps: small-caps;
        font-feature-settings: normal;
      }
    }

    @media only screen and (min-width:728px) {
      .c8 {
        border-radius: 8.4375;
        font-size: 1.8647rem;
        height: 75.9375px;
        width: 343.3334px;
      }
    }

    @media only screen and (min-width:728px) {
      .c9 {
        border-radius: 8.4375;
        font-size: 1.8647rem;
        height: 75.9375px;
        width: 343.3334px;
      }
    }

    @media only screen and (min-width:728px) {
      .c9:before {
        left: 16.875px;
      }
    }

    @media only screen and (min-width:728px) {
      .c1 {
        height: 2.109375rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c4 {
        height: 1.40625rem;
      }
    }

    @media only screen and (min-width:728px) {
      .c17 {
        height: 0.9375rem;
      }
    }

    <div>
      <main>
        <section
          class="c0"
        >
          <div
            class="c1"
            height="3"
          />
          <h2
            class="c2"
          >
            <abbr
              class="c3"
            >
              Css
            </abbr>
             code
          </h2>
          <div
            class="c4"
            height="2"
          />
          <div
            class="c5"
          />
          <pre
            class="c6"
          >
            <code
              class="c7"
              data-testid="cssCode"
              id="cssCode"
            >
              p {
      font-family: 'Open Sans';
      font-size: 18.6543px;
      font-weight: 400;
      line-height: 1.6055;
    }

    p + p {
      margin-top: 23.3394px;
    }
            </code>
          </pre>
          <div
            class="c5"
          />
          <div
            class="c4"
            height="2"
          />
          <button
            aria-describedby="whatHappened howToResolve extraText"
            class="c8"
            data-testid="copy-button"
          >
            <span>
              Copy
              <abbr
                class="c3"
              >
                css
              </abbr>
               code
            </span>
          </button>
          <div
            class="c4"
            height="2"
          />
          <button
            class="c9"
          >
            Back
          </button>
          <div
            class="c4"
            height="2"
          />
          <div
            class="c10"
          >
            <svg
              class="c11"
              fill="none"
              height="24"
              role="img"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>
                Alert icon
              </title>
              <path
                d="M0 0h24v24H0z"
                stroke="none"
              />
              <path
                d="M12 9v2m0 4v.01"
              />
              <path
                d="M5.07 19H19a2 2 0 0 0 1.75 -2.75L13.75 4a2 2 0 0 0 -3.5 0L3.25 16.25a2 2 0 0 0 1.75 2.75"
              />
            </svg>
            <p
              class="c12"
            >
              <span
                data-testid="whatHappened"
                id="whatHappened"
              >
                The browser doesn't allow us to copy the CSS code into your clipboard.
              </span>

              <span
                data-testid="howToResolve"
                id="howToResolve"
              >

                Please select the CSS code on your own to copy and paste it.
              </span>
            </p>
          </div>
          <div
            class="c1"
            height="3"
          />
        </section>
        <div
          class="c1"
          height="3"
        />
        <section
          class="c0"
        >
          <h2
            class="c2"
          >
            How we obtain the above
            <abbr
              class="c3"
            >
              css
            </abbr>
             values
          </h2>
          <div
            class="c4"
            height="2"
          />
          <p
            class="c13"
          >
            We use font metrics—extracted from the font file you have selected—to convert the x-height value and its ratio to line-height into

            <code
              class="c14"
            >
              font-size
            </code>
            ,

            <code
              class="c14"
            >
              line-height
            </code>
            , and

            <code
              class="c14"
            >
              margin-top
            </code>
             values.
          </p>
          <div
            class="c4"
            height="2"
          />

          <p
            class="c13"
          >
            Below we explain how the Line-height Picker obtains each of these three
            <abbr
              class="c3"
            >
              css
            </abbr>
             values. To learn more about font metrics, have a look at

            <cite
              class="c15"
            >
              <a
                class="c16"
                href="http://westonthayer.com/writing/intro-to-font-metrics/"
              >
                “Intro to Font Metrics”
              </a>
            </cite>
            , an article written by Weston Thayer in 2019 .
          </p>
          <div
            class="c1"
            height="3"
          />
          <section>
            <h3
              class="c2"
            >
              Font-size
            </h3>
            <div
              class="c4"
              height="2"
            />
            <p
              class="c13"
            >
              To convert your x-height value into the

              <code
                class="c14"
              >
                font-size
              </code>
               value shown above, we use the ratio of two font metric values:
              <code
                class="c14"
              >
                unitsPerEm
              </code>

              and
              <code
                class="c14"
              >
                sxHeight
              </code>
              .
            </p>
            <div
              class="c4"
              height="2"
            />
            <p
              class="c13"
            >
              The
              <code
                class="c14"
              >
                unitsPerEm
              </code>
               value is the number of font-metric units that correspond to the

              <code
                class="c14"
              >
                font-size
              </code>
               value. It is usually either 1000 or 2048. For example, Open Sans has the

              <code
                class="c14"
              >
                unitsPerEm
              </code>
               value of 2048. If you set

              <code
                class="c14"
              >
                font-size
              </code>
               to be 20.48px, then one font-metric unit equals to 0.01px.
            </p>
            <div
              class="c4"
              height="2"
            />

            <p
              class="c13"
            >
              The
              <code
                class="c14"
              >
                sxHeight
              </code>
               value specifies the size of x-height in the number of font-metric units. Continuing the Open Sans example, we have the
              <code
                class="c14"
              >
                sxHeight
              </code>
               value of 1096. Consequently, the x-height will be 10.96px if

              <code
                class="c14"
              >
                font-size
              </code>
               is 20.48px, because one font-metric unit is then 0.01px as explained above.
            </p>
            <div
              class="c4"
              height="2"
            />

            <p
              class="c13"
            >
              Conversely, if you select Open Sans and the x-height value of 10.96px, then the
              <code
                class="c14"
              >
                font-size
              </code>
               value will be 20.48px. This is exactly how we convert x-height into

              <code
                class="c14"
              >
                font-size
              </code>
              .
            </p>
          </section>
          <div
            class="c1"
            height="3"
          />
          <section>
            <h3
              class="c2"
            >
              Line-height
            </h3>
            <div
              class="c4"
              height="2"
            />
            <p
              class="c13"
            >
              The
              <code
                class="c14"
              >
                line-height
              </code>
               value is then calculated in two steps.
            </p>
            <div
              class="c4"
              height="2"
            />

            <p
              class="c13"
            >
              First, we use the ratio of x-height to line-height to obtain the line-height value in px from the x-height value. For example, if you set x-height to be 10.96px and the ratio to be 1:3, then the line-height value is 32.88px.
            </p>
            <div
              class="c4"
              height="2"
            />

            <p
              class="c13"
            >
              In the second step, we convert the px value of line-height into the unitless value relative to
              <code
                class="c14"
              >
                font-size
              </code>
              , by dividing the former with the
              <code
                class="c14"
              >
                font-size
              </code>

              value. Continuing the same example, we divide the line-height value of 32.88px with the
              <code
                class="c14"
              >
                font-size
              </code>
               value of 20.48px, to obtain 1.6055. (We round to four decimal places.)
            </p>
          </section>
          <div
            class="c1"
            height="3"
          />
          <section>
            <h3
              class="c2"
            >
              Margin-top
            </h3>
            <div
              class="c4"
              height="2"
            />

            <p
              class="c13"
            >
              The
              <code
                class="c14"
              >
                margin-top
              </code>
               value for vertical space between paragraphs is calculated in three steps. The diagram below indicates what lengths the
              <code
                class="c14"
              >
                margin-top
              </code>
               value and the vertical space between paragraphs refer to, respectively:
            </p>
            <div
              class="c17"
              height="1"
            />
            <figure
              class="c18"
            >
              <img
                alt="Diagram indicating what length is referred to by the margin-top and the vertical space between paragraphs"
                class="c19"
                sizes="(min-width: 740px) 602px, (min-width: 600px) 516px, (min-width: 380px) calc(82vw + 40px), calc(66.67vw + 92px)"
                src="margin-top1x.png"
                srcset="margin-top1x.png 605w, margin-top2x.png 1210w, margin-top3x.png 1815w, margin-top4x.png 2430w"
              />
            </figure>
            <div
              class="c17"
              height="1"
            />
            <p
              class="c13"
            >
              (If you haven't read “Space between Paragraphs” in

              <a
                class="c16"
                href="preview"
              >
                the Preview page
              </a>
              , we recommend reading it first.)
            </p>
            <div
              class="c4"
              height="2"
            />
            <p
              class="c13"
            >
              Step 1—We first use the ratio of x-height to line-height to obtain the vertical space in px from x-height. If x-height is 10.96px and the ratio is 1:3, then we multiply 10.96px twice with two (
              <code
                class="c14"
              >
                =3-1
              </code>
              ) to obtain 43.84px.
            </p>
            <div
              class="c4"
              height="2"
            />

            <p
              class="c13"
            >
              Step 2—We then calculates the distance from the bottom of the x-height stripe to the top of the uppercase letter when

              <code
                class="c14"
              >
                margin-top
              </code>
               is zero. It is the amount of whitespace we need to subtract from the total vertical distance between paragraphs. For this purpose, we need two values.
            </p>
            <div
              class="c4"
              height="2"
            />

            <p
              class="c13"
            >
              The first value we need is the distance from the top of an uppercase letter to the top of the lowercase x. Another font metric value called
              <code
                class="c14"
              >
                sCapHeight
              </code>
               gives the distance from the top of an uppercase letter to the bottom of the x-height stripe. We then subtract from it the
              <code
                class="c14"
              >
                sxHeight
              </code>

              value. In our example, Open Sans has the

              <code
                class="c14"
              >
                sCapHeight
              </code>
               of 1462. Its difference from the

              <code
                class="c14"
              >
                sxHeight
              </code>
               value of 1096 is then 366. As one font-metric unit is 0.01px in our example, it amounts to 3.66px.
            </p>
            <div
              class="c4"
              height="2"
            />

            <p
              class="c13"
            >
              The second value we need is the distance between two consequtive x-height stripes. It equals to the difference between the line-height value and the x-height value. In our example, the former is 32.88px while the latter is 10.96px. Therefore, we have 21.92px.
            </p>
            <div
              class="c4"
              height="2"
            />

            <p
              class="c13"
            >
              Consequently, the difference between these two values, 18.26px (
              <code
                class="c14"
              >
                =21.92-3.66
              </code>
              ), is what we are after: the distance from the bottom of the x-height stripe to the top of the uppercase letter when
              <code
                class="c14"
              >
                margin-top
              </code>
               is zero.
            </p>
            <div
              class="c4"
              height="2"
            />

            <p
              class="c13"
            >
              Step 3—Finally, we obtain the extra amount of whitespace to achieve the desired distance between paragraphs from the two values obtained in the previous two steps. In our example, we subtract the whitespace in the absence of any margin, 18.26px, from the target whitespace of 43.84px. So the
              <code
                class="c14"
              >
                margin-top
              </code>

              value will be 25.58px (
              <code
                class="c14"
              >
                =43.84-18.26
              </code>
              ).
            </p>
            <div
              class="c4"
              height="2"
            />
            <p
              class="c13"
            >
              Phew! :-)
            </p>
          </section>
        </section>
        <div
          class="c1"
          height="3"
        />
      </main>
    </div>
  `);
});

test('renders props correctly', () => {
  const {getByTestId, rerender} = render(
    <GetCSS
      fontFamily={mockProps.fontFamily}
      fontSize={mockProps.fontSize}
      fontWeight={mockProps.fontWeight}
      lineHeight={mockProps.lineHeight}
      marginTop={mockProps.marginTop}
    />,
  );
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.fontFamily);
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.fontSize);
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.fontWeight);
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.lineHeight);
  expect(getByTestId('cssCode')).toHaveTextContent(mockProps.marginTop);

  const mockNewProps = {
    fontFamily: 'Roboto',
    fontSize: '17.4059',
    fontWeight: '500',
    lineHeight: '1.5',
    marginTop: '23.5674',
  };
  rerender(
    <GetCSS
      fontFamily={mockNewProps.fontFamily}
      fontSize={mockNewProps.fontSize}
      fontWeight={mockNewProps.fontWeight}
      lineHeight={mockNewProps.lineHeight}
      marginTop={mockNewProps.marginTop}
    />,
  );
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.fontFamily);
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.fontSize);
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.fontWeight);
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.lineHeight);
  expect(getByTestId('cssCode')).toHaveTextContent(mockNewProps.marginTop);
});

test('Clicking the button calls navigator.clipboard.writeText() with the appropriate argument', () => {
  // Mock the Clipboard function
  const mockWriteText = jest.fn();
  const originalNavigator = {...navigator};
  const originalClipboard = {...navigator.clipboard};
  const navigatorSpy = jest.spyOn(global, 'navigator', 'get');
  navigatorSpy.mockImplementation(() => ({
    ...originalNavigator,
    clipboard: {
      ...originalClipboard,
      writeText: mockWriteText,
    },
  }));

  const cssOutput = `p {
  font-family: '${mockProps.fontFamily}';
  font-size: ${mockProps.fontSize}px;
  font-weight: ${mockProps.fontWeight};
  line-height: ${mockProps.lineHeight};
}

p + p {
  margin-top: ${mockProps.marginTop}px;
}`;

  const {getByTestId} = render(
    <GetCSS
      fontFamily={mockProps.fontFamily}
      fontSize={mockProps.fontSize}
      fontWeight={mockProps.fontWeight}
      lineHeight={mockProps.lineHeight}
      marginTop={mockProps.marginTop}
    />,
  );
  user.click(getByTestId('copy-button'));

  expect(mockWriteText).toHaveBeenCalledTimes(1);
  expect(mockWriteText).toHaveBeenCalledWith(cssOutput);

  navigatorSpy.mockRestore();
});

test('Clicking the copy button calls document.execCommand if Clipboard API fails', () => {
  // Simulate Clipboard API failure
  const originalNavigator = {...navigator};
  const navigatorSpy = jest.spyOn(global, 'navigator', 'get');
  navigatorSpy.mockImplementation(() => ({
    ...originalNavigator,
    clipboard: false,
  }));
  // Mock document.queryCommandSupported
  const mockQueryCommandSupported = jest.fn();
  const originalQueryCommandSupported = document.queryCommandSupported;
  document.queryCommandSupported = mockQueryCommandSupported;

  const {getByTestId} = render(
    <GetCSS
      fontFamily={mockProps.fontFamily}
      fontSize={mockProps.fontSize}
      fontWeight={mockProps.fontWeight}
      lineHeight={mockProps.lineHeight}
      marginTop={mockProps.marginTop}
    />,
  );
  user.click(getByTestId('copy-button'));

  // verify
  expect(mockQueryCommandSupported).toHaveBeenCalledTimes(1);
  expect(mockQueryCommandSupported).toHaveBeenCalledWith('copy');
  // These assertions do not exactly test whether execCommand('copy') was called.
  // But QueryCommandSupported('copy') will be called when Clipboard API fails.
  // To assert on execCommand('copy'), we also need to mock document.createRange()
  // Jest is not meant to mock these "going-to-be-obsolete" functions.

  navigatorSpy.mockRestore();
  document.queryCommandSupported = originalQueryCommandSupported;
});

test('Clicking the copy button reveals the alert message and disables the button when neither Clipboard API nor document.execCommand works', () => {
  // Simulate Clipboard API failure
  const originalNavigator = {...navigator};
  const navigatorSpy = jest.spyOn(global, 'navigator', 'get');
  navigatorSpy.mockImplementation(() => ({
    ...originalNavigator,
    clipboard: false,
  }));
  // Simulate execCommand failure
  const mockQueryCommandSupported = jest.fn(command => {
    return false;
  });
  const originalQueryCommandSupported = document.queryCommandSupported;
  document.queryCommandSupported = mockQueryCommandSupported;

  const {getByTestId} = render(
    <GetCSS
      fontFamily={mockProps.fontFamily}
      fontSize={mockProps.fontSize}
      fontWeight={mockProps.fontWeight}
      lineHeight={mockProps.lineHeight}
      marginTop={mockProps.marginTop}
    />,
  );
  expect(getByTestId('whatHappened')).not.toBeVisible();
  expect(getByTestId('howToResolve')).not.toBeVisible();
  expect(getByTestId('copy-button')).not.toBeDisabled();

  user.click(getByTestId('copy-button'));
  expect(getByTestId('whatHappened')).toBeVisible();
  expect(getByTestId('howToResolve')).toBeVisible();
  expect(getByTestId('copy-button')).toBeDisabled();

  navigatorSpy.mockRestore();
  document.queryCommandSupported = originalQueryCommandSupported;
});

test('is accessible', async () => {
  const {container} = render(
    <GetCSS
      fontFamily={mockProps.fontFamily}
      fontSize={mockProps.fontSize}
      fontWeight={mockProps.fontWeight}
      lineHeight={mockProps.lineHeight}
      marginTop={mockProps.marginTop}
    />,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  cleanup();
});

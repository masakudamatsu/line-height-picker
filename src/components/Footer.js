import React from 'react';
import {
  ExternalLink,
  FooterWrapper,
  ParagraphFooter,
  SpacerVertical,
} from '../theme/style';

const Footer = props => {
  return (
    <FooterWrapper as="footer" data-testid="footer" page404={props.page404}>
      <SpacerVertical height="2" />
      <ParagraphFooter>
        Designed, Written, and Coded by Masa Kudamatsu (
        <ExternalLink href="https://twitter.com/masa_kudamatsu">
          @masa_kudamatsu
        </ExternalLink>
        ) in 2020.
      </ParagraphFooter>
      <SpacerVertical height="1" />
      <ParagraphFooter>
        GitHub hosts{' '}
        <ExternalLink href="https://github.com/masakudamatsu/line-height-picker">
          the source code for the Line-height Picker
        </ExternalLink>
        . Please report bugs and send feature requests there.
      </ParagraphFooter>
      <SpacerVertical height="1" />
      <ParagraphFooter>
        The Line-height Picker is powered by{' '}
        <ExternalLink href="https://github.com/opentypejs/opentype.js">
          Opentype.js
        </ExternalLink>{' '}
        for extracting font file information;{' '}
        <ExternalLink href="https://create-react-app.dev/">
          Create React App
        </ExternalLink>
        ,{' '}
        <ExternalLink href="https://reacttraining.com/react-router/">
          React Router
        </ExternalLink>
        ,{' '}
        <ExternalLink href="https://reactcommunity.org/react-transition-group/">
          React Transition Group
        </ExternalLink>
        ,{' '}
        <ExternalLink href="https://styled-components.com/">
          Styled Components
        </ExternalLink>
        ,{' '}
        <ExternalLink href="https://github.com/marcuswestin/store.js/">
          Store.js
        </ExternalLink>{' '}
        for building what you see and interact with;{' '}
        <ExternalLink href="https://www.cypress.io/">Cypress</ExternalLink>,{' '}
        <ExternalLink href="https://testing-library.com/">
          Testing Library
        </ExternalLink>
        , <ExternalLink href="https://jestjs.io/">Jest</ExternalLink>,{' '}
        <ExternalLink href="https://eslint.org/">ESLint</ExternalLink>, and{' '}
        <ExternalLink href="https://prettier.io/">Prettier</ExternalLink> for
        minimizing the number of errors you might encounter; and—last but not
        least—
        <ExternalLink href="https://www.nouvellenoire.ch/product/atl-aleph/">
          Aleph
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink href="https://www.typotheque.com/fonts/fedra_sans">
          Fedra Sans
        </ExternalLink>{' '}
        for the beautiful typefaces.
      </ParagraphFooter>
      <SpacerVertical height="1" />
      <ParagraphFooter>
        Special thanks go to{' '}
        <ExternalLink href="https://tbrown.org/">Tim Brown</ExternalLink> for
        inspiring the basic idea of the Line-height Picker through his book
        Flexible Typesetting,{' '}
        <ExternalLink href="https://kentcdodds.com/">
          Kent C. Dodds
        </ExternalLink>{' '}
        for teaching how to test JavaScript applications in his course
        TestingJavaScript.com, Philippe Apeloig and the{' '}
        <ExternalLink href="https://www.100daysofcode.com/">
          #100DaysOfCode
        </ExternalLink>{' '}
        community for encouragement during the 100 days of making the
        Line-height Picker.
      </ParagraphFooter>{' '}
      <SpacerVertical height="2" />
    </FooterWrapper>
  );
};

export default Footer;

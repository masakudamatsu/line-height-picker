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
        Designed and Coded by Masa Kudamatsu in 2020.
      </ParagraphFooter>
      <SpacerVertical height="1" />
      <ParagraphFooter>
        Powered by{' '}
        <ExternalLink href="https://opentype.js.org/">
          Opentype.js.
        </ExternalLink>
      </ParagraphFooter>
      <SpacerVertical height="1" />
      <ParagraphFooter>
        <ExternalLink href="https://github.com/masakudamatsu/line-height-picker">
          The source code is available at GitHub
        </ExternalLink>
        .
      </ParagraphFooter>
      <SpacerVertical height="2" />
    </FooterWrapper>
  );
};

export default Footer;

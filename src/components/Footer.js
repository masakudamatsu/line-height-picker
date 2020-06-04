import React from 'react';
import {ExternalLink, FooterWrapper, ParagraphFooter} from '../theme/style';

const Footer = props => {
  return (
    <FooterWrapper as="footer" data-testid="footer" page404={props.page404}>
      <ParagraphFooter>
        Designed and Coded by Masa Kudamatsu in 2020.
      </ParagraphFooter>
      <ParagraphFooter>
        Powered by{' '}
        <ExternalLink href="https://opentype.js.org/">
          Opentype.js.
        </ExternalLink>
      </ParagraphFooter>
      <ParagraphFooter>
        <ExternalLink href="https://github.com/masakudamatsu/line-height-picker">
          The source code is available at GitHub
        </ExternalLink>
        .
      </ParagraphFooter>
    </FooterWrapper>
  );
};

export default Footer;

import React from 'react';
import {ExternalLink, FooterWrapper} from '../theme/style';

const Footer = () => {
  return (
    <FooterWrapper as="footer" data-testid="footer">
      <p>
        Designed and Coded by Masa Kudamatsu in 2020 (
        <ExternalLink href="https://github.com/masakudamatsu/line-height-picker">
          SOURCE CODE
        </ExternalLink>
        ).
      </p>
      <p>
        Powered by{' '}
        <ExternalLink href="https://opentype.js.org/">
          Opentype.js.
        </ExternalLink>
      </p>
    </FooterWrapper>
  );
};

export default Footer;

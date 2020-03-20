import React from 'react';
import {SideMarginRegulator} from '../theme/style';
import Logo from './Logo';
import {InternalLink} from '../theme/style';

const Error = () => {
  return (
    <>
      <SideMarginRegulator>
        <Logo />
        <h2>404</h2>
        <p>
          We can't find the page you're looking for.{' '}
          <InternalLink to="/">Click here</InternalLink> to visit our web app's
          landing page.
        </p>
      </SideMarginRegulator>
    </>
  );
};

export default Error;

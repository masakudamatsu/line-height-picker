import React from 'react';
import {InternalLink, Logo} from '../theme/style';

const Error = () => {
  return (
    <>
      <Logo />
      <h2>404</h2>
      <p>
        We can't find the page you're looking for.{' '}
        <InternalLink to="/">Click here</InternalLink> to visit our web app's
        landing page.
      </p>
    </>
  );
};

export default Error;
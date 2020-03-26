import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import CssCode from './CssCode';
import {Button, NoWrap, PageTitle} from '../theme/style';

const GetCSS = () => {
  return (
    <>
      <Header stepNow={5} />
      <main>
        <PageTitle>Get CSS</PageTitle>
        <CssCode />
        <Button as={Link} to="/preview">
          Back to preview
          <NoWrap>←</NoWrap>
        </Button>
      </main>
    </>
  );
};

export default GetCSS;

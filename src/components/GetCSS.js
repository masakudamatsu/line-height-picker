import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import CssCode from './CssCode';
import {Button, NoWrap, PageTitle} from '../theme/style';

const GetCSS = props => {
  return (
    <>
      <Header stepNow={5} />
      <main>
        <PageTitle>Get CSS</PageTitle>
        <CssCode fontFamily={props.fontFamily} />
        <Button>Copy to clipboard</Button>
        <Button as={Link} to="/preview">
          Back to preview
          <NoWrap>←</NoWrap>
        </Button>
      </main>
    </>
  );
};

export default GetCSS;

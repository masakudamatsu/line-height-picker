import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import {Button, NoWrap} from '../theme/style';

const GetCSS = () => {
  return (
    <>
      <Header stepNow={5} />
      <main>
        <Button as={Link} to="/preview">
          Back to preview
          <NoWrap>←</NoWrap>
        </Button>
      </main>
    </>
  );
};

export default GetCSS;

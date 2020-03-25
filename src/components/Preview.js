import React from 'react';
import Header from './Header';
import {PageTitle} from '../theme/style';

const Preview = () => {
  return (
    <>
      <Header stepNow={4} />
      <main>
        <PageTitle>Preview sample paragraphs</PageTitle>
      </main>
    </>
  );
};

export default Preview;

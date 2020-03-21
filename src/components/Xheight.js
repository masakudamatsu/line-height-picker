import React from 'react';
import Header from './Header';
import XheightBox from './XheightBox';

const Xheight = () => {
  return (
    <>
      <Header stepNow={2} />
      <main>
        <h2>Set x-height</h2>
        <XheightBox />
      </main>
    </>
  );
};

export default Xheight;

import React from 'react';
import Header from './Header';
import XheightBox from './XheightBox';
import FontNameDisplay from './FontNameDisplay';

const Xheight = () => {
  return (
    <>
      <Header stepNow={2} />
      <main>
        <XheightBox />
        <FontNameDisplay />
      </main>
    </>
  );
};

export default Xheight;

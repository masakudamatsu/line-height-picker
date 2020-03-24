import React from 'react';
import Header from './Header';
import FontNameDisplay from './FontNameDisplay';

const ModularScale = () => {
  return (
    <>
      <Header stepNow={3} />
      <main>
        <FontNameDisplay />
      </main>
    </>
  );
};

export default ModularScale;

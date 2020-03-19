import React from 'react';
import {Button, NoWrap} from '../theme/style';
import {Link} from 'react-router-dom';

const DemoStartButton = () => {
  return (
    <Button as={Link} to="/x-height">
      <NoWrap>Demo</NoWrap>
      <NoWrap>→</NoWrap>
    </Button>
  );
};

export default DemoStartButton;

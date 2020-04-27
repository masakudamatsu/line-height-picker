import React from 'react';
import PropTypes from 'prop-types';

import {Button, NoWrap} from '../theme/style';
import {Link} from 'react-router-dom';

const DemoStartButton = props => {
  const handleClick = () => {
    props.handleDemo();
  };
  return (
    <Button as={Link} to="/x-height" onClick={handleClick}>
      Demo with Open Sans
      <NoWrap>→</NoWrap>
    </Button>
  );
};

DemoStartButton.propTypes = {
  handleDemo: PropTypes.func.isRequired,
};

export default DemoStartButton;

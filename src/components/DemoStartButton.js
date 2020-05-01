import React from 'react';
import PropTypes from 'prop-types';

import {ButtonWithRightArrow} from '../theme/style';
import {Link} from 'react-router-dom';

const DemoStartButton = props => {
  const handleClick = () => {
    props.handleDemo();
  };
  return (
    <ButtonWithRightArrow as={Link} to="/x-height" onClick={handleClick}>
      Start demo
    </ButtonWithRightArrow>
  );
};

DemoStartButton.propTypes = {
  handleDemo: PropTypes.func.isRequired,
};

export default DemoStartButton;

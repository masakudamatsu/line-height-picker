import React from 'react';
import PropTypes from 'prop-types';

import {ButtonWithRightArrow} from '../theme/style';
import {useHistory} from 'react-router-dom';

const DemoStartButton = props => {
  const history = useHistory();

  const handleClick = () => {
    props.handleDemo();
    history.push({
      pathname: '/x-height',
      state: {transition: 'slideleft', duration: 300},
    });
  };
  return (
    <ButtonWithRightArrow data-testid="demo-start-button" onClick={handleClick}>
      Start demo
    </ButtonWithRightArrow>
  );
};

DemoStartButton.propTypes = {
  handleDemo: PropTypes.func.isRequired,
};

export default DemoStartButton;

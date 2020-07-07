import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import {ButtonWithRightArrow} from '../theme/style';

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
      Demo
    </ButtonWithRightArrow>
  );
};

DemoStartButton.propTypes = {
  handleDemo: PropTypes.func.isRequired,
};

export default DemoStartButton;

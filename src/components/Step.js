import React from 'react';
import PropTypes from 'prop-types';

import {StepNumber, StepNumberBox} from '../theme/style';

const Step = props => {
  return (
    <StepNumberBox data-testid="StepNumberBox" now={props.now}>
      <StepNumber done={props.done}>{props.number}</StepNumber>
    </StepNumberBox>
  );
};

Step.propTypes = {
  done: PropTypes.bool,
  now: PropTypes.bool,
  number: PropTypes.number.isRequired,
};

export default Step;

import React from 'react';
import PropTypes from 'prop-types';

import {StepNumber, StepNumberBox} from '../theme/style';

import store from '../helper/store';

const Step = props => {
  let internalURL;
  if (props.done) {
    switch (props.number) {
      case 1:
        internalURL = '/';
        break;
      case 2:
        internalURL = '/x-height';
        break;
      case 3:
        internalURL = '/modular-scale';
        break;
      case 4:
        internalURL = '/preview';
        break;
      case 5:
        internalURL = '/css';
        break;
      default:
        break;
    }
  }
  if (props.number === 2 && store.get('x-height') === 'visited') {
    internalURL = '/x-height';
  }
  if (props.number === 3 && store.get('modular-scale') === 'visited') {
    internalURL = '/modular-scale';
  }
  if (props.number === 4 && store.get('preview') === 'visited') {
    internalURL = '/preview';
  }
  if (props.number === 5 && store.get('css') === 'visited') {
    internalURL = '/css';
  }

  return (
    <StepNumberBox data-testid="StepNumberBox" now={props.now}>
      <StepNumber to={internalURL} done={props.done}>
        {props.number}
      </StepNumber>
    </StepNumberBox>
  );
};

Step.propTypes = {
  done: PropTypes.bool,
  now: PropTypes.bool,
  number: PropTypes.number.isRequired,
};

export default Step;

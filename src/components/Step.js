import React from 'react';
import PropTypes from 'prop-types';

import {useHistory} from 'react-router';

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
  if (props.number === 1 && store.get('home') === 'visited') {
    internalURL = '/';
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

  let locationState;
  if (internalURL) {
    switch (props.stepNow) {
      case 1:
        if (props.number > 1) {
          locationState = {transition: 'slideleft', duration: 300};
        }
        break;
      case 2:
        if (props.number < 2) {
          locationState = {transition: 'slideright', duration: 300};
        }
        if (props.number > 2) {
          locationState = {transition: 'slideleft', duration: 300};
        }
        break;
      case 3:
        if (props.number < 3) {
          locationState = {transition: 'slideright', duration: 300};
        }
        if (props.number > 3) {
          locationState = {transition: 'slideleft', duration: 300};
        }
        break;
      case 4:
        if (props.number < 4) {
          locationState = {transition: 'slideright', duration: 300};
        }
        if (props.number > 4) {
          locationState = {transition: 'slideleft', duration: 300};
        }
        break;
      case 5:
        if (props.number < 5) {
          locationState = {transition: 'slideright', duration: 300};
        }
        break;
      default:
        break;
    }
  }

  const history = useHistory();
  const handleClick = event => {
    event.preventDefault();
    history.push({
      pathname: internalURL,
      state: locationState,
    });
  };

  return (
    <StepNumberBox data-testid="StepNumberBox" now={props.now}>
      <StepNumber
        href={internalURL ? `.${internalURL}` : ''}
        onClick={handleClick}
        done={props.done}
        tabIndex={props.done ? '0' : '-1'}
      >
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

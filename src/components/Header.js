import React from 'react';
import PropTypes from 'prop-types';
import store from '../helper/store';

import Step from './Step';
import Title from './Title';

import {
  HeaderWrapper,
  LogoFrame,
  LogoImage,
  StepIndicator,
  StepIndicatorWrapper,
} from '../theme/style';

import logoHeader1x from '../img/logoHeader1x.png';
import logoHeader2x from '../img/logoHeader2x.png';
import logoHeader3x from '../img/logoHeader3x.png';
import logoHeader4x from '../img/logoHeader4x.png';

const Header = props => {
  let step1 = <Step number={1} stepNow={props.stepNow} />;
  let step2 = <Step number={2} stepNow={props.stepNow} />;
  let step3 = <Step number={3} stepNow={props.stepNow} />;
  let step4 = <Step number={4} stepNow={props.stepNow} />;
  let step5 = <Step number={5} stepNow={props.stepNow} />;
  if (props.stepNow > 1 || store.get('home') === 'visited') {
    step1 = <Step number={1} done stepNow={props.stepNow} />;
  }
  if (props.stepNow > 2 || store.get('x-height') === 'visited') {
    step2 = <Step number={2} done stepNow={props.stepNow} />;
  }
  if (props.stepNow > 3 || store.get('modular-scale') === 'visited') {
    step3 = <Step number={3} done stepNow={props.stepNow} />;
  }
  if (props.stepNow > 4 || store.get('preview') === 'visited') {
    step4 = <Step number={4} done stepNow={props.stepNow} />;
  }
  if (store.get('css') === 'visited') {
    step5 = <Step number={5} done stepNow={props.stepNow} />;
  }
  switch (props.stepNow) {
    case 0: // Gray out all the steps, even if already visited
      step1 = <Step number={1} stepNow={props.stepNow} />;
      step2 = <Step number={2} stepNow={props.stepNow} />;
      step3 = <Step number={3} stepNow={props.stepNow} />;
      step4 = <Step number={4} stepNow={props.stepNow} />;
      step5 = <Step number={5} stepNow={props.stepNow} />;
      break;
    case 1:
      step1 = <Step number={1} now stepNow={props.stepNow} />;
      break;
    case 2:
      step2 = <Step number={2} now stepNow={props.stepNow} />;
      break;
    case 3:
      step3 = <Step number={3} now stepNow={props.stepNow} />;
      break;
    case 4:
      step4 = <Step number={4} now stepNow={props.stepNow} />;
      break;
    case 5:
      step5 = <Step number={5} now stepNow={props.stepNow} />;
      break;
    default:
      break;
  }
  return (
    <HeaderWrapper as="header">
      <Title stepNow={props.stepNow} />
      <LogoFrame header topPage={props.topPage}>
        <a href="/">
          <LogoImage
            src={logoHeader1x}
            srcSet={`${logoHeader1x} 163w, ${logoHeader2x} 326w, ${logoHeader3x} 489w, ${logoHeader4x} 652w`}
            sizes="(min-width: 728px) 163px, 140px"
            alt="Logo of Line-height Picker"
          />
        </a>
      </LogoFrame>
      <StepIndicatorWrapper>
        <StepIndicator data-testid="stepIndicator">
          {step1}
          {step2}
          {step3}
          {step4}
          {step5}
        </StepIndicator>
      </StepIndicatorWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  stepNow: PropTypes.number.isRequired,
  topPage: PropTypes.bool,
};
export default Header;

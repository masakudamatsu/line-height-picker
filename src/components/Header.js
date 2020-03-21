import React from 'react';
import {Logo} from '../theme/style';
import {
  HeaderWrapper,
  StepIndicator,
  StepNumber,
  StepNumberBox,
} from '../theme/style';

const Step = props => {
  return (
    <StepNumberBox now={props.now}>
      <StepNumber done={props.done}>{props.number}</StepNumber>
    </StepNumberBox>
  );
};

const Header = props => {
  let step1 = <Step number="1" />;
  let step2 = <Step number="2" />;
  let step3 = <Step number="3" />;
  let step4 = <Step number="4" />;
  let step5 = <Step number="5" />;
  if (props.stepNow > 1) {
    step1 = <Step number="1" done="done" />;
  }
  if (props.stepNow > 2) {
    step2 = <Step number="2" done="done" />;
  }
  if (props.stepNow > 3) {
    step3 = <Step number="3" done="done" />;
  }
  if (props.stepNow > 4) {
    step4 = <Step number="4" done="done" />;
  }
  switch (props.stepNow) {
    case 1:
      step1 = <Step number="1" now="now" />;
      break;
    case 2:
      step2 = <Step number="2" now="now" />;
      break;
    case 3:
      step3 = <Step number="3" now="now" />;
      break;
    case 4:
      step4 = <Step number="4" now="now" />;
      break;
    case 5:
      step5 = <Step number="5" now="now" />;
      break;
    default:
      break;
  }
  return (
    <HeaderWrapper>
      <Logo header />
      <StepIndicator data-testid="stepIndicator">
        {step1}
        {step2}
        {step3}
        {step4}
        {step5}
      </StepIndicator>
    </HeaderWrapper>
  );
};

export default Header;

import React from 'react';
import Title from './Title';
import Step from './Step';
import {HeaderWrapper, Logo, StepIndicator} from '../theme/style';

const Header = props => {
  let step1 = <Step number="1" />;
  let step2 = <Step number="2" />;
  let step3 = <Step number="3" />;
  let step4 = <Step number="4" />;
  let step5 = <Step number="5" />;
  if (props.stepNow > 1) {
    step1 = <Step number="1" done />;
  }
  if (props.stepNow > 2) {
    step2 = <Step number="2" done />;
  }
  if (props.stepNow > 3) {
    step3 = <Step number="3" done />;
  }
  if (props.stepNow > 4) {
    step4 = <Step number="4" done />;
  }
  switch (props.stepNow) {
    case 1:
      step1 = <Step number="1" now />;
      break;
    case 2:
      step2 = <Step number="2" now />;
      break;
    case 3:
      step3 = <Step number="3" now />;
      break;
    case 4:
      step4 = <Step number="4" now />;
      break;
    case 5:
      step5 = <Step number="5" now />;
      break;
    default:
      break;
  }
  return (
    <HeaderWrapper>
      <Title />
      <Logo header topPage={props.topPage} />
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

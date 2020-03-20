import React from 'react';
import {Logo} from '../theme/style';
import {
  HeaderWrapper,
  StepIndicator,
  StepNumber,
  StepNumberBox,
} from '../theme/style';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo header />
      <StepIndicator data-testid="stepIndicator">
        <StepNumberBox>
          <StepNumber done>1</StepNumber>
        </StepNumberBox>
        <StepNumberBox now>
          <StepNumber>2</StepNumber>
        </StepNumberBox>
        <StepNumberBox>
          <StepNumber>3</StepNumber>
        </StepNumberBox>
        <StepNumberBox>
          <StepNumber>4</StepNumber>
        </StepNumberBox>
        <StepNumberBox>
          <StepNumber>5</StepNumber>
        </StepNumberBox>
      </StepIndicator>
    </HeaderWrapper>
  );
};

export default Header;

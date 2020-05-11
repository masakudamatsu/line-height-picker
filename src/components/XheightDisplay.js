import React from 'react';
import {
  UserDataDisplay,
  SectionTitle,
  UserDataDisplayWrapper,
} from '../theme/style';

const XheightDisplay = props => {
  return (
    <UserDataDisplayWrapper data-testid="XheightDisplay">
      <SectionTitle>X-height chosen:</SectionTitle>
      <UserDataDisplay data-testid="xHeightValue">
        {props.xHeightPx}px
      </UserDataDisplay>
    </UserDataDisplayWrapper>
  );
};

export default XheightDisplay;

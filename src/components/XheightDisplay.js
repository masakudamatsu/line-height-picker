import React from 'react';
import {
  UserDataDisplay,
  UserDataDisplayTitle,
  UserDataDisplayWrapper,
} from '../theme/style';

const XheightDisplay = props => {
  return (
    <UserDataDisplayWrapper data-testid="XheightDisplay">
      <UserDataDisplayTitle>X-height chosen:</UserDataDisplayTitle>
      <UserDataDisplay data-testid="xHeightValue">
        {props.xHeight}
      </UserDataDisplay>
    </UserDataDisplayWrapper>
  );
};

export default XheightDisplay;

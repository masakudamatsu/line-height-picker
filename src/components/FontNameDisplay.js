import React from 'react';
import {
  UserDataDisplay,
  UserDataDisplayTitle,
  UserDataDisplayWrapper,
} from '../theme/style';

const FontNameDisplay = props => {
  return (
    <UserDataDisplayWrapper data-testid="FontNameDisplay">
      <UserDataDisplayTitle>Font chosen:</UserDataDisplayTitle>
      <UserDataDisplay data-testid="UserDataDisplay">
        {props.fontFamily}
      </UserDataDisplay>
    </UserDataDisplayWrapper>
  );
};

export default FontNameDisplay;

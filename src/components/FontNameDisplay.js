import React from 'react';
import {
  UserDataDisplay,
  UserDataDisplayTitle,
  UserDataDisplayWrapper,
} from '../theme/style';

const FontNameDisplay = () => {
  return (
    <UserDataDisplayWrapper data-testid="FontNameDisplay">
      <UserDataDisplayTitle>Font chosen:</UserDataDisplayTitle>
      <UserDataDisplay>Open Sans Regular</UserDataDisplay>
    </UserDataDisplayWrapper>
  );
};

export default FontNameDisplay;

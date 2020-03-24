import React from 'react';
import {
  UserDataDisplay,
  UserDataDisplayTitle,
  UserDataDisplayWrapper,
} from '../theme/style';

const XheightDisplay = () => {
  return (
    <UserDataDisplayWrapper data-testid="XheightDisplay">
      <UserDataDisplayTitle>X-height chosen:</UserDataDisplayTitle>
      <UserDataDisplay>12.3456px</UserDataDisplay>
    </UserDataDisplayWrapper>
  );
};

export default XheightDisplay;

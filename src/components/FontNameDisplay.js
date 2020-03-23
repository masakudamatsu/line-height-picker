import React from 'react';
import {
  FontName,
  FontNameDisplayTitle,
  FontNameDisplayWrapper,
} from '../theme/style';

const FontNameDisplay = () => {
  return (
    <FontNameDisplayWrapper data-testid="FontNameDisplay">
      <FontNameDisplayTitle>Font chosen:</FontNameDisplayTitle>
      <FontName>Open Sans Regular</FontName>
    </FontNameDisplayWrapper>
  );
};

export default FontNameDisplay;

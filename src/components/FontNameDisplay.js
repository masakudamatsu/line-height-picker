import React from 'react';
import PropTypes from 'prop-types';

import {
  UserDataDisplay,
  UserDataDisplayTitle,
  UserDataDisplayWrapper,
} from '../theme/style';

const FontNameDisplay = props => {
  return (
    <UserDataDisplayWrapper data-testid="FontNameDisplay">
      <UserDataDisplayTitle>Font chosen:</UserDataDisplayTitle>
      <UserDataDisplay data-testid="font-family-name">
        {props.fontFamily}
      </UserDataDisplay>
      <UserDataDisplay data-testid="font-subfamily-name">
        {props.fontSubfamily}
      </UserDataDisplay>
    </UserDataDisplayWrapper>
  );
};

FontNameDisplay.propTypes = {
  fontFamily: PropTypes.string.isRequired,
  fontSubfamily: PropTypes.string.isRequired,
};

export default FontNameDisplay;

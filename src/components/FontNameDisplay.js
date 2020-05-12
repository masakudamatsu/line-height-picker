import React from 'react';
import PropTypes from 'prop-types';

import {UserDataDisplay} from '../theme/style';

const FontNameDisplay = props => {
  return (
    <UserDataDisplay
      data-testid="FontNameDisplay"
      fontFamily={props.fontFamily}
      fontWeight={props.fontWeight}
    >
      <span data-testid="font-family-name">{props.fontFamily}</span>
      <span> </span>
      <span data-testid="font-subfamily-name">{props.fontSubfamily}</span>
    </UserDataDisplay>
  );
};

FontNameDisplay.propTypes = {
  fontFamily: PropTypes.string,
  fontSubfamily: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default FontNameDisplay;

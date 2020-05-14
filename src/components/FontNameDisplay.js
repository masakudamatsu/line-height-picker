import React from 'react';
import PropTypes from 'prop-types';

import {UserDataDisplay} from '../theme/style';

const FontNameDisplay = props => {
  const fontNameString = `${props.fontFamily} ${props.fontSubfamily}`;
  return (
    <UserDataDisplay
      data-testid="FontNameDisplay"
      fontFamily={props.fontFamily}
      fontWeight={props.fontWeight}
    >
      {fontNameString}
    </UserDataDisplay>
  );
};

FontNameDisplay.propTypes = {
  fontFamily: PropTypes.string,
  fontSubfamily: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default FontNameDisplay;

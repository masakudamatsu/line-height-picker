import React from 'react';
import PropTypes from 'prop-types';

import {UserDataDisplay} from '../theme/style';

const FontNameDisplay = props => {
  const fontNameString = `${props.fontFamily} ${props.fontSubfamily}`;
  return (
    <UserDataDisplay
      data-testid="FontNameDisplay"
      ascender={props.ascender}
      capHeight={props.capHeight}
      descender={props.descender}
      fontFamily={props.fontFamily}
      fontWeight={props.fontWeight}
      unitsPerEm={props.unitsPerEm}
    >
      {fontNameString}
    </UserDataDisplay>
  );
};

FontNameDisplay.propTypes = {
  ascender: PropTypes.number,
  capHeight: PropTypes.number,
  descender: PropTypes.number,
  fontFamily: PropTypes.string,
  fontSubfamily: PropTypes.string,
  fontWeight: PropTypes.string,
  unitsPerEm: PropTypes.number,
};

export default FontNameDisplay;

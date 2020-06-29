import React from 'react';
import PropTypes from 'prop-types';

import {UserDataDisplay, UserDataDisplayWrapper} from '../theme/style';

const FontNameDisplay = props => {
  const fontNameString = `${props.fontFamily} ${props.fontSubfamily}`;
  return (
    <UserDataDisplayWrapper>
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
    </UserDataDisplayWrapper>
  );
};

FontNameDisplay.propTypes = {
  ascender: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
  capHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
  descender: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
  fontFamily: PropTypes.string,
  fontSubfamily: PropTypes.string,
  fontWeight: PropTypes.string,
  unitsPerEm: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
};

export default FontNameDisplay;

import React from 'react';
import PropTypes from 'prop-types';

import {
  UserDataDisplay,
  SectionTitle,
  SectionTitleWrapper,
  UserDataDisplayWrapper,
} from '../theme/style';

const FontNameDisplay = props => {
  return (
    <UserDataDisplayWrapper data-testid="FontNameDisplay">
      <SectionTitleWrapper displayBelow>
      <SectionTitle>Font chosen:</SectionTitle>
      </SectionTitleWrapper>
      <UserDataDisplay
        data-testid="font-family-name"
        fontFamily={props.fontFamily}
        fontWeight={props.fontWeight}
      >
        {props.fontFamily}
      </UserDataDisplay>
      <UserDataDisplay
        data-testid="font-subfamily-name"
        fontFamily={props.fontFamily}
        fontWeight={props.fontWeight}
      >
        {props.fontSubfamily}
      </UserDataDisplay>
    </UserDataDisplayWrapper>
  );
};

FontNameDisplay.propTypes = {
  fontFamily: PropTypes.string,
  fontSubfamily: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default FontNameDisplay;

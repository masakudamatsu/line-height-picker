import React from 'react';
import PropTypes from 'prop-types';
import {HiddenH1} from '../theme/style';
import {pageTitle} from '../helper/metaData';

const Title = props => {
  let pageTitleText;
  switch (props.stepNow) {
    case 0:
      pageTitleText = pageTitle.notFound;
      break;
    case 1:
      pageTitleText = pageTitle.home;
      break;
    case 2:
      pageTitleText = pageTitle.xHeight;
      break;
    case 3:
      pageTitleText = pageTitle.modularScale;
      break;
    case 4:
      pageTitleText = pageTitle.preview;
      break;
    case 5:
      pageTitleText = pageTitle.css;
      break;
    default:
      break;
  }
  return <HiddenH1>{pageTitleText}</HiddenH1>;
};

Title.propTypes = {
  stepNow: PropTypes.number.isRequired,
};

export default Title;

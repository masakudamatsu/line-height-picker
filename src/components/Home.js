import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';
import {ButtonContainer, Logo} from '../theme/style';
import FontFileUploader from './FontFileUploader';
import DemoStartButton from './DemoStartButton';
import FontFileErrorMessage from './FontFileErrorMessage';
import FontTableBox from './FontTableBox';

const Home = props => {
  React.useEffect(() => {
    sessionStorage.setItem('home', 'visited');
  }, []);
  return (
    <>
      <main>
        <Logo />
        <Description />
        <ButtonContainer>
          <FontFileUploader
            home
            validateFileType={props.validateFileType}
            handleFontFile={props.handleFontFile}
          >
            Upload font file
          </FontFileUploader>
          <DemoStartButton handleDemo={props.handleDemo} />
        </ButtonContainer>
        <FontFileErrorMessage
          data-testid="error-message-font-file"
          fontFileError={props.fontFileError}
        />
        <FontTableBox
          fontFamilyError={props.fontFamilyError}
          updateFontMetrics={props.updateFontMetrics}
          validateFontFamily={props.validateFontFamily}
        />
      </main>
    </>
  );
};

Home.propTypes = {
  validateFileType: PropTypes.func.isRequired,
  handleDemo: PropTypes.func.isRequired,
  handleFontFile: PropTypes.func.isRequired,
  fontFileError: PropTypes.string.isRequired,
  fontFamilyError: PropTypes.bool,
  updateFontMetrics: PropTypes.func.isRequired,
  validateFontFamily: PropTypes.func.isRequired,
};

export default Home;

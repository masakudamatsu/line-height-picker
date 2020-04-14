import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Description from './Description';
import {ButtonContainer, Logo} from '../theme/style';
import FontFileUploader from './FontFileUploader';
import DemoStartButton from './DemoStartButton';
import FontFileErrorMessage from './FontFileErrorMessage';

const Home = props => {
  return (
    <>
      <Header stepNow={1} topPage={true} />
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
          <DemoStartButton />
        </ButtonContainer>
        <FontFileErrorMessage
          data-testid="error-message-font-file"
          fontFileError={props.fontFileError}
        />
      </main>
    </>
  );
};

Home.propTypes = {
  validateFileType: PropTypes.func.isRequired,
  handleFontFile: PropTypes.func.isRequired,
  fontFileError: PropTypes.string.isRequired,
};

export default Home;

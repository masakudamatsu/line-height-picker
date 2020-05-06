import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';
import {ButtonContainer, ButtonWrapper, Logo} from '../theme/style';
import FontFileUploader from './FontFileUploader';
import DemoStartButton from './DemoStartButton';
import FontFileErrorMessage from './FontFileErrorMessage';
import FontTableBox from './FontTableBox';

import store from '../helper/store';

const Home = props => {
  React.useEffect(() => {
    store.set('home', 'visited');
  }, []);
  return (
    <>
      <main>
        <Logo />
        <Description />
        <ButtonWrapper belowBodyText>
          <FontFileUploader
            home
            validateFileType={props.validateFileType}
            handleFontFile={props.handleFontFile}
          >
            Open font file…
          </FontFileUploader>
        </ButtonWrapper>
        <ButtonWrapper>
          <DemoStartButton handleDemo={props.handleDemo} />
        </ButtonWrapper>
        <FontFileErrorMessage
          data-testid="error-message-font-file"
          fontFileError={props.fontFileError}
        />
        <FontTableBox updateFontMetrics={props.updateFontMetrics} />
      </main>
    </>
  );
};

Home.propTypes = {
  validateFileType: PropTypes.func.isRequired,
  handleDemo: PropTypes.func.isRequired,
  handleFontFile: PropTypes.func.isRequired,
  fontFileError: PropTypes.string.isRequired,
  updateFontMetrics: PropTypes.func.isRequired,
};

export default Home;

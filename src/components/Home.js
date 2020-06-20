import React from 'react';
import PropTypes from 'prop-types';
import store from '../helper/store';

import About from './About';
import DemoStartButton from './DemoStartButton';
import Description from './Description';
import FontFileErrorMessage from './FontFileErrorMessage';
import FontFileUploader from './FontFileUploader';

import {
  Logo,
  MainLandingPage,
  RightAligner,
  Section,
  SpacerVertical,
} from '../theme/style';

const Home = props => {
  React.useEffect(() => {
    store.set('home', 'visited');
  }, []);
  return (
    <>
      <MainLandingPage>
        <RightAligner>
          <SpacerVertical height="3" />
          <Section>
            <Logo />
            <SpacerVertical height="3" />
            <Description />
          </Section>
          <SpacerVertical height="3" />
          <Section>
            <FontFileUploader
              handleFontFile={props.handleFontFile}
              home
              validateFileType={props.validateFileType}
            >
              Open font file…
            </FontFileUploader>
            <SpacerVertical height="2" />
            <DemoStartButton handleDemo={props.handleDemo} />
            <FontFileErrorMessage
              data-testid="error-message-font-file"
              fontFileError={props.fontFileError}
            />
            <SpacerVertical height="3" />
          </Section>
          <About />
          <SpacerVertical height="3" />
        </RightAligner>
      </MainLandingPage>
    </>
  );
};

Home.propTypes = {
  fontFileError: PropTypes.string.isRequired,
  handleDemo: PropTypes.func.isRequired,
  handleFontFile: PropTypes.func.isRequired,
  validateFileType: PropTypes.func.isRequired,
};

export default Home;

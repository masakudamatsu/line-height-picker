import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';
import {
  Logo,
  MainLandingPage,
  RightAligner,
  Section,
  SpacerVertical,
} from '../theme/style';
import FontFileUploader from './FontFileUploader';
import DemoStartButton from './DemoStartButton';
import FontFileErrorMessage from './FontFileErrorMessage';
import About from './About';
import store from '../helper/store';

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
              home
              validateFileType={props.validateFileType}
              handleFontFile={props.handleFontFile}
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
  validateFileType: PropTypes.func.isRequired,
  handleDemo: PropTypes.func.isRequired,
  handleFontFile: PropTypes.func.isRequired,
  fontFileError: PropTypes.string.isRequired,
};

export default Home;

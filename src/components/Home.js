import React from 'react';
import PropTypes from 'prop-types';
import store from '../helper/store';

import About from './About';
import DemoStartButton from './DemoStartButton';
import Description from './Description';
import FontFileErrorMessage from './FontFileErrorMessage';
import FontFileUploader from './FontFileUploader';

import {
  HiddenH1,
  LogoFrame,
  LogoImage,
  MainLandingPage,
  RightAligner,
  Section,
  SpacerVertical,
} from '../theme/style';

import logo1x from '../img/logo1x.png';
import logo2x from '../img/logo2x.png';
import logo3x from '../img/logo3x.png';
import logo4x from '../img/logo4x.png';

const Home = props => {
  React.useEffect(() => {
    store.set('home', 'visited');
  }, []);
  return (
    <>
      <MainLandingPage>
        <RightAligner>
          <SpacerVertical height="3" />
          <Section as="header">
            <LogoFrame>
              <LogoImage
                width="605"
                height="250"
                src={logo1x}
                srcSet={`${logo1x} 605w, ${logo2x} 1210w, ${logo3x} 1815w, ${logo4x} 2420w`}
                sizes="(min-width: 728px) 605px, (min-width: 557px) 518px, 100vw"
                alt="Logo of Line-height Picker"
              />
            </LogoFrame>
            <SpacerVertical height="3" />
            <Description />
          </Section>
          <SpacerVertical height="4" />
          <Section>
            <HiddenH1 as="h2">Getting started</HiddenH1>
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
            <SpacerVertical height="4" />
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

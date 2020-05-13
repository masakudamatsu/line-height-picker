import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';
import {ButtonWrapper, Logo, Section, Spacer} from '../theme/style';
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
        <Section>
          <Logo />
          <Description />
        </Section>
        <Section>
          <Spacer height="3" />
          <ButtonWrapper belowBodyText>
            <FontFileUploader
              home
              validateFileType={props.validateFileType}
              handleFontFile={props.handleFontFile}
            >
              Open font file…
            </FontFileUploader>
          </ButtonWrapper>
          <Spacer height="2" />
          <ButtonWrapper>
            <DemoStartButton handleDemo={props.handleDemo} />
          </ButtonWrapper>
          <FontFileErrorMessage
            data-testid="error-message-font-file"
            fontFileError={props.fontFileError}
          />
          <Spacer height="3" />
        </Section>
        <Section>
          <FontTableBox updateFontMetrics={props.updateFontMetrics} />
        </Section>
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

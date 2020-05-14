import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import SampleParagraphs from './SampleParagraphs';
import SectionFont from './SectionFont';
import XheightBox from './XheightBox';
import ModularScaleBoxes from './ModularScaleBoxes';
import {
  ButtonWithRightArrow,
  Form,
  Section,
  SectionTitle,
  SectionTitleWrapper,
  Spacer,
} from '../theme/style';

import store from '../helper/store';

const Preview = props => {
  React.useEffect(() => {
    store.set('preview', 'visited');
  }, []);

  const [redirect, setRedirect] = React.useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    const xHeightErrors = document.getElementById('x-height-in-pixel').validity;
    const xHeightRatioErrors = document.getElementById('x-height-for-ratio')
      .validity;
    const lineHeightRatioErrors = document.getElementById(
      'line-height-for-ratio',
    ).validity;
    if (
      xHeightErrors.valid &&
      xHeightRatioErrors.valid &&
      lineHeightRatioErrors.valid
    ) {
      setRedirect(true);
    } else if (!xHeightErrors.valid) {
      props.handleNoXHeight(xHeightErrors);
      document.getElementById('x-height-in-pixel').focus();
    } else if (!xHeightRatioErrors.valid) {
      props.handleNoModularScale(xHeightRatioErrors);
      document.getElementById('x-height-for-ratio').focus();
    } else {
      props.handleNoModularScale(lineHeightRatioErrors);
      document.getElementById('line-height-for-ratio').focus();
    }
  };
  if (redirect) {
    return <Redirect push to="/css" />;
    // The push attribute keeps the browser history, instead of overriding, so the user can click the Back button in the browser to be back to the landing page. See https://reacttraining.com/react-router/web/api/Redirect/push-bool
  }
  return (
    <>
      <main>
        <Form noValidate onSubmit={handleSubmit}>
          <Section>
            <Spacer height="3" />
            <SectionTitleWrapper>
              <SectionTitle>Preview paragraphs</SectionTitle>
            </SectionTitleWrapper>
            <Spacer height="2" />
            <SampleParagraphs
              fontMetrics={props.fontMetrics}
              fontSize={props.fontSize}
              lineHeight={props.lineHeight}
              marginTop={props.marginTop}
            />
          </Section>
          <Section>
            <Spacer height="2" />
            <ButtonWithRightArrow type="submit" primary>
              Get CSS code
            </ButtonWithRightArrow>
            <Spacer height="3" />
          </Section>
          <Section>
            <Spacer height="3" />
            <SectionTitleWrapper aboveBodyText>
              <SectionTitle>Line spacing</SectionTitle>
            </SectionTitleWrapper>
            <Spacer height="2" />
            <ModularScaleBoxes
              xHeightRatio={props.xHeightRatio}
              handleXHeightRatioChange={props.handleXHeightRatioChange}
              lineHeightRatio={props.lineHeightRatio}
              handleLineHeightRatioChange={props.handleLineHeightRatioChange}
              validateModularScale={props.validateModularScale}
              modularScaleRangeError={props.modularScaleRangeError}
              modularScaleStepError={props.modularScaleStepError}
            />
          </Section>
          <Section>
            <Spacer height="3" />
            <SectionTitleWrapper>
              <SectionTitle>Text size</SectionTitle>
            </SectionTitleWrapper>
            <Spacer height="2" />
            <XheightBox
              handleXHeightChange={props.handleXHeightChange}
              xHeightPx={props.xHeightPx}
              validateXHeight={props.validateXHeight}
              xHeightRangeError={props.xHeightRangeError}
              xHeightStepError={props.xHeightStepError}
            />
          </Section>
          <SectionFont
            fontFamily={props.fontFamily}
            fontFileError={props.fontFileError}
            fontSubfamily={props.fontSubfamily}
            fontWeight={props.fontWeight}
            handleFontFile={props.handleFontFile}
            validateFileType={props.validateFileType}
          />
        </Form>
        <Spacer height="3" />
      </main>
    </>
  );
};

Preview.propTypes = {
  fontFamily: PropTypes.string,
  fontFileError: PropTypes.string.isRequired,
  fontMetrics: PropTypes.object,
  fontSize: PropTypes.string,
  fontSubfamily: PropTypes.string,
  fontWeight: PropTypes.string,
  handleFontFile: PropTypes.func.isRequired,
  handleLineHeightRatioChange: PropTypes.func.isRequired,
  handleNoModularScale: PropTypes.func.isRequired,
  handleNoXHeight: PropTypes.func.isRequired,
  handleXHeightChange: PropTypes.func.isRequired,
  handleXHeightRatioChange: PropTypes.func.isRequired,
  lineHeight: PropTypes.string,
  lineHeightRatio: PropTypes.string,
  marginTop: PropTypes.string,
  modularScaleRangeError: PropTypes.string,
  modularScaleStepError: PropTypes.string,
  xHeightPx: PropTypes.string,
  xHeightRangeError: PropTypes.string,
  xHeightRatio: PropTypes.string,
  xHeightStepError: PropTypes.string,
  validateFileType: PropTypes.func.isRequired,
  validateModularScale: PropTypes.func.isRequired,
  validateXHeight: PropTypes.func.isRequired,
};

export default Preview;

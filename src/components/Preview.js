import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import SampleParagraphs from './SampleParagraphs';
import SectionFont from './SectionFont';
import XheightBox from './XheightBox';
import ModularScaleBoxes from './ModularScaleBoxes';
import {
  ButtonWithRightArrow,
  Form,
  Section,
  SectionTitle,
  SpacerVertical,
} from '../theme/style';

import store from '../helper/store';

const Preview = props => {
  React.useEffect(() => {
    store.set('preview', 'visited');
  }, []);

  const history = useHistory();

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
      history.push({
        pathname: '/css',
        state: {transition: 'slideleft', duration: 300},
      });
    } else if (!xHeightErrors.valid) {
      props.handleNoXHeight(xHeightErrors);
      document.getElementById('x-height-in-pixel').focus();
      props.disableCssButton();
    } else if (!xHeightRatioErrors.valid) {
      props.handleNoModularScale(xHeightRatioErrors);
      document.getElementById('x-height-for-ratio').focus();
      props.disableCssButton();
    } else {
      props.handleNoModularScale(lineHeightRatioErrors);
      document.getElementById('line-height-for-ratio').focus();
      props.disableCssButton();
    }
  };
  return (
    <>
      <main>
        <Form noValidate onSubmit={handleSubmit}>
          <Section>
            <SpacerVertical height="3" />
            <SectionTitle>Preview paragraphs</SectionTitle>
            <SpacerVertical height="2" />
            <SampleParagraphs
              fontMetrics={props.fontMetrics}
              fontSize={props.fontSize}
              lineHeight={props.lineHeight}
              marginTop={props.marginTop}
            />
            <SpacerVertical height="2" />
          </Section>
          <Section>
            <ButtonWithRightArrow
              type="submit"
              primary
              disabled={props.cssButtonDisabled}
            >
              Get CSS code
            </ButtonWithRightArrow>
            <SpacerVertical height="3" />
          </Section>
          <Section>
            <SpacerVertical height="3" />
            <SectionTitle>Line spacing</SectionTitle>
            <SpacerVertical height="2" />
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
            <SpacerVertical height="3" />
            <SectionTitle>Text size</SectionTitle>
            <SpacerVertical height="2" />
            <XheightBox
              handleXHeightChange={props.handleXHeightChange}
              xHeightPx={props.xHeightPx}
              validateXHeight={props.validateXHeight}
              xHeightRangeError={props.xHeightRangeError}
              xHeightStepError={props.xHeightStepError}
            />
          </Section>
          <SectionFont
            ascender={props.ascender}
            capHeight={props.capHeight}
            descender={props.descender}
            fontFamily={props.fontFamily}
            fontFileError={props.fontFileError}
            fontSubfamily={props.fontSubfamily}
            fontWeight={props.fontWeight}
            handleFontFile={props.handleFontFile}
            unitsPerEm={props.unitsPerEm}
            validateFileType={props.validateFileType}
          />
        </Form>
        <SpacerVertical height="3" />
      </main>
    </>
  );
};

Preview.propTypes = {
  ascender: PropTypes.number,
  capHeight: PropTypes.number,
  cssButtonDisabled: PropTypes.bool,
  descender: PropTypes.number,
  disableCssButton: PropTypes.func.isRequired,
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
  unitsPerEm: PropTypes.number,
  validateFileType: PropTypes.func.isRequired,
  validateModularScale: PropTypes.func.isRequired,
  validateXHeight: PropTypes.func.isRequired,
  xHeightPx: PropTypes.string,
  xHeightRangeError: PropTypes.string,
  xHeightRatio: PropTypes.string,
  xHeightStepError: PropTypes.string,
};

export default Preview;

import React from 'react';
import PropTypes from 'prop-types';

import ModularScaleBoxes from './ModularScaleBoxes';
import SectionFont from './SectionFont';
import XheightBox from './XheightBox';
import {
  ButtonWithRightArrow,
  Form,
  Section,
  SectionTitle,
  Spacer,
} from '../theme/style';
import {useHistory} from 'react-router-dom';

import store from '../helper/store';

const ModularScale = props => {
  React.useEffect(() => {
    store.set('modular-scale', 'visited');
  }, []);

  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    const xHeightErrors = document.getElementById('x-height-for-ratio')
      .validity;
    const lineHeightErrors = document.getElementById('line-height-for-ratio')
      .validity;
    const xHeightValueErrors = document.getElementById('x-height-in-pixel')
      .validity;

    if (
      xHeightErrors.valid &&
      lineHeightErrors.valid &&
      xHeightValueErrors.valid
    ) {
      history.push({
        pathname: '/preview',
        state: {transition: 'slideleft', duration: 300},
      });
    } else if (!xHeightErrors.valid) {
      props.handleNoModularScale(xHeightErrors);
      document.getElementById('x-height-for-ratio').focus();
      props.disablePreviewButton();
    } else if (!lineHeightErrors.valid) {
      props.handleNoModularScale(lineHeightErrors);
      document.getElementById('line-height-for-ratio').focus();
      props.disablePreviewButton();
    } else if (!xHeightValueErrors.valid) {
      props.handleNoXHeight(xHeightValueErrors);
      document.getElementById('x-height-in-pixel').focus();
      props.disablePreviewButton();
    }
  };
  return (
    <>
      <main>
        <Section>
          <Spacer height="3" />
          <SectionTitle>Line spacing</SectionTitle>
          <Spacer height="2" />
          <Form noValidate onSubmit={handleSubmit}>
            <ModularScaleBoxes
              handleXHeightRatioChange={props.handleXHeightRatioChange}
              handleLineHeightRatioChange={props.handleLineHeightRatioChange}
              lineHeightRatio={props.lineHeightRatio}
              modularScaleRangeError={props.modularScaleRangeError}
              modularScaleStepError={props.modularScaleStepError}
              validateModularScale={props.validateModularScale}
              xHeightRatio={props.xHeightRatio}
            />{' '}
            <Spacer height="2" />
            <ButtonWithRightArrow
              type="submit"
              primary
              disabled={props.previewButtonDisabled}
            >
              Preview
            </ButtonWithRightArrow>
          </Form>
          <Spacer height="3" />
        </Section>
        <Section>
          <Spacer height="3" />
          <SectionTitle>Text size</SectionTitle>
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
        <Spacer height="3" />
      </main>
    </>
  );
};

ModularScale.propTypes = {
  ascender: PropTypes.number,
  capHeight: PropTypes.number,
  descender: PropTypes.number,
  disablePreviewButton: PropTypes.func.isRequired,
  fontFamily: PropTypes.string,
  fontFileError: PropTypes.string.isRequired,
  fontSubfamily: PropTypes.string,
  fontWeight: PropTypes.string,
  handleFontFile: PropTypes.func.isRequired,
  handleLineHeightRatioChange: PropTypes.func.isRequired,
  handleNoModularScale: PropTypes.func.isRequired,
  handleNoXHeight: PropTypes.func.isRequired,
  handleXHeightRatioChange: PropTypes.func.isRequired,
  lineHeightRatio: PropTypes.string,
  modularScaleRangeError: PropTypes.string,
  modularScaleStepError: PropTypes.string,
  previewButtonDisabled: PropTypes.bool,
  unitsPerEm: PropTypes.number,
  validateFileType: PropTypes.func.isRequired,
  validateModularScale: PropTypes.func.isRequired,
  xHeightPx: PropTypes.string,
  xHeightRangeError: PropTypes.string,
  xHeightRatio: PropTypes.string,
  xHeightStepError: PropTypes.string,
};

export default ModularScale;

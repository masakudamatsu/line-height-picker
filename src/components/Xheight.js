import React from 'react';
import PropTypes from 'prop-types';
import store from '../helper/store';
import {useHistory} from 'react-router-dom';

import SectionFont from './SectionFont';
import XheightBox from './XheightBox';
import XheightGuide from './XheightGuide';

import {
  ButtonWithRightArrow,
  ControlPanel,
  Flexbox,
  Form,
  Section,
  SectionTitle,
  SpacerHorizontal,
  SpacerVertical,
} from '../theme/style';

const Xheight = props => {
  React.useEffect(() => {
    store.set('x-height', 'visited');
  }, []);

  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    const xHeightInputField = document.getElementById('x-height-in-pixel'); // useRef(null) or createRef() doesn't work for some reason
    const errors = xHeightInputField.validity;
    if (errors.valid) {
      history.push({
        pathname: '/modular-scale',
        state: {transition: 'slideleft', duration: 300},
      });
    } else {
      props.handleNoXHeight(errors);
      xHeightInputField.focus();
      props.disableNextButton();
    }
  };

  return (
    <>
      <main>
        <Flexbox>
          <Section>
            <SpacerVertical height="3" />
            <SectionTitle>Setting text size</SectionTitle>
            <SpacerVertical height="2" />
            <Form noValidate onSubmit={handleSubmit}>
              <XheightBox
                handleXHeightChange={props.handleXHeightChange}
                validateXHeight={props.validateXHeight}
                xHeightPx={props.xHeightPx}
                xHeightRangeError={props.xHeightRangeError}
                xHeightStepError={props.xHeightStepError}
              />{' '}
              <SpacerVertical height="2" />
              <ButtonWithRightArrow
                type="submit"
                disabled={props.nextButtonDisabled}
                primary
              >
                Next
              </ButtonWithRightArrow>
              <SpacerVertical height="3" />
            </Form>
          </Section>
          <SpacerHorizontal width="2" />
          <ControlPanel>
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
          </ControlPanel>
        </Flexbox>
        <SpacerVertical height="3" />
        <XheightGuide />
        <SpacerVertical height="3" />
      </main>
    </>
  );
};

Xheight.propTypes = {
  ascender: PropTypes.number,
  capHeight: PropTypes.number,
  descender: PropTypes.number,
  disableNextButton: PropTypes.func.isRequired,
  fontFamily: PropTypes.string,
  fontFileError: PropTypes.string.isRequired,
  fontSubfamily: PropTypes.string,
  fontWeight: PropTypes.string,
  handleFontFile: PropTypes.func.isRequired,
  handleNoXHeight: PropTypes.func.isRequired,
  handleXHeightChange: PropTypes.func.isRequired,
  nextButtonDisabled: PropTypes.bool,
  unitsPerEm: PropTypes.number,
  validateFileType: PropTypes.func.isRequired,
  validateXHeight: PropTypes.func.isRequired,
  xHeightPx: PropTypes.string,
  xHeightRangeError: PropTypes.string.isRequired,
  xHeightStepError: PropTypes.string.isRequired,
};

export default Xheight;

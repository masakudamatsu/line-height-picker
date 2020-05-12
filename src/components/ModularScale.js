import React from 'react';
import PropTypes from 'prop-types';

import ModularScaleBoxes from './ModularScaleBoxes';
import SectionFont from './SectionFont';
import XheightDisplay from './XheightDisplay';
import {
  ButtonWithLeftArrow,
  ButtonWithRightArrow,
  ButtonContainer,
  ButtonWrapper,
  Form,
  Section,
  SectionTitle,
  SectionTitleWrapper,
} from '../theme/style';
import {Link, Redirect} from 'react-router-dom';

import store from '../helper/store';

const ModularScale = props => {
  React.useEffect(() => {
    store.set('modular-scale', 'visited');
  }, []);

  const [redirect, setRedirect] = React.useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    const xHeightErrors = document.getElementById('x-height-for-ratio')
      .validity;
    const lineHeightErrors = document.getElementById('line-height-for-ratio')
      .validity;
    if (xHeightErrors.valid && lineHeightErrors.valid) {
      setRedirect(true);
    } else if (!xHeightErrors.valid) {
      props.handleNoModularScale(xHeightErrors);
      document.getElementById('x-height-for-ratio').focus();
    } else {
      props.handleNoModularScale(lineHeightErrors);
      document.getElementById('line-height-for-ratio').focus();
    }
  };
  if (redirect) {
    return <Redirect push to="/preview" />;
    // The push attribute keeps the browser history, instead of overriding, so the user can click the Back button in the browser to be back to the landing page. See https://reacttraining.com/react-router/web/api/Redirect/push-bool
  }
  return (
    <>
      <main>
        <Section>
          <SectionTitleWrapper aboveBodyText>
            <SectionTitle>Line spacing</SectionTitle>
          </SectionTitleWrapper>
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
            <ButtonWrapper belowBodyText>
              <ButtonWithRightArrow type="submit" primary>
                Preview
              </ButtonWithRightArrow>
            </ButtonWrapper>
          </Form>
        </Section>
        <SectionFont
          fontFamily={props.fontFamily}
          fontFileError={props.fontFileError}
          fontSubfamily={props.fontSubfamily}
          fontWeight={props.fontWeight}
          handleFontFile={props.handleFontFile}
          validateFileType={props.validateFileType}
        />
        <Section>
          <XheightDisplay xHeightPx={props.xHeightPx} />
          <ButtonContainer>
            <ButtonWithLeftArrow as={Link} to="/x-height">
              Change x-height
            </ButtonWithLeftArrow>
          </ButtonContainer>
        </Section>
      </main>
    </>
  );
};

ModularScale.propTypes = {
  fontFamily: PropTypes.string,
  fontFileError: PropTypes.string.isRequired,
  fontSubfamily: PropTypes.string,
  fontWeight: PropTypes.string,
  handleFontFile: PropTypes.func.isRequired,
  handleLineHeightRatioChange: PropTypes.func.isRequired,
  handleNoModularScale: PropTypes.func.isRequired,
  handleXHeightRatioChange: PropTypes.func.isRequired,
  lineHeightRatio: PropTypes.string,
  modularScaleRangeError: PropTypes.string,
  modularScaleStepError: PropTypes.string,
  validateFileType: PropTypes.func.isRequired,
  validateModularScale: PropTypes.func.isRequired,
  xHeightPx: PropTypes.string,
  xHeightRatio: PropTypes.string,
};

export default ModularScale;

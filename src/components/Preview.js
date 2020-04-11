import React from 'react';
import {Redirect} from 'react-router-dom';

import Header from './Header';
import SampleParagraphs from './SampleParagraphs';
import FontNameDisplay from './FontNameDisplay';
import FontFileErrorMessage from './FontFileErrorMessage';
import ChangeFontButton from './ChangeFontButton';
import XheightBox from './XheightBox';
import ModularScaleBoxes from './ModularScaleBoxes';
import {
  Button,
  ButtonContainer,
  ExternalLink,
  PageTitle,
  ParagraphOneRemRightAligned,
} from '../theme/style';

const Preview = props => {
  const [redirect, setRedirect] = React.useState(false);
  const handleClick = event => {
    const xHeightErrors = document.getElementById('x-height').validity;
    const xHeightRatioErrors = document.getElementById('x-height-scale')
      .validity;
    const lineHeightRatioErrors = document.getElementById('line-height-scale')
      .validity;
    if (
      xHeightErrors.valid &&
      xHeightRatioErrors.valid &&
      lineHeightRatioErrors.valid
    ) {
      setRedirect(true);
    } else if (!xHeightErrors.valid) {
      props.handleNoXHeight(xHeightErrors);
    } else if (!xHeightRatioErrors.valid) {
      props.handleNoModularScale(xHeightRatioErrors);
    } else {
      props.handleNoModularScale(lineHeightRatioErrors);
    }
  };
  if (redirect) {
    return <Redirect push to="/css" />;
    // The push attribute keeps the browser history, instead of overriding, so the user can click the Back button in the browser to be back to the landing page. See https://reacttraining.com/react-router/web/api/Redirect/push-bool
  }
  return (
    <>
      <Header stepNow={4} />
      <main>
        <PageTitle>Preview sample paragraphs</PageTitle>
        <SampleParagraphs
          fontFamily={props.fontFamily}
          fontSize={props.fontSize}
          fontWeight={props.fontWeight}
          lineHeight={props.lineHeight}
          marginTop={props.marginTop}
        />
        <ParagraphOneRemRightAligned>
          An excerpt from{' '}
          <ExternalLink href="https://news.stanford.edu/2005/06/14/jobs-061505/">
            Steve Jobs’s Stanford University Commencement address in 2005
          </ExternalLink>
        </ParagraphOneRemRightAligned>
        <ButtonContainer>
          <Button onClick={handleClick}>Get CSS code</Button>
        </ButtonContainer>
        <FontNameDisplay
          fontFamily={props.fontFamily}
          fontSubfamily={props.fontSubfamily}
        />
        <ChangeFontButton
          validateFileType={props.validateFileType}
          handleFontFile={props.handleFontFile}
        />
        <FontFileErrorMessage
          data-testid="error-message-font-file"
          fontFileError={props.fontFileError}
        />
        <XheightBox
          xHeightToFontSize={props.xHeightToFontSize}
          xHeightPx={props.xHeightPx}
          validateXHeight={props.validateXHeight}
          xHeightRangeError={props.xHeightRangeError}
          xHeightStepError={props.xHeightStepError}
        />
        <ModularScaleBoxes
          xHeightRatio={props.xHeightRatio}
          handleXHeightRatio={props.handleXHeightRatio}
          lineHeightRatio={props.lineHeightRatio}
          handleLineHeightRatio={props.handleLineHeightRatio}
          validateModularScale={props.validateModularScale}
          modularScaleRangeError={props.modularScaleRangeError}
          modularScaleStepError={props.modularScaleStepError}
        />
      </main>
    </>
  );
};

export default Preview;

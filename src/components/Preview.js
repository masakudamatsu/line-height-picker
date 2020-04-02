import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import SampleParagraphs from './SampleParagraphs';
import FontNameDisplay from './FontNameDisplay';
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
        />
        <ParagraphOneRemRightAligned>
          An excerpt from{' '}
          <ExternalLink href="https://news.stanford.edu/2005/06/14/jobs-061505/">
            Steve Jobs’s Stanford University Commencement address in 2005
          </ExternalLink>
        </ParagraphOneRemRightAligned>
        <ButtonContainer>
          <Button as={Link} to="/css">
            Get CSS code
          </Button>
        </ButtonContainer>
        <FontNameDisplay fontFamily={props.fontFamily} />
        <ChangeFontButton handleFontFile={props.handleFontFile} />
        <XheightBox
          xHeightToFontSize={props.xHeightToFontSize}
          xHeightPx={props.xHeightPx}
        />
        <ModularScaleBoxes
          xHeightRatio={props.xHeightRatio}
          handleXHeightRatio={props.handleXHeightRatio}
          lineHeightRatio={props.lineHeightRatio}
          handleLineHeightRatio={props.handleLineHeightRatio}
        />
      </main>
    </>
  );
};

export default Preview;

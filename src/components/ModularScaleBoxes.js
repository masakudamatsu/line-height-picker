import React from 'react';
import {
  CenterAlignWrapperHorizontal,
  Form,
  PageTitle,
  Label,
  ModularScaleInput,
  ParagraphOneRemRightAligned,
  RatioWrapper,
} from '../theme/style';

const ModularScaleBoxes = props => {
  const handleXHeightChange = event => {
    const newXHeightRatio = event.target.value;
    props.handleXHeightRatio(newXHeightRatio);
  };
  const handleLineHeightChange = event => {
    const newLineHeightRatio = event.target.value;
    props.handleLineHeightRatio(newLineHeightRatio);
  };
  return (
    <Form>
      <PageTitle>Pick modular scale</PageTitle>
      <p>Set the ratio of</p>
      <CenterAlignWrapperHorizontal>
        <RatioWrapper>
          <Label htmlFor="x-height-scale">x-height</Label>
          <ModularScaleInput
            id="x-height-scale"
            onChange={handleXHeightChange}
            value={props.xHeightRatio}
          />
        </RatioWrapper>
        <span>to</span>
        <RatioWrapper>
          <Label htmlFor="line-height-scale">line-height</Label>
          <ModularScaleInput
            id="line-height-scale"
            onChange={handleLineHeightChange}
            value={props.lineHeightRatio}
          />
        </RatioWrapper>
      </CenterAlignWrapperHorizontal>
      <ParagraphOneRemRightAligned>
        up to 4 decimal places
      </ParagraphOneRemRightAligned>
    </Form>
  );
};

export default ModularScaleBoxes;

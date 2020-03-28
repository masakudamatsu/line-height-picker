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
  return (
    <Form>
      <PageTitle>Pick modular scale</PageTitle>
      <p>Set the ratio of</p>
      <CenterAlignWrapperHorizontal>
        <RatioWrapper>
          <Label htmlFor="x-height-scale">x-height</Label>
          <ModularScaleInput
            id="x-height-scale"
            value={props.xHeightRatio}
          />
        </RatioWrapper>
        <span>to</span>
        <RatioWrapper>
          <Label htmlFor="line-height-scale">line-height</Label>
          <ModularScaleInput
            id="line-height-scale"
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

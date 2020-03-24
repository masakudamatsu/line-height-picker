import React from 'react';
import {
  CenterAlignWrapperHorizontal,
  Form,
  FormTitle,
  Label,
  ModularScaleInput,
  ParagraphOneRemRightAligned,
  RatioWrapper,
} from '../theme/style';

const ModularScaleBoxes = () => {
  return (
    <Form>
      <FormTitle>Pick modular scale</FormTitle>
      <p>Set the ratio of</p>
      <CenterAlignWrapperHorizontal>
        <RatioWrapper>
          <Label htmlFor="x-height-scale">x-height</Label>
          <ModularScaleInput id="x-height-scale" />
        </RatioWrapper>
        <span>to</span>
        <RatioWrapper>
          <Label htmlFor="line-height-scale">line-height</Label>
          <ModularScaleInput id="line-height-scale" />
        </RatioWrapper>
      </CenterAlignWrapperHorizontal>
      <ParagraphOneRemRightAligned>
        up to 4 decimal places
      </ParagraphOneRemRightAligned>
    </Form>
  );
};

export default ModularScaleBoxes;

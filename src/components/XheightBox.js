import React from 'react';
import {
  Form,
  NumberInput,
  NumberInputWrapper,
  Label,
  ParagraphOneRem,
} from '../theme/style';

const XheightBox = () => {
  return (
    <Form>
      <Label htmlFor="x-height">Set x-height</Label>
      <NumberInputWrapper>
        <NumberInput id="x-height" />
        <span>px</span>
      </NumberInputWrapper>
      <ParagraphOneRem>up to 4 decimal places</ParagraphOneRem>
    </Form>
  );
};

export default XheightBox;

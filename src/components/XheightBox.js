import React from 'react';
import {
  Form,
  XheightInput,
  NumberInputWrapper,
  Label,
  ParagraphOneRem,
} from '../theme/style';

const XheightBox = props => {
  const handleChange = event => {
    const xHeightValue = event.target.value;
    props.xHeightToFontSize(xHeightValue);
  };
  return (
    <Form>
      <Label htmlFor="x-height">Set x-height</Label>
      <NumberInputWrapper>
        <XheightInput
          id="x-height"
          onChange={handleChange}
          value={props.xHeightPx}
        />
        <span>px</span>
      </NumberInputWrapper>
      <ParagraphOneRem>up to 4 decimal places</ParagraphOneRem>
    </Form>
  );
};

export default XheightBox;

import React from 'react';
import {
  Form,
  XheightInput,
  NumberInputWrapper,
  Label,
  ParagraphOneRem,
} from '../theme/style';

const XheightBox = props => {
  const [stepError, setStepError] = React.useState(false);
  const handleChange = event => {
    event.target.checkValidity();
    if (event.target.validity.stepMismatch) {
      setStepError(true);
    } else {
      setStepError(false);
    }
    const xHeightValue = event.target.value;
    props.xHeightToFontSize(xHeightValue);
  };

  return (
    <Form>
      <Label htmlFor="x-height">Set x-height</Label>
      <NumberInputWrapper>
        <XheightInput
          data-testid="x-height-in-pixel"
          id="x-height"
          onChange={handleChange}
          value={props.xHeightPx}
        />
        <span>px</span>
      </NumberInputWrapper>
      <ParagraphOneRem error={stepError}>
        up to 4 decimal places
      </ParagraphOneRem>
    </Form>
  );
};

export default XheightBox;

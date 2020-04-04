import React from 'react';
import {
  Form,
  XheightInput,
  NumberInputWrapper,
  Label,
  ParagraphOneRem,
} from '../theme/style';

const XheightBox = props => {
  const [rangeError, setRangeError] = React.useState(false);
  const [stepError, setStepError] = React.useState(false);
  const handleChange = event => {
    event.target.checkValidity();
    if (
      event.target.validity.rangeUnderflow
    ) {
      setRangeError(true);
    } else {
      setRangeError(false);
    }
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
          min="1"
          onChange={handleChange}
          value={props.xHeightPx}
        />
        <span>px</span>
      </NumberInputWrapper>
      <ParagraphOneRem error={stepError}>
        up to 4 decimal places
      </ParagraphOneRem>
      {rangeError ? (
        <ParagraphOneRem error={rangeError}>
          Enter a number between 1 and 100 inclusive
        </ParagraphOneRem>
      ) : null}
    </Form>
  );
};

export default XheightBox;

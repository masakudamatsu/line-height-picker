import React from 'react';
import {
  AlertMessage,
  Form,
  XheightInput,
  NumberInputWrapper,
  Label,
  ParagraphOneRem,
} from '../theme/style';

const XheightBox = props => {
  const handleChange = event => {
    const errors = event.target.validity;
    props.validateXHeight(errors);
    const xHeightValue = event.target.value;
    props.handleXHeightChange(xHeightValue);
  };

  return (
    <Form>
      <Label htmlFor="x-height">Set x-height</Label>
      <NumberInputWrapper>
        <XheightInput
          data-testid="x-height-in-pixel"
          id="x-height"
          max="100"
          min="1"
          onChange={handleChange}
          required
          value={props.xHeightPx}
        />
        <span>px</span>
      </NumberInputWrapper>
      <ParagraphOneRem
        data-testid="instruction-x-height"
        errorText={props.xHeightStepError}
      >
        up to 4 decimal places
      </ParagraphOneRem>
      <AlertMessage
        data-testid="error-message-x-height"
        error={props.xHeightRangeError}
        errorText={props.xHeightRangeError}
      >
        Enter a number between 1 and 100 inclusive
      </AlertMessage>
    </Form>
  );
};

export default XheightBox;

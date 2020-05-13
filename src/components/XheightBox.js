import React from 'react';
import PropTypes from 'prop-types';

import {
  AlertMessage,
  InputInstruction,
  XheightInput,
  XheightInputUnit,
  InputWrapper,
  Label,
  Spacer,
} from '../theme/style';

const XheightBox = props => {
  const handleChange = event => {
    const xHeightValue = event.target.value;
    props.handleXHeightChange(xHeightValue);
  };
  const handleBlur = event => {
    const inputValue = event.target.value;
    const errors = event.target.validity;
    props.validateXHeight(inputValue, errors);
  };
  return (
    <>
      <InputWrapper>
        <Label htmlFor="x-height-in-pixel">Enter x-height</Label>
        <XheightInput
          data-testid="x-height-in-pixel"
          id="x-height-in-pixel"
          onBlur={handleBlur}
          onChange={handleChange}
          pattern="([1-9]|[1-9][0-9])([.,]\d{1,4})?|100"
          required
          value={props.xHeightPx}
          aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
        />
        <XheightInputUnit>px</XheightInputUnit>
      </InputWrapper>
      <Spacer height="1" />
      <InputInstruction
        id="howManyDecimalPlacesAllowed"
        data-testid="instruction-x-height"
        errorText={props.xHeightStepError}
      >
        up to 4 decimal places
      </InputInstruction>
      <Spacer height="2" />
      <AlertMessage
        id="rangeOfNumbersAllowed"
        data-testid="error-message-x-height"
        error={props.xHeightRangeError}
        errorText={props.xHeightRangeError}
      >
        Please enter a number between 1 and 100 inclusive.
      </AlertMessage>
    </>
  );
};

XheightBox.propTypes = {
  handleXHeightChange: PropTypes.func.isRequired,
  validateXHeight: PropTypes.func.isRequired,
  xHeightPx: PropTypes.string,
  xHeightRangeError: PropTypes.string,
  xHeightStepError: PropTypes.string,
};

export default XheightBox;

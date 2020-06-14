import React from 'react';
import PropTypes from 'prop-types';

import {
  AlertIcon,
  AlertMessage,
  InputInstruction,
  InputInstructionWrapper,
  XheightInput,
  XheightInputUnit,
  InputWrapper,
  Label,
  ParagraphOneRem,
  SpacerVertical,
} from '../theme/style';

const XheightBox = props => {
  const handleChange = event => {
    const xHeightValue = event.target.value;
    const errors = event.target.validity;
    props.handleXHeightChange(xHeightValue, errors);
  };
  const handleBlur = event => {
    const inputValue = event.target.value;
    const errors = event.target.validity;
    props.validateXHeight(inputValue, errors);
  };
  const handleKeyDown = event => {
    const stepValueTimesTen = 1;
    const errors = event.target.validity;
    let inputValue = Number(event.target.value); // say, 10.12345

    // Extract the number up to 1st decimal digit
    const inputValueTimesTen = inputValue * 10; // say, 101.2345
    let inputValueTimesTenTruncated = Math.trunc(inputValueTimesTen); // say, 101

    // Extract the last 3 decimal digits
    const inputValueTimesTenDecimalDigits =
      inputValueTimesTen - inputValueTimesTenTruncated; // say, 0.2345
    const inputValueLastThreeDecimalDigits = Math.round(
      inputValueTimesTenDecimalDigits * 1000,
    ); // say, 235

    // Increase the value by 0.1
    if (event.key === 'ArrowUp') {
      const newInputValueTimesTenTruncated =
        inputValueTimesTenTruncated + stepValueTimesTen; // say, 102

      // Avoid floating point math quirks
      const newInputValueTimesTenThousand =
        newInputValueTimesTenTruncated * 1000 +
        inputValueLastThreeDecimalDigits; // 102235
      const newInputValue = Number(
        (newInputValueTimesTenThousand / 10000).toFixed(4),
      ).toString(); // '10.2235'
      // toFixed(4) to avoid floating-point math fractional values (e.g. 10.299999... => 10.3000)
      // Number() to remove trailing zeros (e.g. '10.1000' => 10.1) (see https://stackoverflow.com/a/19623253/11847654)
      // toString() to convert into string
      props.handleXHeightChange(newInputValue, errors);
    }
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
          onKeyDown={handleKeyDown}
          pattern="([1-9]|[1-9][0-9])([.,]\d{1,4})?|100"
          required
          value={props.xHeightPx}
          aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
          error={props.xHeightRangeError || props.xHeightStepError}
        />
        <XheightInputUnit>px</XheightInputUnit>
      </InputWrapper>
      <SpacerVertical height="1" />
      <InputInstructionWrapper>
        <AlertIcon inputInstruction error={props.xHeightStepError} />
        <InputInstruction
          id="howManyDecimalPlacesAllowed"
          data-testid="instruction-x-height"
          errorText={props.xHeightStepError}
        >
          up to 4 decimal places
        </InputInstruction>
      </InputInstructionWrapper>
      <SpacerVertical height="2" />
      <AlertMessage error={props.xHeightRangeError}>
        <AlertIcon error={props.xHeightRangeError} />
        <ParagraphOneRem
          id="rangeOfNumbersAllowed"
          data-testid="error-message-x-height"
          errorText={props.xHeightRangeError}
        >
          Please enter a number between 1 and 100 inclusive.
        </ParagraphOneRem>
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

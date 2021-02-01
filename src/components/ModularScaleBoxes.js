import React from 'react';
import PropTypes from 'prop-types';

import {
  AlertIcon,
  AlertMessage,
  InputInstruction,
  InputInstructionWrapper,
  Label,
  ModularScaleInput,
  ModularScaleInputUnit,
  ModularScaleInputWrapper,
  ParagraphOneRem,
  RatioWrapper,
  SpacerVertical,
} from '../theme/style';

import handleArrowKey from '../helper/handleArrowKey';

const ModularScaleBoxes = props => {
  const handleXHeightBlur = event => {
    const inputValue = event.target.value;
    const errors = event.target.validity;
    props.validateXHeightRatio(inputValue, errors);
  };
  const handleLineHeightRatioBlur = event => {
    const inputValue = event.target.value;
    const errors = event.target.validity;
    props.validateLineHeightRatio(inputValue, errors);
  };
  const handleXHeightChange = event => {
    const newXHeightRatio = event.target.value;
    const errors = event.target.validity;
    props.handleXHeightRatioChange(newXHeightRatio, errors);
  };
  const handleLineHeightChange = event => {
    const newLineHeightRatio = event.target.value;
    const errors = event.target.validity;
    props.handleLineHeightRatioChange(newLineHeightRatio, errors);
  };

  let ignoreKeyForXHeight = false; // For preventing the cursor from moving to the leftmost position after pressing ArrowUp key. See https://stackoverflow.com/a/1081114/11847654
  const handleXHeightKeyDown = event => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      handleArrowKey(
        event,
        props.handleXHeightRatioChange,
        props.validateXHeightRatio,
        ignoreKeyForXHeight,
      );
    }
  };
  let ignoreKeyForLineHeight = false; // For preventing the cursor from moving to the leftmost position after pressing ArrowUp key. See https://stackoverflow.com/a/1081114/11847654
  const handleLineHeightKeyDown = event => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      handleArrowKey(
        event,
        props.handleLineHeightRatioChange,
        props.validateLineHeightRatio,
        ignoreKeyForLineHeight,
      );
    }
  };

  return (
    <>
      <ParagraphOneRem>Enter the ratio of</ParagraphOneRem>
      <SpacerVertical height="1" />
      <ModularScaleInputWrapper>
        <RatioWrapper>
          <Label htmlFor="x-height-for-ratio">x-height</Label>
          <ModularScaleInput
            data-testid="x-height-for-ratio"
            id="x-height-for-ratio"
            error={props.xHeightRatioRangeError || props.xHeightRatioStepError}
            onBlur={handleXHeightBlur}
            onChange={handleXHeightChange}
            onKeyDown={handleXHeightKeyDown}
            pattern="([1-9]|[1-9][0-9])([.,]\d{1,4})?|100"
            required
            value={props.xHeightRatio}
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
          />
        </RatioWrapper>
        <ModularScaleInputUnit>:</ModularScaleInputUnit>
        <RatioWrapper>
          <Label htmlFor="line-height-for-ratio">line-height</Label>
          <ModularScaleInput
            data-testid="line-height-for-ratio"
            id="line-height-for-ratio"
            error={
              props.lineHeightRatioRangeError || props.lineHeightRatioStepError
            }
            onBlur={handleLineHeightRatioBlur}
            onChange={handleLineHeightChange}
            onKeyDown={handleLineHeightKeyDown}
            pattern="([1-9]|[1-9][0-9])([.,]\d{1,4})?|100"
            required
            value={props.lineHeightRatio}
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
          />
        </RatioWrapper>
      </ModularScaleInputWrapper>
      <SpacerVertical height="1" />
      <InputInstructionWrapper>
        <AlertIcon
          error={props.xHeightRatioStepError || props.lineHeightRatioStepError}
          inputInstruction
        />
        <InputInstruction
          id="howManyDecimalPlacesAllowed"
          data-testid="instruction-modular-scale"
          errorText={
            props.xHeightRatioStepError || props.lineHeightRatioStepError
          }
        >
          up to 4 decimal places
        </InputInstruction>
      </InputInstructionWrapper>

      <SpacerVertical height="2" />

      <AlertMessage
        error={props.xHeightRatioRangeError || props.lineHeightRatioRangeError}
      >
        <AlertIcon
          error={
            props.xHeightRatioRangeError || props.lineHeightRatioRangeError
          }
        />
        <ParagraphOneRem
          id="rangeOfNumbersAllowed"
          data-testid="error-message-modular-scale"
          errorText={
            props.xHeightRatioRangeError || props.lineHeightRatioRangeError
          }
        >
          Please enter a number between 1 and 100 inclusive.
        </ParagraphOneRem>
      </AlertMessage>
    </>
  );
};

ModularScaleBoxes.propTypes = {
  handleLineHeightRatioChange: PropTypes.func.isRequired,
  handleXHeightRatioChange: PropTypes.func.isRequired,
  lineHeightRatio: PropTypes.string,
  validateLineHeightRatio: PropTypes.func.isRequired,
  validateXHeightRatio: PropTypes.func.isRequired,
  xHeightRatio: PropTypes.string,
  xHeightRatioRangeError: PropTypes.string,
  xHeightRatioStepError: PropTypes.string,
};

export default ModularScaleBoxes;

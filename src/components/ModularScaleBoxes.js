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
            onBlur={handleXHeightBlur}
            onChange={handleXHeightChange}
            pattern="([1-9]|[1-9][0-9])([.,]\d{1,4})?|100"
            required
            value={props.xHeightRatio}
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
            error={props.xHeightRatioRangeError || props.xHeightRatioStepError}
          />
        </RatioWrapper>
        <ModularScaleInputUnit>to</ModularScaleInputUnit>
        <RatioWrapper>
          <Label htmlFor="line-height-for-ratio">line-height</Label>
          <ModularScaleInput
            id="line-height-for-ratio"
            data-testid="line-height-for-ratio"
            onBlur={handleLineHeightRatioBlur}
            onChange={handleLineHeightChange}
            pattern="([1-9]|[1-9][0-9])([.,]\d{1,4})?|100"
            required
            value={props.lineHeightRatio}
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
            error={
              props.lineHeightRatioRangeError || props.lineHeightRatioStepError
            }
          />
        </RatioWrapper>
      </ModularScaleInputWrapper>
      <SpacerVertical height="1" />
      <InputInstructionWrapper>
        <AlertIcon
          inputInstruction
          error={props.xHeightRatioStepError || props.lineHeightRatioStepError}
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
  xHeightRatioRangeError: PropTypes.string,
  xHeightRatioStepError: PropTypes.string,
  validateLineHeightRatio: PropTypes.func.isRequired,
  validateXHeightRatio: PropTypes.func.isRequired,
  xHeightRatio: PropTypes.string,
};

export default ModularScaleBoxes;

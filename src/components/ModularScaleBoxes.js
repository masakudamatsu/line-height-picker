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
  const handleBlur = event => {
    const inputValue = event.target.value;
    const errors = event.target.validity;
    props.validateModularScale(inputValue, errors);
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
            onBlur={handleBlur}
            onChange={handleXHeightChange}
            pattern="([1-9]|[1-9][0-9])([.,]\d{1,4})?|100"
            required
            value={props.xHeightRatio}
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
            error={props.modularScaleRangeError || props.modularScaleStepError}
          />
        </RatioWrapper>
        <ModularScaleInputUnit>to</ModularScaleInputUnit>
        <RatioWrapper>
          <Label htmlFor="line-height-for-ratio">line-height</Label>
          <ModularScaleInput
            id="line-height-for-ratio"
            data-testid="line-height-for-ratio"
            onBlur={handleBlur}
            onChange={handleLineHeightChange}
            pattern="([1-9]|[1-9][0-9])([.,]\d{1,4})?|100"
            required
            value={props.lineHeightRatio}
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
            error={props.modularScaleRangeError || props.modularScaleStepError}
          />
        </RatioWrapper>
      </ModularScaleInputWrapper>
      <SpacerVertical height="1" />
      <InputInstructionWrapper>
        <AlertIcon inputInstruction error={props.modularScaleStepError} />
        <InputInstruction
          id="howManyDecimalPlacesAllowed"
          data-testid="instruction-modular-scale"
          errorText={props.modularScaleStepError}
        >
          up to 4 decimal places
        </InputInstruction>
      </InputInstructionWrapper>

      <SpacerVertical height="2" />

      <AlertMessage error={props.modularScaleRangeError}>
        <AlertIcon error={props.modularScaleRangeError} />
        <ParagraphOneRem
          id="rangeOfNumbersAllowed"
          data-testid="error-message-modular-scale"
          errorText={props.modularScaleRangeError}
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
  modularScaleRangeError: PropTypes.string,
  modularScaleStepError: PropTypes.string,
  validateModularScale: PropTypes.func.isRequired,
  xHeightRatio: PropTypes.string,
};

export default ModularScaleBoxes;

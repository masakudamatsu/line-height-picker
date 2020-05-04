import React from 'react';
import PropTypes from 'prop-types';

import {
  AlertMessage,
  ModularScaleInputWrapper,
  Label,
  ModularScaleInput,
  ModularScaleInputUnit,
  ModularScaleText,
  InputInstruction,
  RatioWrapper,
} from '../theme/style';

const ModularScaleBoxes = props => {
  const handleBlur = event => {
    const inputValue = event.target.value;
    const errors = event.target.validity;
    props.validateModularScale(inputValue, errors);
  };
  const handleXHeightChange = event => {
    const newXHeightRatio = event.target.value;
    props.handleXHeightRatioChange(newXHeightRatio);
  };
  const handleLineHeightChange = event => {
    const newLineHeightRatio = event.target.value;
    props.handleLineHeightRatioChange(newLineHeightRatio);
  };
  return (
    <>
      <ModularScaleText>Enter the ratio of</ModularScaleText>
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
          />
        </RatioWrapper>
      </ModularScaleInputWrapper>
      <InputInstruction
        id="howManyDecimalPlacesAllowed"
        data-testid="instruction-modular-scale"
        errorText={props.modularScaleStepError}
      >
        up to 4 decimal places
      </InputInstruction>
      <AlertMessage
        id="rangeOfNumbersAllowed"
        data-testid="error-message-modular-scale"
        error={props.modularScaleRangeError}
        errorText={props.modularScaleRangeError}
      >
        Enter a number between 1 and 100 inclusive
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

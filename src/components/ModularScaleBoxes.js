import React from 'react';
import PropTypes from 'prop-types';

import {
  AlertMessage,
  CenterAlignWrapperHorizontal,
  Form,
  PageTitle,
  Label,
  ModularScaleInput,
  ParagraphOneRem,
  RatioWrapper,
} from '../theme/style';

const ModularScaleBoxes = props => {
  const checkValidity = event => {
    const errors = event.target.validity;
    props.validateModularScale(errors);
  };
  const handleXHeightChange = event => {
    checkValidity(event);
    const newXHeightRatio = event.target.value;
    props.handleXHeightRatioChange(newXHeightRatio);
  };
  const handleLineHeightChange = event => {
    checkValidity(event);
    const newLineHeightRatio = event.target.value;
    props.handleLineHeightRatioChange(newLineHeightRatio);
  };
  return (
    <Form>
      <PageTitle>Pick modular scale</PageTitle>
      <p>Set the ratio of</p>
      <CenterAlignWrapperHorizontal>
        <RatioWrapper>
          <Label htmlFor="x-height-scale">x-height</Label>
          <ModularScaleInput
            data-testid="x-height-for-ratio"
            id="x-height-scale"
            max="100"
            min="1"
            onChange={handleXHeightChange}
            required
            value={props.xHeightRatio}
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
          />
        </RatioWrapper>
        <span>to</span>
        <RatioWrapper>
          <Label htmlFor="line-height-scale">line-height</Label>
          <ModularScaleInput
            id="line-height-scale"
            data-testid="line-height-for-ratio"
            max="100"
            min="1"
            onChange={handleLineHeightChange}
            required
            value={props.lineHeightRatio}
            aria-describedby="howManyDecimalPlacesAllowed rangeOfNumbersAllowed"
          />
        </RatioWrapper>
      </CenterAlignWrapperHorizontal>
      <ParagraphOneRem
        id="howManyDecimalPlacesAllowed"
        data-testid="instruction-modular-scale"
        errorText={props.modularScaleStepError}
      >
        up to 4 decimal places
      </ParagraphOneRem>
      <AlertMessage
        id="rangeOfNumbersAllowed"
        data-testid="error-message-modular-scale"
        error={props.modularScaleRangeError}
        errorText={props.modularScaleRangeError}
      >
        Enter a number between 1 and 100 inclusive
      </AlertMessage>
    </Form>
  );
};

ModularScaleBoxes.propTypes = {
  handleLineHeightRatioChange: PropTypes.func.isRequired,
  handleXHeightRatioChange: PropTypes.func.isRequired,
  lineHeightRatio: PropTypes.number,
  modularScaleRangeError: PropTypes.bool,
  modularScaleStepError: PropTypes.bool,
  validateModularScale: PropTypes.func.isRequired,
  xHeightRatio: PropTypes.number,
};

export default ModularScaleBoxes;

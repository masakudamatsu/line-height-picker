import React from 'react';
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
  const [rangeError, setRangeError] = React.useState(false);
  const [stepError, setStepError] = React.useState(false);
  const checkValidity = event => {
    event.target.checkValidity();
    if (
      event.target.validity.rangeOverflow ||
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
  };
  const handleXHeightChange = event => {
    checkValidity(event);
    const newXHeightRatio = event.target.value;
    props.handleXHeightRatio(newXHeightRatio);
  };
  const handleLineHeightChange = event => {
    checkValidity(event);
    const newLineHeightRatio = event.target.value;
    props.handleLineHeightRatio(newLineHeightRatio);
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
            value={props.xHeightRatio}
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
            value={props.lineHeightRatio}
          />
        </RatioWrapper>
      </CenterAlignWrapperHorizontal>
      <ParagraphOneRem
        data-testid="instruction-modular-scale"
        errorText={stepError}
      >
        up to 4 decimal places
      </ParagraphOneRem>
      <AlertMessage
        data-testid="error-message-modular-scale"
        error={rangeError}
        errorText={rangeError}
      >
        Enter a number between 1 and 100 inclusive
      </AlertMessage>
    </Form>
  );
};

export default ModularScaleBoxes;

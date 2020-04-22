import React from 'react';
import PropTypes from 'prop-types';
import {
  AlertMessage,
  BringAttention,
  Button,
  Code,
  Form,
  Label,
  Input,
  NumberInput,
  ParagraphOneRem,
} from '../theme/style';
import {Redirect} from 'react-router-dom';

const FontTableBox = props => {
  const [redirect, setRedirect] = React.useState(false);

  const names = [
    'preferredFamily',
    'preferredSubfamily',
    'usWeightClass',
    'unitsPerEm',
    'sxHeight',
    'sCapHeight',
  ];
  let i = 0;
  const [missingValues, setMissingValues] = React.useState({
    [names[i]]: false,
    [names[++i]]: false,
    [names[++i]]: false,
    [names[++i]]: false,
    [names[++i]]: false,
    [names[++i]]: false,
  });
  let j = 2;
  const [rangeError, setRangeError] = React.useState({
    [names[j]]: false,
    [names[++j]]: false,
    [names[++j]]: false,
    [names[++j]]: false,
  });
  let k = 2;
  const [stepError, setStepError] = React.useState({
    [names[k]]: false,
    [names[++k]]: false,
    [names[++k]]: false,
    [names[++k]]: false,
  });

  const handleSubmit = event => {
    event.preventDefault();

    const inputs = event.target.elements;

    // Overall Validation
    const inputIsValid = {};
    names.forEach(name => {
      inputIsValid[name] = inputs[name].validity.valid;
    });
    const allValid = Object.keys(inputIsValid).every(
      name => inputIsValid[name] === true,
    );
    if (allValid) {
      // Update font metrics
      let newFontMetrics = {};
      names.forEach(name => {
        newFontMetrics[name] = inputs[name].value;
      });
      props.updateFontMetrics(newFontMetrics);
      setRedirect(true);

      return;
    }

    // Error handling
    const newMissingValues = {};
    names.forEach(name => {
      newMissingValues[name] = inputs[name].validity.valueMissing;
    });
    setMissingValues(newMissingValues);
  };

  const handleBlur = event => {
    const name = event.target.name;
    // Check if the value is missing only when its error status is true after clicking the next button
    if (missingValues[name]) {
      console.log('yes');
      const newMissingValueStatus = {
        [name]: event.target.validity.valueMissing,
      };
      const newMissingValues = {...missingValues, ...newMissingValueStatus};
      setMissingValues(newMissingValues);
    }
    // Check range error
    const valueHigherThanMax = event.target.validity.rangeOverflow;
    const valueLowerThanMix = event.target.validity.rangeUnderflow;
    let newRangeErrorStatus = {};
    if (valueHigherThanMax || valueLowerThanMix) {
      newRangeErrorStatus[name] = true;
    } else {
      newRangeErrorStatus[name] = false;
    }
    const newRangeError = {...rangeError, ...newRangeErrorStatus};
    setRangeError(newRangeError);
    // Check step error
    const valueNotWholeNumber = event.target.validity.stepMismatch;
    let newStepErrorStatus = {};
    if (valueNotWholeNumber) {
      newStepErrorStatus[name] = true;
    } else {
      newStepErrorStatus[name] = false;
    }
    const newStepError = {...stepError, ...newStepErrorStatus};
    setStepError(newStepError);
  };

  if (redirect) {
    return <Redirect push to="/x-height" />;
    // The push attribute keeps the browser history, instead of overriding, so the user can click the Back button in the browser to be back to the landing page. See https://reacttraining.com/react-router/web/api/Redirect/push-bool
  }
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <ParagraphOneRem>Or enter font table values:</ParagraphOneRem>

      <Label htmlFor="preferredFamily">preferredFamily</Label>
      <ParagraphOneRem id="instruction-preferredFamily">
        Font family name to be used for the <Code>font-family</Code> CSS
        property. It can be found in the <Code>name</Code> table. If it doesn't
        exist, enter the <Code>fontFamily</Code> value.
      </ParagraphOneRem>
      <Input
        data-testid="preferredFamily"
        id="preferredFamily"
        name="preferredFamily"
        onBlur={handleBlur}
        placeholder="Open Sans"
        required
        aria-describedby="instruction-preferredFamily error-message-preferredFamily"
      />
      <AlertMessage
        data-testid="error-message-preferredFamily"
        id="error-message-preferredFamily"
        error={missingValues['preferredFamily']}
        errorText={missingValues['preferredFamily']}
      >
        Enter the font family name.
      </AlertMessage>

      <Label htmlFor="preferredSubfamily">preferredSubfamily</Label>
      <ParagraphOneRem id="instruction-preferredSubfamily">
        Font subfamily name (e.g. Light, Regular, Bold). It can be found in the
        <Code>name</Code> table. If it doesn't exist, enter the{' '}
        <Code>fontSubfamily</Code> value.
      </ParagraphOneRem>
      <Input
        data-testid="preferredSubfamily"
        id="preferredSubfamily"
        name="preferredSubfamily"
        onBlur={handleBlur}
        placeholder="Regular"
        required
        aria-describedby="instruction-preferredSubfamily error-message-preferredSubfamily"
      />
      <AlertMessage
        data-testid="error-message-preferredSubfamily"
        id="error-message-preferredSubfamily"
        error={missingValues['preferredSubfamily']}
        errorText={missingValues['preferredSubfamily']}
      >
        Enter the font subfamily name (such as Regular, Italic, Bold, Light).
      </AlertMessage>

      <Label htmlFor="usWeightClass">usWeightClass</Label>
      <ParagraphOneRem id="instruction-usWeightClass">
        Number to be used for the <Code>font-weight</Code> CSS property. It can
        be found in the <Code>OS/2</Code> table.
      </ParagraphOneRem>
      <NumberInput
        data-testid="usWeightClass"
        id="usWeightClass"
        max="1000"
        min="1"
        name="usWeightClass"
        onBlur={handleBlur}
        placeholder="400"
        required
        step="1"
        aria-describedby="instruction--usWeightClass error-message-usWeightClass"
      />
      <AlertMessage
        data-testid="error-message-usWeightClass"
        id="error-message-usWeightClass"
        error={
          missingValues['usWeightClass'] ||
          rangeError['usWeightClass'] ||
          stepError['usWeightClass']
        }
        errorText={
          missingValues['usWeightClass'] ||
          rangeError['usWeightClass'] ||
          stepError['usWeightClass']
        }
      >
        Please enter a{' '}
        <BringAttention
          data-testid="bring-attention-usWeightClass"
          yes={stepError['usWeightClass']}
        >
          whole number
        </BringAttention>{' '}
        between 1 and 1000.
      </AlertMessage>

      <Label htmlFor="unitsPerEm">unitsPerEm</Label>
      <ParagraphOneRem id="instruction-unitsPerEm">
        Number of units for the length set by the <Code>font-size</Code> CSS
        property. It can be found in the <Code>head</Code> table. Usually,
        either 1000, 1024 or 2048.
      </ParagraphOneRem>
      <NumberInput
        data-testid="unitsPerEm"
        id="unitsPerEm"
        max="16384"
        min="16"
        name="unitsPerEm"
        onBlur={handleBlur}
        placeholder="2048"
        required
        step="1"
        aria-describedby="instruction-unitsPerEm error-message-unitsPerEm"
      />
      <AlertMessage
        data-testid="error-message-unitsPerEm"
        id="error-message-unitsPerEm"
        error={
          missingValues['unitsPerEm'] ||
          rangeError['unitsPerEm'] ||
          stepError['unitsPerEm']
        }
        errorText={
          missingValues['unitsPerEm'] ||
          rangeError['unitsPerEm'] ||
          stepError['unitsPerEm']
        }
      >
        Please enter a{' '}
        <BringAttention
          data-testid="bring-attention-unitsPerEm"
          yes={stepError['unitsPerEm']}
        >
          whole number
        </BringAttention>{' '}
        between 16 and 16384.
      </AlertMessage>

      <Label htmlFor="sxHeight">sxHeight</Label>
      <ParagraphOneRem id="instruction-sxHeight">
        Number of units for x-height (the height of lowercase x). It can be
        found in the <Code>OS/2</Code> table.
      </ParagraphOneRem>
      <NumberInput
        data-testid="sxHeight"
        id="sxHeight"
        max="16384"
        min="16"
        name="sxHeight"
        onBlur={handleBlur}
        placeholder="1096"
        required
        step="1"
        aria-describedby="instruction-sxHeight error-message-sxHeight"
      />
      <AlertMessage
        data-testid="error-message-sxHeight"
        id="error-message-sxHeight"
        error={
          missingValues['sxHeight'] ||
          rangeError['sxHeight'] ||
          stepError['sxHeight']
        }
        errorText={
          missingValues['sxHeight'] ||
          rangeError['sxHeight'] ||
          stepError['sxHeight']
        }
      >
        Please enter a{' '}
        <BringAttention
          data-testid="bring-attention-sxHeight"
          yes={stepError['sxHeight']}
        >
          whole number
        </BringAttention>{' '}
        between 16 and 16384.
      </AlertMessage>

      <Label htmlFor="sCapHeight">sCapHeight</Label>
      <ParagraphOneRem id="instruction-sCapHeight">
        Number of units for cap-height (the height of uppercase H). It can be
        found in the <Code>OS/2</Code> table.
      </ParagraphOneRem>
      <NumberInput
        data-testid="sCapHeight"
        id="sCapHeight"
        max="16384"
        min="16"
        name="sCapHeight"
        onBlur={handleBlur}
        placeholder="1462"
        required
        step="1"
        aria-describedby="instruction-sCapHeight error-message-sCapHeight"
      />
      <AlertMessage
        data-testid="error-message-sCapHeight"
        id="error-message-sCapHeight"
        error={
          missingValues['sCapHeight'] ||
          rangeError['sCapHeight'] ||
          stepError['sCapHeight']
        }
        errorText={
          missingValues['sCapHeight'] ||
          rangeError['sCapHeight'] ||
          stepError['sCapHeight']
        }
      >
        Please enter a{' '}
        <BringAttention
          data-testid="bring-attention-sCapHeight"
          yes={stepError['sCapHeight']}
        >
          whole number
        </BringAttention>{' '}
        between 16 and 16384.
      </AlertMessage>

      <Button type="submit">Next</Button>
    </Form>
  );
};

FontTableBox.propTypes = {
  updateFontMetrics: PropTypes.func.isRequired,
};
export default FontTableBox;

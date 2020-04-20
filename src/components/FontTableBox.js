import React from 'react';
import PropTypes from 'prop-types';
import {
  AlertMessage,
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

  const [fontFamilyError, setFontFamilyError] = React.useState(false);
  const [fontSubfamilyError, setFontSubfamilyError] = React.useState(false);
  const [weightClassError, setWeightClassError] = React.useState(false);

  const validateFontFamily = errors => {
    if (errors.valueMissing) {
      setFontFamilyError(true);
    } else {
      setFontFamilyError(false);
    }
  };
  const validateFontSubfamily = errors => {
    if (errors.valueMissing) {
      setFontSubfamilyError(true);
    } else {
      setFontSubfamilyError(false);
    }
  };
  const validateWeightClass = errors => {
    if (errors.valueMissing) {
      setWeightClassError(true);
    } else {
      setWeightClassError(false);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    const inputs = event.target.elements;

    // Validation
    const fontFamilyErrors = inputs['preferredFamily'].validity;
    if (!fontFamilyErrors.valid) {
      validateFontFamily(fontFamilyErrors);
      return;
    }
    const fontSubfamilyErrors = inputs['preferredSubfamily'].validity;
    if (!fontSubfamilyErrors.valid) {
      validateFontSubfamily(fontSubfamilyErrors);
      return;
    }
    const weightClassErrors = inputs['usWeightClass'].validity;
    if (!weightClassErrors.valid) {
      validateWeightClass(weightClassErrors);
      return;
    }

    // Convert event.target.elements (an object) into an array of input elements
    const inputFieldArray = Array.prototype.slice
      .call(inputs)
      .filter(inputField => inputField.name.length > 0); // Remove empty string key-value pair
    // Update the state with input values
    let newFontMetrics = {};
    inputFieldArray.forEach(inputField => {
      newFontMetrics[inputField.name] = inputField.value;
    });
    props.updateFontMetrics(newFontMetrics);
    setRedirect(true);
  };

  const handleChange = event => {
    if (event.target.name === 'preferredFamily') {
      // Do nothing if there's no error
      if (!fontFamilyError) {
        return;
      }
      // Erase the error message when the user enters something
      const errors = event.target.validity;
      validateFontFamily(errors);
    }
    if (event.target.name === 'preferredSubfamily') {
      // Do nothing if there's no error
      if (!fontSubfamilyError) {
        return;
      }
      // Erase the error message when the user enters something
      const errors = event.target.validity;
      validateFontSubfamily(errors);
    }
    if (event.target.name === 'usWeightClass') {
      // Do nothing if there's no error
      if (!weightClassError) {
        return;
      }
      // Erase the error message when the user enters something
      const errors = event.target.validity;
      validateWeightClass(errors);
    }
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
        onChange={handleChange}
        placeholder="Open Sans"
        required
        aria-describedby="instruction-preferredFamily error-message-preferredFamily"
      />
      <AlertMessage
        data-testid="error-message-preferredFamily"
        id="error-message-preferredFamily"
        error={fontFamilyError}
        errorText={fontFamilyError}
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
        onChange={handleChange}
        placeholder="Regular"
        required
        aria-describedby="instruction-preferredSubfamily error-message-preferredSubfamily"
      />
      <AlertMessage
        data-testid="error-message-preferredSubfamily"
        id="error-message-preferredSubfamily"
        error={fontSubfamilyError}
        errorText={fontSubfamilyError}
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
        name="usWeightClass"
        onChange={handleChange}
        placeholder="400"
        required
        aria-describedby="instruction--usWeightClass error-message-usWeightClass"
      />
      <AlertMessage
        data-testid="error-message-usWeightClass"
        id="error-message-usWeightClass"
        error={weightClassError}
        errorText={weightClassError}
      >
        Please enter a whole number between 1 and 1000.
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
        name="unitsPerEm"
        placeholder="2048"
        aria-describedby="instruction-unitsPerEm"
      />

      <Label htmlFor="sxHeight">sxHeight</Label>
      <ParagraphOneRem id="instruction-sxHeight">
        Number of units for x-height (the height of lowercase x). It can be
        found in the <Code>OS/2</Code> table.
      </ParagraphOneRem>
      <NumberInput
        data-testid="sxHeight"
        id="sxHeight"
        name="sxHeight"
        placeholder="1096"
        aria-describedby="instruction-sxHeight"
      />

      <Label htmlFor="sCapHeight">sCapHeight</Label>
      <ParagraphOneRem id="instruction-sCapHeight">
        Number of units for cap-height (the height of uppercase H). It can be
        found in the <Code>OS/2</Code> table.
      </ParagraphOneRem>
      <NumberInput
        data-testid="sCapHeight"
        id="sCapHeight"
        name="sCapHeight"
        placeholder="1462"
        aria-describedby="instruction-sCapHeight"
      />

      <Button>Next</Button>
    </Form>
  );
};

FontTableBox.propTypes = {
  updateFontMetrics: PropTypes.func.isRequired,
};
export default FontTableBox;

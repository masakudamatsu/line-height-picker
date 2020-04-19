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

  const handleSubmit = event => {
    event.preventDefault();

    // Convert event.target.elements (an object) into an array of input elements
    const inputFieldArray = Array.prototype.slice
      .call(event.target.elements)
      .filter(inputField => inputField.name.length > 0); // Remove empty string key-value pair

    // Validation
    const errors = inputFieldArray[0].validity;
    if (!errors.valid) {
      props.validateFontMetrics(errors);
      return;
    }

    let newFontMetrics = {};
    inputFieldArray.forEach(inputField => {
      newFontMetrics[inputField.name] = inputField.value;
    });
    props.updateFontMetrics(newFontMetrics);
    setRedirect(true);
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
        placeholder="Open Sans"
        required
        aria-describedby="instruction-preferredFamily"
      />
      <AlertMessage
        data-testid="error-message-preferredFamily"
        id="error-message-preferredFamily"
        error={props.fontFamilyError}
        errorText={props.fontFamilyError}
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
        placeholder="Regular"
        aria-describedby="instruction-preferredSubfamily"
      />

      <Label htmlFor="usWeightClass">usWeightClass</Label>
      <ParagraphOneRem id="instruction-usWeightClass">
        Number to be used for the <Code>font-weight</Code> CSS property. It can
        be found in the <Code>OS/2</Code> table.
      </ParagraphOneRem>
      <NumberInput
        data-testid="usWeightClass"
        id="usWeightClass"
        name="usWeightClass"
        placeholder="400"
        aria-describedby="instruction--usWeightClass"
      />

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
  fontFamilyError: PropTypes.bool,
  updateFontMetrics: PropTypes.func.isRequired,
  validateFontMetrics: PropTypes.func.isRequired,
};
export default FontTableBox;

import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
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
    let newFontMetrics = {};
    // Convert event.target.elements (an object) into an array of input elements
    const inputFieldArray = Array.prototype.slice.call(event.target.elements);
    inputFieldArray
      .filter(inputField => inputField.name.length > 0) // Remove empty string key-value pair
      .forEach(inputField => {
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
    <Form onSubmit={handleSubmit}>
      <ParagraphOneRem>Or enter font table values:</ParagraphOneRem>
      <Label htmlFor="sxHeight">sxHeight</Label>
      <NumberInput data-testid="sxHeight" id="sxHeight" name="sxHeight" />
      <Label htmlFor="sCapHeight">sCapHeight</Label>
      <NumberInput data-testid="sCapHeight" id="sCapHeight" name="sCapHeight" />
      <Label htmlFor="unitsPerEm">unitsPerEm</Label>
      <NumberInput data-testid="unitsPerEm" id="unitsPerEm" name="unitsPerEm" />
      <Label htmlFor="preferredFamily">preferredFamily</Label>
      <Input
        data-testid="preferredFamily"
        id="preferredFamily"
        name="preferredFamily"
      />
      <Label htmlFor="preferredSubfamily">preferredSubfamily</Label>
      <Input
        data-testid="preferredSubfamily"
        id="preferredSubfamily"
        name="preferredSubfamily"
      />
      <Label htmlFor="usWeightClass">usWeightClass</Label>
      <NumberInput
        data-testid="usWeightClass"
        id="usWeightClass"
        name="usWeightClass"
      />
      <Button>Next</Button>
    </Form>
  );
};

FontTableBox.propTypes = {
  updateFontMetrics: PropTypes.func.isRequired,
};
export default FontTableBox;

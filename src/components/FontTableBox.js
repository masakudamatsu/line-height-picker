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

  const names = [
    'preferredFamily',
    'preferredSubfamily',
    'usWeightClass',
    'unitsPerEm',
    'sxHeight',
    'sCapHeight',
  ];
  let i = 0;
  const [fontMetricsError, setFontMetricsError] = React.useState({
    [names[i]]: false,
    [names[++i]]: false,
    [names[++i]]: false,
  });

  const handleSubmit = event => {
    event.preventDefault();

    const inputs = event.target.elements;

    // Validation
    const newFontMetricsError = {};
    names.forEach(name => {
      const errorStatus = inputs[name].validity;
      newFontMetricsError[name] = errorStatus.valueMissing;
    });
    const someError = Object.keys(newFontMetricsError).some(
      name => newFontMetricsError[name] === true,
    );
    if (someError) {
      setFontMetricsError(newFontMetricsError);
      return; // Won't do anything below if there is at least one error.
    }
    // Update font metrics
    let newFontMetrics = {};
    names.forEach(name => {
      newFontMetrics[name] = inputs[name].value;
    });
    props.updateFontMetrics(newFontMetrics);
    setRedirect(true);
  };

  const handleChange = event => {
    const name = event.target.name;
    // Do nothing if there's no error
    if (!fontMetricsError[name]) {
      return;
    }
    // Erase the error message when the user enters something
    const newErrorStatus = {
      [name]: event.target.validity.valueMissing,
    };
    const newFontMetricsError = {...fontMetricsError, ...newErrorStatus};
    setFontMetricsError(newFontMetricsError);
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
        error={fontMetricsError['preferredFamily']}
        errorText={fontMetricsError['preferredFamily']}
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
        error={fontMetricsError['preferredSubfamily']}
        errorText={fontMetricsError['preferredSubfamily']}
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
        error={fontMetricsError['usWeightClass']}
        errorText={fontMetricsError['usWeightClass']}
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

import React from 'react';
import {Form, NumberInput, Label} from '../theme/style';

const XheightBox = () => {
  return (
    <Form>
      <Label htmlFor="x-height">x-height (in px)</Label>
      <NumberInput id="x-height" />
    </Form>
  );
};

export default XheightBox;

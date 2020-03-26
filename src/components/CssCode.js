import React from 'react';
import {CodeSnippet} from '../theme/style';

const CssCode = () => {
  const cssOutput = `font-family: 'Open Sans';
font-size: 1rem;
font-weight: 400;
line-height: 1.4;`;

  return (
    <CodeSnippet data-testid="cssCode">
      <code>{cssOutput}</code>
    </CodeSnippet>
  );
};

export default CssCode;

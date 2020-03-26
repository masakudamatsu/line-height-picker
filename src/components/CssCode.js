import React from 'react';
import {CodeSnippet} from '../theme/style';

const CssCode = props => {
  let fontFamilyName = props.fontFamily;
  if (/\s/.test(fontFamilyName)) {
    fontFamilyName = `'${fontFamilyName}'`;
  }
  const cssOutput = `font-family: ${fontFamilyName};
font-size: 1rem;
font-weight: 400;
line-height: 1.4;`;

  return (
    <CodeSnippet>
      <code data-testid="cssCode">{cssOutput}</code>
    </CodeSnippet>
  );
};

export default CssCode;

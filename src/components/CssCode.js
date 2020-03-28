import React from 'react';
import {CodeSnippet} from '../theme/style';

const CssCode = props => {
  let fontFamilyName = props.fontFamily;
  if (/\s/.test(fontFamilyName)) {
    fontFamilyName = `'${fontFamilyName}'`;
  }
  const cssOutput = `font-family: ${fontFamilyName};
font-size: ${props.fontSize}px;
font-weight: ${props.fontWeight};
line-height: ${props.lineHeight};`;

  return (
    <CodeSnippet>
      <code data-testid="cssCode">{cssOutput}</code>
    </CodeSnippet>
  );
};

export default CssCode;

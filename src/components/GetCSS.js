import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import {Button, CodeSnippet, NoWrap, PageTitle} from '../theme/style';

const GetCSS = props => {
  // Create CSS code
  let fontFamilyName = props.fontFamily;
  if (/\s/.test(fontFamilyName)) {
    fontFamilyName = `'${fontFamilyName}'`;
  }
  const cssOutput = `p {
  font-family: ${fontFamilyName};
  font-size: ${props.fontSize}px;
  font-weight: ${props.fontWeight};
  line-height: ${props.lineHeight};
}

p:not(:first-child) {
  margin-top: ${props.marginTop}px;
}
  `;
  // Handling copy to clipboard
  const copyToClipboard = () => {
    if (navigator.clipboard) {
      // For browsers supporting Clipboard API
      navigator.clipboard.writeText(cssOutput);
    } else {
      // For browsers not supporting Clipboard API
      return;
    }
  };

  return (
    <>
      <Header stepNow={5} />
      <main>
        <PageTitle>Get CSS</PageTitle>
        <CodeSnippet>
          <code data-testid="cssCode">{cssOutput}</code>
        </CodeSnippet>
        <Button onClick={copyToClipboard}>Copy to clipboard</Button>
        <Button as={Link} to="/preview">
          Back to preview
          <NoWrap>←</NoWrap>
        </Button>
      </main>
    </>
  );
};

export default GetCSS;

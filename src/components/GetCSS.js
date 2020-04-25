import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {
  AlertMessage,
  Button,
  Code,
  CodeSnippet,
  NoWrap,
  PageTitle,
  Section,
} from '../theme/style';
import {clipboardError} from '../helper/errorMessages';

import store from '../helper/store';

const GetCSS = props => {
  React.useEffect(() => {
    store.set('css', 'visited');
  }, []);

  const [error, setError] = React.useState(false);
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
}`;
  // Handling copy to clipboard
  const copyToClipboard = () => {
    if (navigator.clipboard) {
      // For browsers supporting Clipboard API
      navigator.clipboard.writeText(cssOutput);
    } else {
      if (document.queryCommandSupported('copy')) {
        // For browsers not supporting Clipboard API
        const cssCode = document.getElementById('cssCode');
        const range = document.createRange();
        range.selectNode(cssCode);
        window.getSelection().addRange(range);
        try {
          const success = document.execCommand('copy');
          const message = success ? 'successful' : 'unsuccessful';
          console.log(`Copying was ${message}`);
        } catch (err) {
          console.log('unable to copy');
          setError(true);
        }
        window.getSelection().removeAllRanges();
      } else {
        console.log('unable to copy');
        setError(true);
      }
    }
  };

  return (
    <>
      <main>
        <PageTitle>Get CSS</PageTitle>
        <CodeSnippet>
          <Code data-testid="cssCode" id="cssCode">
            {cssOutput}
          </Code>
        </CodeSnippet>
        <Button
          data-testid="copy-button"
          onClick={copyToClipboard}
          aria-describedby="whatHappened howToResolve extraText"
        >
          Copy to clipboard
        </Button>
        <Button as={Link} to="/preview">
          Back to preview
          <NoWrap>←</NoWrap>
        </Button>
        <Section data-testid="error-message-clipboard">
          <AlertMessage id="whatHappened" error={error} errorText>
            {clipboardError.whatHappened}
          </AlertMessage>
          <AlertMessage id="howToResolve" error={error} errorText>
            {clipboardError.howToResolve}
          </AlertMessage>
          <AlertMessage id="extraText" error={error} errorText>
            {clipboardError.extraText}
          </AlertMessage>
        </Section>
      </main>
    </>
  );
};

GetCSS.propTypes = {
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  marginTop: PropTypes.string,
};

export default GetCSS;

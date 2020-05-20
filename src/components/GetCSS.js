import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import {
  AlertMessage,
  Button,
  ButtonWithLeftArrow,
  Code,
  CodeSnippet,
  SectionTitle,
  SectionTitleWrapper,
  Section,
  Spacer,
} from '../theme/style';
import {clipboardError} from '../helper/errorMessages';

import store from '../helper/store';

const GetCSS = props => {
  React.useEffect(() => {
    store.set('css', 'visited');
  }, []);

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

p + p {
  margin-top: ${props.marginTop}px;
}`;

  // Copy button text
  const copyButtonText = {
    default: 'Copy CSS code',
    afterClick: 'Copied!',
  };
  const [buttonText, setButtonText] = React.useState(copyButtonText.default);

  // Handling copy to clipboard
  const [error, setError] = React.useState(false);
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
          return;
        }
        window.getSelection().removeAllRanges();
      } else {
        console.log('unable to copy');
        setError(true);
        return;
      }
    }
    setButtonText(copyButtonText.afterClick);
    setTimeout(() => {
      setButtonText(copyButtonText.default);
    }, 1500);
  };

  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: '/preview',
      state: {transition: 'slideright', duration: 300},
    });
  };

  return (
    <>
      <main>
        <Section>
          <Spacer height="3" />
          <SectionTitleWrapper>
            <SectionTitle>Get CSS</SectionTitle>
          </SectionTitleWrapper>
          <Spacer height="2" />
          <CodeSnippet>
            <Code data-testid="cssCode" id="cssCode">
              {cssOutput}
            </Code>
          </CodeSnippet>
          <Spacer height="2" />
          <Button
            data-testid="copy-button"
            disabled={error}
            onClick={copyToClipboard}
            primary
            aria-describedby="whatHappened howToResolve extraText"
          >
            {buttonText}
          </Button>
          <Spacer height="2" />
          <ButtonWithLeftArrow onClick={handleClick}>Back</ButtonWithLeftArrow>
          <Spacer height="2" />
          <AlertMessage
            id="whatHappened"
            data-testid="whatHappened"
            error={error}
            errorText
          >
            {clipboardError.whatHappened}
          </AlertMessage>
          <Spacer height="2" />
          <AlertMessage
            id="howToResolve"
            data-testid="howToResolve"
            error={error}
            errorText
          >
            {clipboardError.howToResolve}
          </AlertMessage>
          <Spacer height="3" />
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

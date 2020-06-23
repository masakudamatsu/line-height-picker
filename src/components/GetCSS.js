import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import store from '../helper/store';

import CssGuide from './CssGuide';

import {
  AlertIcon,
  AlertMessage,
  Button,
  ButtonWithLeftArrow,
  Code,
  CodeSnippet,
  LinearLight,
  ParagraphOneRem,
  SectionTitle,
  Section,
  SpacerVertical,
} from '../theme/style';

import {clipboardError} from '../helper/errorMessages';

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
    default: (
      <span>
        Copy <abbr>CSS</abbr> code
      </span>
    ),
    afterClick: 'Copied!',
  };
  const [copied, setCopied] = React.useState(false);

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
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
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
          <SpacerVertical height="3" />
          <SectionTitle>Get CSS</SectionTitle>
          <SpacerVertical height="2" />
          <LinearLight />
          <CodeSnippet>
            <Code data-testid="cssCode" id="cssCode">
              {cssOutput}
            </Code>
          </CodeSnippet>
          <LinearLight />
          <SpacerVertical height="2" />
          <Button
            data-testid="copy-button"
            disabled={error}
            onClick={copyToClipboard}
            primary
            aria-describedby="whatHappened howToResolve extraText"
          >
            {copied ? copyButtonText.afterClick : copyButtonText.default}
          </Button>
          <SpacerVertical height="2" />
          <ButtonWithLeftArrow onClick={handleClick}>Back</ButtonWithLeftArrow>
          <SpacerVertical height="2" />
          <AlertMessage error={error}>
            <AlertIcon error={error} />
            <ParagraphOneRem errorText>
              <span id="whatHappened" data-testid="whatHappened">
                {clipboardError.whatHappened}
              </span>{' '}
              <span id="howToResolve" data-testid="howToResolve">
                {' '}
                {clipboardError.howToResolve}
              </span>
            </ParagraphOneRem>
          </AlertMessage>
          <SpacerVertical height="3" />
        </Section>
        <SpacerVertical height="3" />
        <CssGuide />
        <SpacerVertical height="3" />
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

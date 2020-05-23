import React from 'react';
import {
  InternalLink,
  ParagraphOneRem,
  Section,
  SectionTitle,
  Spacer,
} from '../theme/style';

const Error = () => {
  return (
    <>
      <main>
        <Section>
          <Spacer height="3" />
          <SectionTitle>404</SectionTitle>
          <Spacer height="2" />
          <ParagraphOneRem>
            We can't find the page you're looking for.{' '}
            <InternalLink to="/">Click here</InternalLink> to visit our web
            app's landing page.
          </ParagraphOneRem>
          <Spacer height="3" />{' '}
        </Section>
      </main>
    </>
  );
};

export default Error;

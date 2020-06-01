import React from 'react';
import {
  InternalLink,
  ParagraphOneRem,
  Section,
  SectionTitle,
  SpacerVertical,
} from '../theme/style';

const Error = () => {
  return (
    <>
      <main>
        <Section>
          <SpacerVertical height="3" />
          <SectionTitle>404</SectionTitle>
          <SpacerVertical height="2" />
          <ParagraphOneRem>
            We can't find the page you're looking for.{' '}
            <InternalLink to="/">Click here</InternalLink> to visit our web
            app's landing page.
          </ParagraphOneRem>
          <SpacerVertical height="3" />{' '}
        </Section>
      </main>
    </>
  );
};

export default Error;

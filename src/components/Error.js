import React from 'react';
import {
  ErrorPageTitleWord,
  InternalLink,
  ParagraphOneRem,
  Rotate,
  Section,
  SectionTitle,
  SpacerVertical,
} from '../theme/style';

const Error = () => {
  const fourZeroFour = ['4', '0', '4'].map(pageTitleLetter => (
    <Rotate degree={Math.floor(Math.random() * 360)}>{pageTitleLetter}</Rotate>
  ));
  const page = ['p', 'a', 'g', 'e'].map(pageTitleLetter => (
    <Rotate degree={Math.floor(Math.random() * 360)}>{pageTitleLetter}</Rotate>
  ));
  const not = ['n', 'o', 't'].map(pageTitleLetter => (
    <Rotate degree={Math.floor(Math.random() * 360)}>{pageTitleLetter}</Rotate>
  ));
  const found = ['f', 'o', 'u', 'n', 'd'].map(pageTitleLetter => (
    <Rotate degree={Math.floor(Math.random() * 360)}>{pageTitleLetter}</Rotate>
  ));
  return (
    <>
      <main>
        <Section>
          <SpacerVertical height="3" />
          <SectionTitle>
            <ErrorPageTitleWord>{fourZeroFour}</ErrorPageTitleWord>
            <ErrorPageTitleWord>{page}</ErrorPageTitleWord>
            <ErrorPageTitleWord>{not}</ErrorPageTitleWord>
            <ErrorPageTitleWord>{found}</ErrorPageTitleWord>
          </SectionTitle>
          <SpacerVertical height="2" />
          <ParagraphOneRem>
            We cannot find the page you are looking for. Please visit the{' '}
            <InternalLink to="/">
              landing page of the Line-height Picker
            </InternalLink>
            .
          </ParagraphOneRem>
          <SpacerVertical height="3" />{' '}
        </Section>
      </main>
    </>
  );
};

export default Error;

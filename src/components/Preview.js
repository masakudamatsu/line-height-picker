import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import FontNameDisplay from './FontNameDisplay';
import ChangeFontButton from './ChangeFontButton';
import XheightBox from './XheightBox';
import ModularScaleBoxes from './ModularScaleBoxes';
import {
  Button,
  ButtonContainer,
  ExternalLink,
  PageTitle,
  ParagraphOneRemRightAligned,
  SampleParagraphs,
} from '../theme/style';

const Preview = () => {
  return (
    <>
      <Header stepNow={4} />
      <main>
        <PageTitle>Preview sample paragraphs</PageTitle>
        <SampleParagraphs>
          <p data-testid="sampleParagraph1">
            Reed College at that time offered perhaps the best calligraphy
            instruction in the country. Throughout the campus every poster,
            every label on every drawer, was beautifully hand calligraphed.
            Because I had dropped out and didn’t have to take the normal
            classes, I decided to take a calligraphy class to learn how to do
            this. I learned about serif and sans serif typefaces, about varying
            the amount of space between different letter combinations, about
            what makes great typography great. It was beautiful, historical,
            artistically subtle in a way that science can’t capture, and I found
            it fascinating.
          </p>
          <p data-testid="sampleParagraph2">
            None of this had even a hope of any practical application in my
            life. But 10 years later, when we were designing the first Macintosh
            computer, it all came back to me. And we designed it all into the
            Mac. It was the first computer with beautiful typography. If I had
            never dropped in on that single course in college, the Mac would
            have never had multiple typefaces or proportionally spaced fonts.
            And since Windows just copied the Mac, it’s likely that no personal
            computer would have them. If I had never dropped out, I would have
            never dropped in on this calligraphy class, and personal computers
            might not have the wonderful typography that they do. Of course it
            was impossible to connect the dots looking forward when I was in
            college. But it was very, very clear looking backward 10 years
            later.
          </p>
        </SampleParagraphs>
        <ParagraphOneRemRightAligned>
          An excerpt from{' '}
          <ExternalLink href="https://news.stanford.edu/2005/06/14/jobs-061505/">
            Steve Jobs’s Stanford University Commencement address in 2005
          </ExternalLink>
        </ParagraphOneRemRightAligned>
        <ButtonContainer>
          <Button as={Link} to="/css">
            Get CSS code
          </Button>
        </ButtonContainer>
        <FontNameDisplay />
        <ChangeFontButton />
        <XheightBox />
        <ModularScaleBoxes />
      </main>
    </>
  );
};

export default Preview;

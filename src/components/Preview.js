import React from 'react';
import Header from './Header';
import {PageTitle, SampleParagraphs} from '../theme/style';

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
      </main>
    </>
  );
};

export default Preview;

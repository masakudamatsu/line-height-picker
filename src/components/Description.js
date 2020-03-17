import React from 'react';
import {DescriptionWrapper, NoWrap} from '../theme/style';

const Description = () => {
  return (
    <DescriptionWrapper data-testid="description">
      Beautify paragraphs on your website
      <NoWrap> in 5 steps.</NoWrap>
    </DescriptionWrapper>
  );
};

export default Description;

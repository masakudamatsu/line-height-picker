import React from 'react';
import Description from './Description';
import {ButtonContainer, Logo} from '../theme/style';
import FontFileUploader from './FontFileUploader';
import DemoStartButton from './DemoStartButton';
import FontFileErrorMessage from './FontFileErrorMessage';

const Home = props => {
  return (
    <>
      <Logo />
      <Description />
      <ButtonContainer>
        <FontFileUploader
          home
          validateFileType={props.validateFileType}
          handleFontFile={props.handleFontFile}
        >
          Upload font file
        </FontFileUploader>
        <DemoStartButton />
      </ButtonContainer>
      <FontFileErrorMessage
        data-testid="error-message-font-file"
        fontFileError={props.fontFileError}
      />
    </>
  );
};
export default Home;

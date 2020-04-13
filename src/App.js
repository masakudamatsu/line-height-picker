import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import {SideMarginRegulator} from './theme/style';
import Home from './components/Home';
import Xheight from './components/Xheight';
import ModularScale from './components/ModularScale';
import Preview from './components/Preview';
import GetCSS from './components/GetCSS';
import Error from './components/Error';
import Footer from './components/Footer';

import {fontFileExtensionsRegex as validFontFileTypes} from './helper/fontFileExtensions';
import getFontMetrics from './helper/getFontMetrics';
import {getFontSize, getLineHeight, getMarginTop} from './helper/cssGenerators';

const opentype = require('opentype.js');

function App() {
  const [fontMetrics, setFontMetrics] = React.useState({
    fontFamily: 'Open Sans',
    fontSubfamily: 'Regular',
    fontWeight: 400,
    xHeight: 1096,
    unitsPerEm: 2048,
    capHeight: 1462,
  });
  const [fontFileError, setFontFileError] = React.useState('');

  const [xHeightPx, setXHeightPx] = React.useState('');
  const [xHeightRangeError, setXHeightRangeError] = React.useState(false);
  const [xHeightStepError, setXHeightStepError] = React.useState(false);

  const [xHeightRatio, setXHeightRatio] = React.useState('');
  const [lineHeightRatio, setLineHeightRatio] = React.useState('');
  const [modularScaleRangeError, setModularScaleRangeError] = React.useState(
    false,
  );
  const [modularScaleStepError, setModularScaleStepError] = React.useState(
    false,
  );

  const [fontSizePx, setFontSizePx] = React.useState('');
  const [lineHeight, setLineHeight] = React.useState('');
  const [marginTop, setMarginTop] = React.useState('');

  const validateFileType = file => {
    if (validFontFileTypes.test(file.name)) {
      return true;
    } else {
      setFontFileError('fileExtension');
      return false;
    }
  };

  const handleFontFile = fontFile => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      // If FileReader API succeeds:
      reader.onload = function(e) {
        try {
          const font = opentype.parse(e.target.result, {lowMemory: true});
          // Save font metrics as the state object
          const newFontMetrics = getFontMetrics(font);
          setFontMetrics({
            fontFamily: newFontMetrics.fontFamily,
            fontSubfamily: newFontMetrics.fontSubfamily,
            fontWeight: newFontMetrics.fontWeight,
            xHeight: newFontMetrics.xHeight,
            unitsPerEm: newFontMetrics.unitsPerEm,
            capHeight: newFontMetrics.capHeight,
          });
          // Update CSS values
          if (xHeightPx) {
            const newFontSize = getFontSize(newFontMetrics, xHeightPx);
            setFontSizePx(newFontSize);
          }
          if (xHeightPx && xHeightRatio && lineHeightRatio) {
            const newLineHeight = getLineHeight(
              newFontMetrics,
              xHeightPx,
              xHeightRatio,
              lineHeightRatio,
            );
            setLineHeight(newLineHeight);
            const newMarginTop = getMarginTop(
              newFontMetrics,
              xHeightPx,
              xHeightRatio,
              lineHeightRatio,
            );
            setMarginTop(newMarginTop);
          }
          // Load the uploaded font
          const newFontFace = new FontFace(
            newFontMetrics.fontFamily,
            e.target.result,
          );
          newFontFace
            .load()
            .then(loaded_face => {
              document.fonts.add(loaded_face);
              setFontFileError('');
              resolve('');
            })
            // If FontFace API fails
            .catch(err => {
              console.log(err.toString());
              setFontFileError('fontFaceApi');
              reject(
                'FontFace API fails to read the font data from the file you have selected.',
              );
            });
        } catch (err) {
          // If opentype.parse() fails
          console.log(err.toString());
          if (err.stack) console.log(err.stack);
          setFontFileError('opentypeParse');
          reject('Opentype.js fails to read the file you have selected.');
        }
      };
      // If FileReader API fails
      reader.onerror = function(err) {
        console.log(err.toString());
        setFontFileError('fileReaderApi');
        reject('File Reader API fails to read the file you have selected.');
      };
      // Execute FileReader API
      reader.readAsArrayBuffer(fontFile);
    });
  };

  const handleNoXHeight = errors => {
    if (errors.valueMissing) {
      setXHeightRangeError(true);
    } else {
      setXHeightRangeError(false);
    }
  };

  const validateXHeight = errors => {
    if (errors.rangeOverflow || errors.rangeUnderflow) {
      setXHeightRangeError(true);
    } else {
      setXHeightRangeError(false);
    }
    if (errors.stepMismatch) {
      setXHeightStepError(true);
    } else {
      setXHeightStepError(false);
    }
  };

  const handleNoModularScale = errors => {
    if (errors.valueMissing) {
      setModularScaleRangeError(true);
    } else {
      setModularScaleRangeError(false);
    }
  };

  const validateModularScale = errors => {
    if (errors.rangeOverflow || errors.rangeUnderflow) {
      setModularScaleRangeError(true);
    } else {
      setModularScaleRangeError(false);
    }
    if (errors.stepMismatch) {
      setModularScaleStepError(true);
    } else {
      setModularScaleStepError(false);
    }
  };

  const handleXHeightChange = xHeight => {
    setXHeightPx(xHeight);
    const newFontSize = getFontSize(fontMetrics, xHeight);
    setFontSizePx(newFontSize);
    const newMarginTop = getMarginTop(
      fontMetrics,
      xHeight,
      xHeightRatio,
      lineHeightRatio,
    );
    setMarginTop(newMarginTop);
    // NOTE: Line-height won't change with x-height
  };

  const handleXHeightRatioChange = newXHeightRatio => {
    setXHeightRatio(newXHeightRatio);
    const newLineHeight = getLineHeight(
      fontMetrics,
      xHeightPx,
      newXHeightRatio,
      lineHeightRatio,
    );
    setLineHeight(newLineHeight);
    const newMarginTop = getMarginTop(
      fontMetrics,
      xHeightPx,
      newXHeightRatio,
      lineHeightRatio,
    );
    setMarginTop(newMarginTop);
  };
  const handleLineHeightRatioChange = newLineHeightRatio => {
    setLineHeightRatio(newLineHeightRatio);
    const newLineHeight = getLineHeight(
      fontMetrics,
      xHeightPx,
      xHeightRatio,
      newLineHeightRatio,
    );
    setLineHeight(newLineHeight);
    const newMarginTop = getMarginTop(
      fontMetrics,
      xHeightPx,
      xHeightRatio,
      newLineHeightRatio,
    );
    setMarginTop(newMarginTop);
  };
  return (
    <>
      <GlobalStyle />
      <SideMarginRegulator>
        <Switch>
          <Route path="/" exact>
            <Home
              validateFileType={validateFileType}
              handleFontFile={handleFontFile}
              fontFileError={fontFileError}
            />
          </Route>
          <Route path="/x-height">
            <Xheight
              validateFileType={validateFileType}
              handleFontFile={handleFontFile}
              fontFileError={fontFileError}
              fontFamily={fontMetrics.fontFamily}
              fontSubfamily={fontMetrics.fontSubfamily}
              xHeightPx={xHeightPx}
              validateXHeight={validateXHeight}
              handleNoXHeight={handleNoXHeight}
              xHeightRangeError={xHeightRangeError}
              xHeightStepError={xHeightStepError}
              handleXHeightChange={handleXHeightChange}
            />
          </Route>
          <Route path="/modular-scale">
            <ModularScale
              fontFamily={fontMetrics.fontFamily}
              fontSubfamily={fontMetrics.fontSubfamily}
              validateFileType={validateFileType}
              handleFontFile={handleFontFile}
              fontFileError={fontFileError}
              xHeightPx={xHeightPx}
              xHeightRatio={xHeightRatio}
              lineHeightRatio={lineHeightRatio}
              validateModularScale={validateModularScale}
              handleNoModularScale={handleNoModularScale}
              modularScaleRangeError={modularScaleRangeError}
              modularScaleStepError={modularScaleStepError}
              handleXHeightRatioChange={handleXHeightRatioChange}
              handleLineHeightRatioChange={handleLineHeightRatioChange}
            />
          </Route>
          <Route path="/preview">
            <Preview
              fontFamily={fontMetrics.fontFamily}
              fontSubfamily={fontMetrics.fontSubfamily}
              validateFileType={validateFileType}
              handleFontFile={handleFontFile}
              fontFileError={fontFileError}
              fontSize={fontSizePx}
              fontWeight={fontMetrics.fontWeight}
              lineHeight={lineHeight}
              marginTop={marginTop}
              xHeightPx={xHeightPx}
              handleXHeightChange={handleXHeightChange}
              xHeightRatio={xHeightRatio}
              handleXHeightRatioChange={handleXHeightRatioChange}
              lineHeightRatio={lineHeightRatio}
              handleLineHeightRatioChange={handleLineHeightRatioChange}
              validateXHeight={validateXHeight}
              xHeightRangeError={xHeightRangeError}
              xHeightStepError={xHeightStepError}
              handleNoXHeight={handleNoXHeight}
              validateModularScale={validateModularScale}
              modularScaleRangeError={modularScaleRangeError}
              modularScaleStepError={modularScaleStepError}
              handleNoModularScale={handleNoModularScale}
            />
          </Route>
          <Route path="/css">
            <GetCSS
              fontFamily={fontMetrics.fontFamily}
              fontSize={fontSizePx}
              fontWeight={fontMetrics.fontWeight}
              lineHeight={lineHeight}
              marginTop={marginTop}
            />
          </Route>
          <Route component={Error} />
        </Switch>
        <Footer />
      </SideMarginRegulator>
    </>
  );
}
export default App;

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import {SideMarginRegulator} from './theme/style';
import Header from './components/Header';
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
    fontFamily: sessionStorage.getItem('fontFamily'),
    fontSubfamily: sessionStorage.getItem('fontSubfamily'),
    fontWeight: sessionStorage.getItem('fontWeight'),
    xHeight: sessionStorage.getItem('xHeight'),
    unitsPerEm: sessionStorage.getItem('unitsPerEm'),
    capHeight: sessionStorage.getItem('capHeight'),
  });
  React.useEffect(() => {
    sessionStorage.setItem('fontFamily', fontMetrics.fontFamily);
    sessionStorage.setItem('fontSubfamily', fontMetrics.fontSubfamily);
    sessionStorage.setItem('fontWeight', fontMetrics.fontWeight);
    sessionStorage.setItem('xHeight', fontMetrics.xHeight);
    sessionStorage.setItem('unitsPerEm', fontMetrics.unitsPerEm);
    sessionStorage.setItem('capHeight', fontMetrics.capHeight);
  }, [fontMetrics]);

  const [fontFileError, setFontFileError] = React.useState('');

  const [xHeightPx, setXHeightPx] = React.useState(
    sessionStorage.getItem('xHeightPx'),
  );
  React.useEffect(() => {
    if (xHeightPx === null) {
      return; // otherwise, the string "null" will be assigned.
    }
    sessionStorage.setItem('xHeightPx', xHeightPx);
  }, [xHeightPx]);

  const [xHeightRangeError, setXHeightRangeError] = React.useState(
    sessionStorage.getItem('xHeightRangeError'),
  );
  React.useEffect(() => {
    if (xHeightRangeError === null) {
      return;
    }
    sessionStorage.setItem('xHeightRangeError', xHeightRangeError);
  }, [xHeightRangeError]);

  const [xHeightStepError, setXHeightStepError] = React.useState(
    sessionStorage.getItem('xHeightStepError'),
  );
  React.useEffect(() => {
    if (xHeightStepError === null) {
      return;
    }
    sessionStorage.setItem('xHeightStepError', xHeightStepError);
  }, [xHeightStepError]);

  const [xHeightRatio, setXHeightRatio] = React.useState(
    sessionStorage.getItem('xHeightRatio'),
  );
  React.useEffect(() => {
    if (xHeightRatio === null) {
      return;
    }
    sessionStorage.setItem('xHeightRatio', xHeightRatio);
  }, [xHeightRatio]);

  const [lineHeightRatio, setLineHeightRatio] = React.useState(
    sessionStorage.getItem('lineHeightRatio'),
  );
  React.useEffect(() => {
    if (lineHeightRatio === null) {
      return;
    }
    sessionStorage.setItem('lineHeightRatio', lineHeightRatio);
  }, [lineHeightRatio]);

  const [modularScaleRangeError, setModularScaleRangeError] = React.useState(
    sessionStorage.getItem('modularScaleRangeError'),
  );
  React.useEffect(() => {
    if (modularScaleRangeError === null) {
      return;
    }
    sessionStorage.setItem('modularScaleRangeError', modularScaleRangeError);
  }, [modularScaleRangeError]);

  const [modularScaleStepError, setModularScaleStepError] = React.useState(
    sessionStorage.getItem('modularScaleStepError'),
  );
  React.useEffect(() => {
    if (modularScaleStepError === null) {
      return;
    }
    sessionStorage.setItem('modularScaleStepError', modularScaleStepError);
  }, [modularScaleStepError]);

  const [fontSizePx, setFontSizePx] = React.useState(
    sessionStorage.getItem('fontSizePx'),
  );
  React.useEffect(() => {
    if (fontSizePx === null) {
      return;
    }
    sessionStorage.setItem('fontSizePx', fontSizePx);
  }, [fontSizePx]);

  const [lineHeight, setLineHeight] = React.useState(
    sessionStorage.getItem('lineHeight'),
  );
  React.useEffect(() => {
    sessionStorage.setItem('lineHeight', lineHeight);
  }, [lineHeight]);

  const [marginTop, setMarginTop] = React.useState(
    sessionStorage.getItem('marginTop'),
  );
  React.useEffect(() => {
    if (marginTop === null) {
      return;
    }
    sessionStorage.setItem('marginTop', marginTop);
  }, [marginTop]);

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

  const handleDemo = () => {
    setFontMetrics({
      fontFamily: 'Open Sans',
      fontSubfamily: 'Regular',
      fontWeight: '400',
      xHeight: 1096,
      unitsPerEm: 2048,
      capHeight: 1462,
    });
  };

  const updateFontMetrics = newFontMetrics => {
    setFontMetrics({
      fontFamily: newFontMetrics.preferredFamily,
      fontSubfamily: newFontMetrics.preferredSubfamily,
      fontWeight: newFontMetrics.usWeightClass,
      xHeight: newFontMetrics.sxHeight,
      unitsPerEm: newFontMetrics.unitsPerEm,
      capHeight: newFontMetrics.sCapHeight,
    });
  };

  const handleNoXHeight = errors => {
    if (errors.valueMissing) {
      setXHeightRangeError('true');
    } else {
      if (errors.patternMismatch) {
        return; // Keep the error status intact
      } else {
        setXHeightRangeError('');
      }
    }
  };

  const validateXHeight = (inputValue, errors) => {
    if (errors.patternMismatch) {
      if (/\.\d{5}/.test(inputValue)) {
        setXHeightStepError('true');
      } else {
        setXHeightRangeError('true');
      }
    } else {
      setXHeightRangeError('');
      setXHeightStepError('');
    }
  };

  const handleNoModularScale = errors => {
    if (errors.valueMissing) {
      setModularScaleRangeError('true');
    } else {
      if (errors.patternMismatch) {
        return; // Keep the error status intact
      } else {
        setModularScaleRangeError('');
      }
    }
  };

  const validateModularScale = (inputValue, errors) => {
    if (errors.patternMismatch) {
      if (/\.\d{5}/.test(inputValue)) {
        setModularScaleStepError('true');
      } else {
        setModularScaleRangeError('true');
      }
    } else {
      setModularScaleRangeError('');
      setModularScaleStepError('');
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
            <Header stepNow={1} topPage />
            <Home
              validateFileType={validateFileType}
              handleDemo={handleDemo}
              handleFontFile={handleFontFile}
              fontFileError={fontFileError}
              updateFontMetrics={updateFontMetrics}
            />
          </Route>
          <Route path="/x-height">
            <Header stepNow={2} />
            <Xheight
              fontFamily={fontMetrics.fontFamily}
              fontFileError={fontFileError}
              fontSubfamily={fontMetrics.fontSubfamily}
              handleFontFile={handleFontFile}
              handleNoXHeight={handleNoXHeight}
              handleXHeightChange={handleXHeightChange}
              validateFileType={validateFileType}
              validateXHeight={validateXHeight}
              xHeightPx={xHeightPx}
              xHeightRangeError={xHeightRangeError}
              xHeightStepError={xHeightStepError}
            />
          </Route>
          <Route path="/modular-scale">
            <Header stepNow={3} />
            <ModularScale
              fontFamily={fontMetrics.fontFamily}
              fontFileError={fontFileError}
              fontSubfamily={fontMetrics.fontSubfamily}
              handleFontFile={handleFontFile}
              handleLineHeightRatioChange={handleLineHeightRatioChange}
              handleNoModularScale={handleNoModularScale}
              handleXHeightRatioChange={handleXHeightRatioChange}
              lineHeightRatio={lineHeightRatio}
              modularScaleRangeError={modularScaleRangeError}
              modularScaleStepError={modularScaleStepError}
              validateFileType={validateFileType}
              validateModularScale={validateModularScale}
              xHeightPx={xHeightPx}
              xHeightRatio={xHeightRatio}
            />
          </Route>
          <Route path="/preview">
            <Header stepNow={4} />
            <Preview
              fontFamily={fontMetrics.fontFamily}
              fontFileError={fontFileError}
              fontSize={fontSizePx}
              fontSubfamily={fontMetrics.fontSubfamily}
              fontWeight={fontMetrics.fontWeight}
              handleFontFile={handleFontFile}
              handleLineHeightRatioChange={handleLineHeightRatioChange}
              handleNoModularScale={handleNoModularScale}
              handleNoXHeight={handleNoXHeight}
              handleXHeightChange={handleXHeightChange}
              handleXHeightRatioChange={handleXHeightRatioChange}
              lineHeight={lineHeight}
              lineHeightRatio={lineHeightRatio}
              marginTop={marginTop}
              modularScaleRangeError={modularScaleRangeError}
              modularScaleStepError={modularScaleStepError}
              xHeightPx={xHeightPx}
              xHeightRangeError={xHeightRangeError}
              xHeightRatio={xHeightRatio}
              xHeightStepError={xHeightStepError}
              validateFileType={validateFileType}
              validateModularScale={validateModularScale}
              validateXHeight={validateXHeight}
            />
          </Route>
          <Route path="/css">
            <Header stepNow={5} />
            <GetCSS
              fontFamily={fontMetrics.fontFamily}
              fontSize={fontSizePx}
              fontWeight={fontMetrics.fontWeight}
              lineHeight={lineHeight}
              marginTop={marginTop}
            />
          </Route>
          <Route>
            <Header stepNow={0} />
            <Error />
          </Route>
        </Switch>
        <Footer />
      </SideMarginRegulator>
    </>
  );
}
export default App;

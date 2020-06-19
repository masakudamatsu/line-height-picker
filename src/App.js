import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import store from './helper/store';

import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './animation.css';

import GlobalStyle from './theme/GlobalStyle';
import {
  CenterAligner,
  FullScreenSpreader,
  SideMarginRegulator,
} from './theme/style';

import Error from './components/Error';
import Footer from './components/Footer';
import GetCSS from './components/GetCSS';
import Header from './components/Header';
import Home from './components/Home';
import ModularScale from './components/ModularScale';
import Preview from './components/Preview';
import Xheight from './components/Xheight';

import {fontFileExtensionsRegex as validFontFileTypes} from './helper/fontFileExtensions';
import getFontMetrics from './helper/getFontMetrics';
import {getFontSize, getLineHeight, getMarginTop} from './helper/cssGenerators';

const opentype = require('opentype.js');

function App() {
  // Define states //////////////////////////////

  const initialState = name => {
    return store.get(name) || '';
    // During the first rendering of the app, getItem() returns null.
    // The useEffect() will then assign a string "null" to sessionStorage.
    // This short-circuit evaluation avoids this.
  };

  // C
  const [cssButtonDisabled, setCssButtonDisabled] = React.useState(
    initialState('cssButtonDisabled'),
  );
  React.useEffect(() => {
    store.set('cssButtonDisabled', cssButtonDisabled);
  }, [cssButtonDisabled]);

  // F
  const [fontFileError, setFontFileError] = React.useState('');

  const [fontMetrics, setFontMetrics] = React.useState({
    ascender: initialState('ascender'),
    capHeight: initialState('capHeight'),
    descender: initialState('descender'), // NOTE: this value is always negative
    fontFamily: initialState('fontFamily'),
    fontSubfamily: initialState('fontSubfamily'),
    fontWeight: initialState('fontWeight'),
    unitsPerEm: initialState('unitsPerEm'),
    xHeight: initialState('xHeight'),
  });
  React.useEffect(() => {
    store.set('ascender', fontMetrics.ascender);
    store.set('capHeight', fontMetrics.capHeight);
    store.set('descender', fontMetrics.descender);
    store.set('fontFamily', fontMetrics.fontFamily);
    store.set('fontSubfamily', fontMetrics.fontSubfamily);
    store.set('fontWeight', fontMetrics.fontWeight);
    store.set('unitsPerEm', fontMetrics.unitsPerEm);
    store.set('xHeight', fontMetrics.xHeight);
  }, [fontMetrics]);

  const [fontSizePx, setFontSizePx] = React.useState(
    initialState('fontSizePx'),
  );
  React.useEffect(() => {
    store.set('fontSizePx', fontSizePx);
  }, [fontSizePx]);

  // L
  const [lineHeight, setLineHeight] = React.useState(
    initialState('lineHeight'),
  );
  React.useEffect(() => {
    store.set('lineHeight', lineHeight);
  }, [lineHeight]);

  const [lineHeightRatio, setLineHeightRatio] = React.useState(
    initialState('lineHeightRatio'),
  );
  React.useEffect(() => {
    store.set('lineHeightRatio', lineHeightRatio);
  }, [lineHeightRatio]);

  const [
    lineHeightRatioRangeError,
    setLineHeightRatioRangeError,
  ] = React.useState(initialState('lineHeightRatioRangeError'));
  React.useEffect(() => {
    store.set('lineHeightRatioRangeError', lineHeightRatioRangeError);
  }, [lineHeightRatioRangeError]);

  const [
    lineHeightRatioStepError,
    setLineHeightRatioStepError,
  ] = React.useState(initialState('lineHeightRatioStepError'));
  React.useEffect(() => {
    store.set('lineHeightRatioStepError', lineHeightRatioStepError);
  }, [lineHeightRatioStepError]);

  // M
  const [marginTop, setMarginTop] = React.useState(initialState('marginTop'));
  React.useEffect(() => {
    if (marginTop === null) {
      return;
    }
    store.set('marginTop', marginTop);
  }, [marginTop]);

  // N
  const [nextButtonDisabled, setNextButtonDisabled] = React.useState(
    initialState('nextButtonDisabled'),
  );
  React.useEffect(() => {
    store.set('nextButtonDisabled', nextButtonDisabled);
  }, [nextButtonDisabled]);

  // P
  const [previewButtonDisabled, setPreviewButtonDisabled] = React.useState(
    initialState('previewButtonDisabled'),
  );
  React.useEffect(() => {
    store.set('previewButtonDisabled', previewButtonDisabled);
  }, [previewButtonDisabled]);

  // X
  const [xHeightPx, setXHeightPx] = React.useState(initialState('xHeightPx'));
  React.useEffect(() => {
    store.set('xHeightPx', xHeightPx);
  }, [xHeightPx]);

  const [xHeightRangeError, setXHeightRangeError] = React.useState(
    initialState('xHeightRangeError'),
  );
  React.useEffect(() => {
    store.set('xHeightRangeError', xHeightRangeError);
  }, [xHeightRangeError]);

  const [xHeightStepError, setXHeightStepError] = React.useState(
    initialState('xHeightStepError'),
  );
  React.useEffect(() => {
    store.set('xHeightStepError', xHeightStepError);
  }, [xHeightStepError]);

  const [xHeightRatio, setXHeightRatio] = React.useState(
    initialState('xHeightRatio'),
  );
  React.useEffect(() => {
    store.set('xHeightRatio', xHeightRatio);
  }, [xHeightRatio]);

  const [xHeightRatioRangeError, setXHeightRatioRangeError] = React.useState(
    initialState('xHeightRatioRangeError'),
  );
  React.useEffect(() => {
    store.set('xHeightRatioRangeError', xHeightRatioRangeError);
  }, [xHeightRatioRangeError]);

  const [xHeightRatioStepError, setXHeightRatioStepError] = React.useState(
    initialState('xHeightRatioStepError'),
  );
  React.useEffect(() => {
    store.set('xHeightRatioStepError', xHeightRatioStepError);
  }, [xHeightRatioStepError]);

  // Prop functions ////////////////////////////

  // D
  const disableCssButton = () => {
    setCssButtonDisabled('true');
  };

  const disableNextButton = () => {
    setNextButtonDisabled('true');
  };

  const disablePreviewButton = () => {
    setPreviewButtonDisabled('true');
  };

  // H
  const handleDemo = () => {
    setFontFileError(false);
    setFontMetrics({
      fontFamily: 'Open Sans',
      fontSubfamily: 'Regular',
      fontWeight: '400',
      xHeight: 1096,
      unitsPerEm: 2048,
      capHeight: 1462,
      ascender: 2189, // hhea.ascender
      descender: -600, // hhea.descender
    });
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
            ascender: newFontMetrics.ascender,
            descender: newFontMetrics.descender,
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

  const handleLineHeightRatioChange = (newLineHeightRatio, errors) => {
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

    // Error handling
    if (lineHeightRatioRangeError) {
      if (!errors.patternMismatch) {
        setLineHeightRatioRangeError('');
        if (!xHeightRatioRangeError && !xHeightRatioStepError) {
          if (previewButtonDisabled) {
            setPreviewButtonDisabled('');
          }
          if (cssButtonDisabled) {
            setCssButtonDisabled('');
          }
        }
      }
    } else if (lineHeightRatioStepError) {
      if (!errors.patternMismatch) {
        setLineHeightRatioStepError('');
        if (!xHeightRatioRangeError && !xHeightRatioStepError) {
          if (previewButtonDisabled) {
            setPreviewButtonDisabled('');
          }
          if (cssButtonDisabled) {
            setCssButtonDisabled('');
          }
        }
      }
    }
  };

  const handleNoLineHeightRatio = errors => {
    if (errors.valueMissing) {
      setLineHeightRatioRangeError('true');
    } else {
      if (errors.patternMismatch) {
        return; // Keep the error status intact
      } else {
        setLineHeightRatioRangeError('');
      }
    }
  };

  const handleNoModularScale = errors => {
    if (errors.valueMissing) {
      setXHeightRatioRangeError('true');
    } else {
      if (errors.patternMismatch) {
        return; // Keep the error status intact
      } else {
        setXHeightRatioRangeError('');
      }
    }
  };

  const handleNoXHeight = errors => {
    if (errors.valueMissing) {
      setXHeightRangeError('true');
    }
  };

  const handleXHeightChange = (xHeight, errors) => {
    // NOTE: Line-height won't change with x-height
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
    // Error handling
    if (xHeightRangeError) {
      if (!errors.patternMismatch) {
        setXHeightRangeError('');
        if (nextButtonDisabled) {
          setNextButtonDisabled('');
        }
        if (previewButtonDisabled) {
          setPreviewButtonDisabled('');
        }
        if (cssButtonDisabled) {
          setCssButtonDisabled('');
        }
      }
    } else if (xHeightStepError) {
      if (!errors.patternMismatch) {
        setXHeightStepError('');
        if (nextButtonDisabled) {
          setNextButtonDisabled('');
        }
        if (previewButtonDisabled) {
          setPreviewButtonDisabled('');
        }
        if (cssButtonDisabled) {
          setCssButtonDisabled('');
        }
      }
    }
  };

  const handleXHeightRatioChange = (newXHeightRatio, errors) => {
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

    // Error handling
    if (xHeightRatioRangeError) {
      if (!errors.patternMismatch) {
        setXHeightRatioRangeError('');
        if (!lineHeightRatioRangeError && !lineHeightRatioStepError) {
          if (previewButtonDisabled) {
            setPreviewButtonDisabled('');
          }
          if (cssButtonDisabled) {
            setCssButtonDisabled('');
          }
        }
      }
    } else if (xHeightRatioStepError) {
      if (!errors.patternMismatch) {
        setXHeightRatioStepError('');
        if (!lineHeightRatioRangeError && !lineHeightRatioStepError) {
          if (previewButtonDisabled) {
            setPreviewButtonDisabled('');
          }
          if (cssButtonDisabled) {
            setCssButtonDisabled('');
          }
        }
      }
    }
  };

  // V
  const validateFileType = file => {
    if (validFontFileTypes.test(file.name)) {
      return true;
    } else {
      setFontFileError('fileExtension');
      return false;
    }
  };

  const validateLineHeightRatio = (inputValue, errors) => {
    if (errors.patternMismatch) {
      if (/\.\d{5}/.test(inputValue)) {
        setLineHeightRatioStepError('true');
      } else {
        setLineHeightRatioRangeError('true');
      }
    } else {
      setLineHeightRatioRangeError('');
      setLineHeightRatioStepError('');
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

  const validateXHeightRatio = (inputValue, errors) => {
    if (errors.patternMismatch) {
      if (/\.\d{5}/.test(inputValue)) {
        setXHeightRatioStepError('true');
      } else {
        setXHeightRatioRangeError('true');
      }
    } else {
      setXHeightRatioRangeError('');
      setXHeightRatioStepError('');
    }
  };

  return (
    <>
      <GlobalStyle />
      <SideMarginRegulator>
        <CenterAligner>
          <ScrollToTop>
            <Switch>
              <Route path="/" exact>
                <Header stepNow={1} topPage />
              </Route>
              <Route path="/x-height">
                <Header stepNow={2} />
              </Route>
              <Route path="/modular-scale">
                <Header stepNow={3} />
              </Route>
              <Route path="/preview">
                <Header stepNow={4} />
              </Route>
              <Route path="/css">
                <Header stepNow={5} />
              </Route>
              <Route>
                <FullScreenSpreader>
                  <Header stepNow={0} />
                  <Error />
                  <Footer page404 />
                </FullScreenSpreader>
              </Route>
            </Switch>
            <Route
              render={({location}) => {
                if (!location.state) {
                  location.state = {
                    transition: '',
                    duration: 0,
                  };
                }
                return (
                  <TransitionGroup
                    childFactory={child =>
                      React.cloneElement(child, {
                        classNames: location.state.transition,
                        timeout: location.state.duration,
                      })
                    }
                    style={{position: 'relative'}}
                  >
                    <CSSTransition
                      key={location.key}
                      mountOnEnter
                      timeout={300}
                      unmountOnExit
                    >
                      <div>
                        <Switch location={location}>
                          <Route path="/" exact>
                            <Home
                              fontFileError={fontFileError}
                              handleDemo={handleDemo}
                              handleFontFile={handleFontFile}
                              validateFileType={validateFileType}
                            />
                            <Footer />
                          </Route>
                          <Route path="/x-height">
                            <Xheight
                              ascender={fontMetrics.ascender}
                              capHeight={fontMetrics.capHeight}
                              descender={fontMetrics.descender}
                              disableNextButton={disableNextButton}
                              fontFamily={fontMetrics.fontFamily}
                              fontFileError={fontFileError}
                              fontSubfamily={fontMetrics.fontSubfamily}
                              fontWeight={fontMetrics.fontWeight}
                              handleFontFile={handleFontFile}
                              handleNoXHeight={handleNoXHeight}
                              handleXHeightChange={handleXHeightChange}
                              nextButtonDisabled={nextButtonDisabled}
                              unitsPerEm={fontMetrics.unitsPerEm}
                              validateFileType={validateFileType}
                              validateXHeight={validateXHeight}
                              xHeightPx={xHeightPx}
                              xHeightRangeError={xHeightRangeError}
                              xHeightStepError={xHeightStepError}
                            />
                            <Footer />
                          </Route>
                          <Route path="/modular-scale">
                            <ModularScale
                              ascender={fontMetrics.ascender}
                              capHeight={fontMetrics.capHeight}
                              descender={fontMetrics.descender}
                              disablePreviewButton={disablePreviewButton}
                              fontFamily={fontMetrics.fontFamily}
                              fontFileError={fontFileError}
                              fontSubfamily={fontMetrics.fontSubfamily}
                              fontWeight={fontMetrics.fontWeight}
                              handleFontFile={handleFontFile}
                              handleLineHeightRatioChange={
                                handleLineHeightRatioChange
                              }
                              handleNoLineHeightRatio={handleNoLineHeightRatio}
                              handleNoModularScale={handleNoModularScale}
                              handleNoXHeight={handleNoXHeight}
                              handleXHeightChange={handleXHeightChange}
                              handleXHeightRatioChange={
                                handleXHeightRatioChange
                              }
                              lineHeightRatio={lineHeightRatio}
                              lineHeightRatioRangeError={
                                lineHeightRatioRangeError
                              }
                              lineHeightRatioStepError={
                                lineHeightRatioStepError
                              }
                              previewButtonDisabled={previewButtonDisabled}
                              unitsPerEm={fontMetrics.unitsPerEm}
                              validateFileType={validateFileType}
                              validateLineHeightRatio={validateLineHeightRatio}
                              validateXHeight={validateXHeight}
                              validateXHeightRatio={validateXHeightRatio}
                              xHeightPx={xHeightPx}
                              xHeightRangeError={xHeightRangeError}
                              xHeightStepError={xHeightStepError}
                              xHeightRatio={xHeightRatio}
                              xHeightRatioRangeError={xHeightRatioRangeError}
                              xHeightRatioStepError={xHeightRatioStepError}
                            />
                            <Footer />
                          </Route>
                          <Route path="/preview">
                            <Preview
                              ascender={fontMetrics.ascender}
                              capHeight={fontMetrics.capHeight}
                              cssButtonDisabled={cssButtonDisabled}
                              descender={fontMetrics.descender}
                              disableCssButton={disableCssButton}
                              fontFamily={fontMetrics.fontFamily}
                              fontFileError={fontFileError}
                              fontMetrics={fontMetrics}
                              fontSize={fontSizePx}
                              fontSubfamily={fontMetrics.fontSubfamily}
                              fontWeight={fontMetrics.fontWeight}
                              handleFontFile={handleFontFile}
                              handleLineHeightRatioChange={
                                handleLineHeightRatioChange
                              }
                              handleNoLineHeightRatio={handleNoLineHeightRatio}
                              handleNoModularScale={handleNoModularScale}
                              handleNoXHeight={handleNoXHeight}
                              handleXHeightChange={handleXHeightChange}
                              handleXHeightRatioChange={
                                handleXHeightRatioChange
                              }
                              lineHeight={lineHeight}
                              lineHeightRatio={lineHeightRatio}
                              lineHeightRatioRangeError={
                                lineHeightRatioRangeError
                              }
                              lineHeightRatioStepError={
                                lineHeightRatioStepError
                              }
                              marginTop={marginTop}
                              unitsPerEm={fontMetrics.unitsPerEm}
                              validateFileType={validateFileType}
                              validateLineHeightRatio={validateLineHeightRatio}
                              validateXHeight={validateXHeight}
                              validateXHeightRatio={validateXHeightRatio}
                              xHeightPx={xHeightPx}
                              xHeightRangeError={xHeightRangeError}
                              xHeightStepError={xHeightStepError}
                              xHeightRatio={xHeightRatio}
                              xHeightRatioRangeError={xHeightRatioRangeError}
                              xHeightRatioStepError={xHeightRatioStepError}
                            />
                            <Footer />
                          </Route>
                          <Route path="/css">
                            <GetCSS
                              fontFamily={fontMetrics.fontFamily}
                              fontSize={fontSizePx}
                              fontWeight={fontMetrics.fontWeight}
                              lineHeight={lineHeight}
                              marginTop={marginTop}
                            />
                            <Footer />
                          </Route>
                        </Switch>
                      </div>
                    </CSSTransition>
                  </TransitionGroup>
                );
              }}
            />
          </ScrollToTop>
        </CenterAligner>
      </SideMarginRegulator>
    </>
  );
}
export default App;

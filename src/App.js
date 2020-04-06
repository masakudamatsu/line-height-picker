import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import Title from './components/Title';
import {SideMarginRegulator} from './theme/style';
import Home from './components/Home';
import Xheight from './components/Xheight';
import ModularScale from './components/ModularScale';
import Preview from './components/Preview';
import GetCSS from './components/GetCSS';
import Error from './components/Error';
import Footer from './components/Footer';

import getFontMetrics from './helper/getFontMetrics';

const opentype = require('opentype.js');

function App() {
  const [fontMetrics, setFontMetrics] = React.useState({
    fontFamily: 'Open Sans',
    fontSubfamily: 'Regular',
    fontWeight: 400,
    xHeight: 1096,
    unitsPerEm: 2048,
  });
  const [fontLoadFailure, setFontLoadFailure] = React.useState(false);

  const [xHeightPx, setXHeightPx] = React.useState('');
  const [xHeightRangeError, setXHeightRangeError] = React.useState(false);
  const [xHeightStepError, setXHeightStepError] = React.useState(false);

  const [xHeightRatio, setXHeightRatio] = React.useState('');
  const [lineHeightRatio, setLineHeightRatio] = React.useState('');
  const [fontSizePx, setFontSizePx] = React.useState('');
  const [lineHeight, setLineHeight] = React.useState('');

  const handleFontFile = fontFile => {
    try {
      const reader = new FileReader();
      reader.onload = function(e) {
        const font = opentype.parse(e.target.result, {lowMemory: true});
        // Save font metrics as the state object
        const newFontMetrics = getFontMetrics(font);
        setFontMetrics({
          fontFamily: newFontMetrics.fontFamily,
          fontSubfamily: newFontMetrics.fontSubfamily,
          fontWeight: newFontMetrics.usWeightClass,
          xHeight: newFontMetrics.sxHeight,
          unitsPerEm: newFontMetrics.unitsPerEm,
        });
        // Load the uploaded font
        const newFontFace = new FontFace(
          newFontMetrics.fontFamily,
          e.target.result,
        );
        newFontFace
          .load()
          .then(loaded_face => {
            document.fonts.add(loaded_face);
          })
          .catch(error => {
            setFontLoadFailure(true);
            console.log('The uploaded font has failed to be loaded,');
          });
      };
      reader.readAsArrayBuffer(fontFile);
    } catch (error) {
      console.log(error);
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

  const xHeightToFontSize = xHeight => {
    setXHeightPx(xHeight);
    const xHeightToFontSizeRatio = fontMetrics.xHeight / fontMetrics.unitsPerEm;
    const newFontSize = (xHeight / xHeightToFontSizeRatio).toFixed(4);
    setFontSizePx(newFontSize);
  };

  const handleXHeightRatio = newXHeightRatio => {
    setXHeightRatio(newXHeightRatio);
    generateLineHeight(newXHeightRatio, lineHeightRatio);
  };
  const handleLineHeightRatio = newLineHeightRatio => {
    setLineHeightRatio(newLineHeightRatio);
    generateLineHeight(xHeightRatio, newLineHeightRatio);
  };
  const generateLineHeight = (xHeightRatio, lineHeightRatio) => {
    if (xHeightRatio === 0) {
      console.log('X-height ratio is zero...');
      return;
    }
    const lineToXRatio = lineHeightRatio / xHeightRatio;
    const newLineHeightPx = xHeightPx * lineToXRatio;
    const newLineHeight = (newLineHeightPx / fontSizePx).toFixed(4);
    setLineHeight(newLineHeight);
  };
  return (
    <>
      <GlobalStyle />
      <Title />
      <SideMarginRegulator>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home handleFontFile={handleFontFile} />
            </Route>
            <Route path="/x-height">
              <Xheight
                handleFontFile={handleFontFile}
                fontFamily={fontMetrics.fontFamily}
                fontSubfamily={fontMetrics.fontSubfamily}
                xHeightPx={xHeightPx}
                validateXHeight={validateXHeight}
                xHeightRangeError={xHeightRangeError}
                xHeightStepError={xHeightStepError}
                xHeightToFontSize={xHeightToFontSize}
              />
            </Route>
            <Route path="/modular-scale">
              <ModularScale
                fontFamily={fontMetrics.fontFamily}
                fontSubfamily={fontMetrics.fontSubfamily}
                handleFontFile={handleFontFile}
                xHeightPx={xHeightPx}
                xHeightRatio={xHeightRatio}
                lineHeightRatio={lineHeightRatio}
                handleXHeightRatio={handleXHeightRatio}
                handleLineHeightRatio={handleLineHeightRatio}
              />
            </Route>
            <Route path="/preview">
              <Preview
                fontFamily={fontMetrics.fontFamily}
                fontSubfamily={fontMetrics.fontSubfamily}
                handleFontFile={handleFontFile}
                fontSize={fontSizePx}
                fontWeight={fontMetrics.fontWeight}
                lineHeight={lineHeight}
                xHeightPx={xHeightPx}
                xHeightToFontSize={xHeightToFontSize}
                xHeightRatio={xHeightRatio}
                handleXHeightRatio={handleXHeightRatio}
                lineHeightRatio={lineHeightRatio}
                handleLineHeightRatio={handleLineHeightRatio}
              />
            </Route>
            <Route path="/css">
              <GetCSS
                fontFamily={fontMetrics.fontFamily}
                fontSize={fontSizePx}
                fontWeight={fontMetrics.fontWeight}
                lineHeight={lineHeight}
              />
            </Route>
            <Route component={Error} />
          </Switch>
        </main>
        <Footer />
      </SideMarginRegulator>
    </>
  );
}
export default App;

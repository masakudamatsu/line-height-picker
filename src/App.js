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

function App() {
  const [fontMetrics, setFontMetrics] = React.useState({
    fontFamily: 'Open Sans',
    fontWeight: 400,
    xHeight: 1096,
    unitsPerEm: 2048,
  });
  const [xHeightPx, setXHeightPx] = React.useState('');
  const [fontSizePx, setFontSizePx] = React.useState('');
  const [lineHeight, setLineHeight] = React.useState('');

  const xHeightToFontSize = xHeight => {
    setXHeightPx(xHeight);
    const xHeightToFontSizeRatio = fontMetrics.xHeight / fontMetrics.unitsPerEm;
    const newFontSize = (xHeight / xHeightToFontSizeRatio).toFixed(4);
    setFontSizePx(newFontSize);
  };
  return (
    <>
      <GlobalStyle />
      <Title />
      <SideMarginRegulator>
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/x-height">
              <Xheight
                xHeightPx={xHeightPx}
                xHeightToFontSize={xHeightToFontSize}
              />
            </Route>
            <Route path="/modular-scale" component={ModularScale} />
            <Route path="/preview" component={Preview} />
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

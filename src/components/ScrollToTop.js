// Adapted from zurfyx's code at https://stackoverflow.com/a/54343182/11847654
// React-Router's official docs solution didn't work for some reason: https://reacttraining.com/react-router/web/guides/scroll-restoration

import React, {useEffect, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

function ScrollToTop({history, children}) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);

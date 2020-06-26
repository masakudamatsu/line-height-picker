// Adapted from https://stackoverflow.com/a/54112771/11847654

import {useEffect} from 'react';

const Page = props => {
  useEffect(() => {
    document.title = props.title || 'Line-height Picker';
  }, []);

  return props.children;
};

export default Page;

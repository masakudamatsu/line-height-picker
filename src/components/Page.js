// Adapted from https://stackoverflow.com/a/54112771/11847654

import {useEffect} from 'react';

const Page = props => {
  useEffect(() => {
    document.title = props.title || 'Line-height Picker';
    document
      .querySelector(`meta[name=${props.meta.name}]`)
      .setAttribute('content', props.meta.content); // See https://stackoverflow.com/a/36073112/11847654
  }, []);

  return props.children;
};

export default Page;

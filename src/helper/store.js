// Custom-build store.js
// See https://www.npmjs.com/package/store-js#user-content-make-your-own-build

const engine = require('store/src/store-engine');
const storages = [
  require('store/storages/sessionStorage'),
  require('store/storages/oldFF-globalStorage'), // Firefox 2-5 (0.02% usage)
  require('store/storages/oldIE-userDataStorage'), // IE 5-7 (0.03% usage)
  require('store/storages/cookieStorage'), // Safari private mode
  require('store/storages/memoryStorage'), // fallback
];
const plugins = [];
const store = engine.createStore(storages, plugins);

export default store;

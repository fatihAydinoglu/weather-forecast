// @flow

import devConfigStore from './configureStore.dev';
import prodConfigStore from './configureStore.prod';

// Create store according to environment.
if (process.env.NODE_ENV === 'production') {
  module.exports = prodConfigStore;
} else {
  module.exports = devConfigStore;
}

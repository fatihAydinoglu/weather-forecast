import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {App} from './modules/core';
import configureStore from './store/configureStore';

// Create redux store
const store = configureStore();

// Render react application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

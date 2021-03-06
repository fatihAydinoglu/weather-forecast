// @flow

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../rootReducer';

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return store;
};

export default configureStore;

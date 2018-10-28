import {
  createStore,
  applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import appReducer from '../reducer';

export default function configureStore(initialState) {
  const store = createStore(
    appReducer,
    initialState,
    applyMiddleware(thunk, logger),
  );
  return store;
}

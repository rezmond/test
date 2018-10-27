import {
  createStore,
  applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';

import appReducer from '../reducer';

export default function configureStore(initialState) {
  const store = createStore(
    appReducer,
    initialState,
    applyMiddleware(thunk),
  );
  return store;
}


import { combineReducers } from 'redux';

import catsReducer from './components/Cats/reducer';

const reducer = combineReducers({
  cats: catsReducer,
});

export default reducer;

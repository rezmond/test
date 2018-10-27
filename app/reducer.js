
import { combineReducers } from 'redux';

import filmsReducer from './components/Films/reducer';

const reducer = combineReducers({
  films: filmsReducer,
});

export default reducer;

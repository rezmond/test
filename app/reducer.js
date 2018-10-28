
import { combineReducers } from 'redux';

import filmsReducer from './components/Films/reducer';
import activeFilmReducer from './components/Film/reducer';

const reducer = combineReducers({
  films: filmsReducer,
  activeFilm: activeFilmReducer,
});

export default reducer;

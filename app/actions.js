import { loadFilmsList } from './components/Films/actions';

export function loadData() {
  return async (dispatch) => {
    await dispatch(loadFilmsList());
  };
}

export default {};

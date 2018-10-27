import { fetchFilmsListPage } from './api';
import { setFilmsList } from './components/Films/actions';

export function loadData() {
  return async dispatch => {
    const { json, response } = await fetchFilmsListPage();

    if (response.status !== 200) {
      console.log("error", json);
    }

    dispatch(setFilmsList(json))
  };
}

export default {};

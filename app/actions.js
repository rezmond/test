import { fetchFilmsListPage } from './api';
import { setFilmsList } from './components/Films/actions';

export function loadData() {
  return async dispatch => {
    const { data, response } = await fetchFilmsListPage();

    if (response.status !== 200) {
      console.log("error");
      return;
    }

    dispatch(setFilmsList(data));
  };
}

export default {};

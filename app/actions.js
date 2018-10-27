import { fetchCatsListPage } from './api';
import { setCatsList } from './components/Cats/actions';

export function loadData() {
  return async dispatch => {
    const { json, response } = await fetchCatsListPage();

    if (response.status !== 200) {
      console.log("error", json);
    }

    dispatch(setCatsList(json))
  };
}

export default {};

import { fetchFilmsListPage } from './api';

export const SET = 'app/SET';

export function setFilmsList(films) {
  return {
    type: SET,
    payload: films,
  };
}

export function onFilmOpen(id) {
  return () => {
    console.log(id);
  };
}

export function loadFilmsList() {
  return async (dispatch) => {
    const { data, response } = await fetchFilmsListPage();
    console.log("response:", response);

    if (response.status !== 200) {
      console.log("error");
      return;
    }

    dispatch(setFilmsList(data));
  };
}

export default {};

import { fetchFilmsListPage } from './api';

export const SET = 'app/Films/SET';

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

    if (response.status !== 200) {
      // status code 400 or 404
      alert('Something went wrong on request to server');
      return;
    }

    dispatch(setFilmsList(data));
  };
}

export default {};

import * as api from './api';

import { getStateSlice as getFilmEntities } from '../Films/reducer';

export const SET = 'app/cativeFilm/SET';

function setFilmData(data) {
  return {
    type: SET,
    payload: data,
  };
}

export function openFilm(id) {
  return async (dispatch, getState) => {
    const state = getState();
    const filmEntities = getFilmEntities(state).entities;
    const targetFilm = filmEntities[id];

    const { response, data } = await api.fetchFilmData(targetFilm.url);

    if (response.status !== 200) {
      // status code 400 or 404
      alert('Something went wrong on request to server');
      return;
    }

    dispatch(setFilmData(data));
  };
}

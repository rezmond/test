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

    const { data } = await api.fetchFilmData(targetFilm.url);
    dispatch(setFilmData(data));
  };
}

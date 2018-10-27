export const SET = 'app/SET';

export function setFilmsList(films) {
  return {
    type: SET,
    payload: films,
  };
}

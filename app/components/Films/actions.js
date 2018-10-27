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

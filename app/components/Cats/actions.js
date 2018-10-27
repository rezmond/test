export const SET = 'app/SET';

export function setCatsList(cats) {
  return {
    type: SET,
    payload: cats,
  };
}

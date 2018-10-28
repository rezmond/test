import { SET } from './actions';

const INIT = {};
export default function reducer(state = INIT, action) {
  switch (action.type) {
    case SET:
      return action.payload;
    default: return state;
  }
}

export function getStateSlice(state) {
  return state.activeFilm;
}

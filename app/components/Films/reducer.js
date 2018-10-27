
import { createSelector } from 'reselect';

import { SET } from './actions';

const INIT = {
  ids: [],
  entities: {},
};
export default function reducer(state = INIT, action) {
  switch (action.type) {
    case SET:
      return action.payload;
    default: return state;
  }
}

export function getStateSlice(state) {
  return state.films;
}

export const getFilmsList = createSelector(
  getStateSlice,
  ({ ids, entities }) => ids.map(id => entities[id]),
);

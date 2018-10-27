
import { SET } from './actions';

const INIT = {
  list: [],
};
export default function reducer(state = INIT, action) {
  switch (action.type) {
    case SET:
      return {
        ...state,
        list: action.payload,
      };
    default: return state;
  }
}

export function getStateSlice(state) {
  return state.cats;
}

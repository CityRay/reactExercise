import { FETCH_POSTS, FETCH_POST } from '../actions';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POST:
      console.log(action.payload);
      return { ...state, post: action.payload.data };
    case FETCH_POSTS:
      console.log(action.payload);
      return  { ...state, all: action.payload.data };
    default:
      return state;
  }
}
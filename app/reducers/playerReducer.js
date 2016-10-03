import {
  SPOTIFY_PLAYER_CHANGE
} from '../actions/playerActions';

const initialState = null;

// reducer
export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_PLAYER_CHANGE:
      return action.uri;
    default:
      return state;
  }
}

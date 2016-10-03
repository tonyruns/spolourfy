import {
  SPOTIFY_PLAYER_CHANGE
} from '../actions/playerActions';

const initialState = {};

// reducer
export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_PLAYER_CHANGE:
      return Object.assign({}, state, { uri: action.uri });

    default:
      return state;
  }
}

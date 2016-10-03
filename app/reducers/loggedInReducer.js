import {
  SPOTIFY_TOKENS
} from '../actions/spotifyActions';

// reducer
export default function reduce(state = false, action) {
  switch (action.type) {
    case SPOTIFY_TOKENS:
      return action.loggedIn;
    default:
      return state;
  }
}

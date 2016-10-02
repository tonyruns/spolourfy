import {
  SPOTIFY_TOKENS
} from '../actions/spotifyActions';

/** The initial state; no tokens and no user info */
const initialState = {
  tokens: {
    accessToken: null,
    refreshToken: null
  }
};

// reducer
export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_TOKENS:
      const {accessToken, refreshToken} = action;
      return Object.assign({}, state, {
        tokens: Object.assign({}, state.tokens, {
          accessToken: accessToken,
          refreshToken: refreshToken
        })
      });

    default:
      return state;
  }
}

import {
  SPOTIFY_TOKENS, SPOTIFY_ALBUM_BEGIN, SPOTIFY_ALBUM_SUCCESS, SPOTIFY_ALBUM_FAILURE
} from '../actions/Actions.js';

/** The initial state; no tokens and no user info */
const initialState = {
  accessToken: null,
  refreshToken: null,
  user: {
    loading: false,
    country: null,
    display_name: null,
    email: null,
    external_urls: {},
    followers: {},
    href: null,
    id: null,
    images: [],
    product: null,
    type: null,
    uri: null,
  },
  albums: {
    loading: null,
    items: [] 
  }
};

// reducer
export default function reduce(state = initialState, action) {
  switch (action.type) {
    // when we get the tokens... set the tokens!
    case SPOTIFY_TOKENS:
      const {accessToken, refreshToken} = action;
      return Object.assign({}, state, {accessToken, refreshToken});

    // set our loading property when the loading begins
    case SPOTIFY_ALBUM_BEGIN:
      return Object.assign({}, state, {
        albums: Object.assign({}, state.albums, {loading: true})
      });

    // when we get the data merge it in
    case SPOTIFY_ALBUM_SUCCESS:
      return Object.assign({}, state, {
        albums: Object.assign({}, state.albums, {items: action.data.items}, {loading: false})
      });

    // currently no failure state
    case SPOTIFY_ALBUM_FAILURE:
      return state;

    default:
      return state;
  }
}

import {
  SPOTIFY_ALBUM_BEGIN, SPOTIFY_ALBUM_SUCCESS, SPOTIFY_ALBUM_FAILURE
} from '../actions/spotifyActions';

/** The initial state; no tokens and no user info */
const initialState = {
  albums: {
    loading: null,
    items: []
  }
};

// reducer
export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_ALBUM_BEGIN:
      return Object.assign({}, state, {
        albums: Object.assign({}, state.albums, {loading: true})
      });

    case SPOTIFY_ALBUM_SUCCESS:
      return Object.assign({}, state, {
        albums: Object.assign({}, state.albums, {items: action.data.tracks.items}, {loading: false})
      });

    case SPOTIFY_ALBUM_FAILURE:
      return state;

    default:
      return state;
  }
}

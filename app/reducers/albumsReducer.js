import {
  SPOTIFY_ALBUM_BEGIN, SPOTIFY_ALBUM_SUCCESS, SPOTIFY_ALBUM_FAILURE
} from '../actions/spotifyActions';

/** The initial state */
const initialState = {
  loading: null,
  items: []
};

// reducer
export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_ALBUM_BEGIN:
      return Object.assign({}, state, {
        loading: true
      });
    case SPOTIFY_ALBUM_SUCCESS:
      return Object.assign({}, state, {
        items: action.data.tracks.items,
        loading: false
      });
    default:
      return state;
  }
}

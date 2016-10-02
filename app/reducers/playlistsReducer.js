import { SPOTIFY_PLAYLIST_BEGIN, SPOTIFY_PLAYLIST_SUCCESS, SPOTIFY_PLAYLIST_FAILURE } from '../actions/spotifyActions';

const initialState = {
  href: null,
  items: [],
  limit: null,
  next: null,
  offset: null,
  previous: null,
  total: null,
  loading: false
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_PLAYLIST_BEGIN:
      return Object.assign({}, state, { loading: true });
    case SPOTIFY_PLAYLIST_SUCCESS:
      return Object.assign({}, state, action.data, { loading: false });
    default:
      return state;
  }
}
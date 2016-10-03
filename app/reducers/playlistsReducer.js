import {
  SPOTIFY_PLAYLIST_SUCCESS,
  SPOTIFY_PLAYLIST_TRACKS_SUCCESS
} from '../actions/spotifyActions';

const initialState = {
  href: null,
  items: [],
  limit: null,
  next: null,
  offset: null,
  previous: null,
  total: null
};

function reducePlaylistTracks(state = [], action) {
  let playlists = _.cloneDeep(state);
  let playlist = _.find(playlists, playlist => playlist.id == action.playlistId);
  if (playlist)
    playlist.tracks = action.data;
  return playlists;
}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case SPOTIFY_PLAYLIST_SUCCESS:
      return Object.assign({}, state, action.data);
    case SPOTIFY_PLAYLIST_TRACKS_SUCCESS:
      return Object.assign({}, state, {
        items: reducePlaylistTracks(state.items, action)
      });
    default:
      return state;
  }
}
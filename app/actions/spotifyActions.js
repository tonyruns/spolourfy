import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();

// our constants
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_ALBUM_BEGIN = "SPOTIFY_ALBUM_BEGIN";
export const SPOTIFY_ALBUM_SUCCESS = "SPOTIFY_ALBUM_SUCCESS";
export const SPOTIFY_ALBUM_FAILURE = "SPOTIFY_ALBUM_FAILURE";
export const SPOTIFY_PLAYLIST_BEGIN = "SPOTIFY_PLAYLIST_BEGIN";
export const SPOTIFY_PLAYLIST_SUCCESS = "SPOTIFY_PLAYLIST_SUCCESS";
export const SPOTIFY_PLAYLIST_FAILURE = "SPOTIFY_PLAYLIST_FAILURE";
export const SPOTIFY_PLAYLIST_TRACKS_BEGIN = "SPOTIFY_PLAYLIST_TRACKS_BEGIN";
export const SPOTIFY_PLAYLIST_TRACKS_SUCCESS = "SPOTIFY_PLAYLIST_TRACKS_SUCCESS";
export const SPOTIFY_PLAYLIST_TRACKS_FAILURE = "SPOTIFY_PLAYLIST_TRACKS_FAILURE";

/** set the app's access and refresh tokens */
export function setTokens(accessToken, refreshToken) {
  localStorage.setItem(SPOTIFY_TOKENS, JSON.stringify({
    accessToken,
    refreshToken
  }));
  spotifyApi.setAccessToken(accessToken);
}

export function logOut() {
  localStorage.removeItem(SPOTIFY_TOKENS);
  spotifyApi.setAccessToken(null);
}

export function getMySavedAlbums(limit, offset) {
  return dispatch => {
    dispatch({ type: SPOTIFY_ALBUM_BEGIN });
    return spotifyApi.getMySavedTracks({
      limit : limit,
      offset: offset
    }).then(data => {
      dispatch({ type: SPOTIFY_ALBUM_SUCCESS, data: data });
    }).catch(e => {
      dispatch({ type: SPOTIFY_ALBUM_FAILURE, error: e });
    });
  }
}

export function getUserPlaylists() {
  return dispatch => {
    dispatch({ type: SPOTIFY_PLAYLIST_BEGIN });
    return spotifyApi.getUserPlaylists()
      .then(data => dispatch({ type: SPOTIFY_PLAYLIST_SUCCESS, data }))
      .catch(error => dispatch({ type: SPOTIFY_PLAYLIST_FAILURE, error }));
  }
}

export function getPlaylistTracks(userId, playlistId) {
  return dispatch => {
    dispatch({ type: SPOTIFY_PLAYLIST_TRACKS_BEGIN });
    return spotifyApi.getPlaylistTracks(userId, playlistId)
      .then(data => dispatch({
        type: SPOTIFY_PLAYLIST_TRACKS_SUCCESS,
        playlistId,
        data
      }))
      .catch(error => dispatch({ type: SPOTIFY_PLAYLIST_TRACKS_FAILURE, error }));
  }
}

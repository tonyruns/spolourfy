import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();

// our constants
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_ALBUM_BEGIN = "SPOTIFY_ALBUM_BEGIN";
export const SPOTIFY_ALBUM_SUCCESS = "SPOTIFY_ALBUM_SUCCESS";
export const SPOTIFY_ALBUM_FAILURE = "SPOTIFY_ALBUM_FAILURE";

/** set the app's access and refresh tokens */
export function setTokens({accessToken, refreshToken}) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}

export function getMySavedAlbums(limit, offset) {
  return dispatch => {
    dispatch({ type: SPOTIFY_ALBUM_BEGIN});
    spotifyApi.getMySavedAlbums({
      limit : limit,
      offset: offset
    }).then(data => {
      dispatch({ type: SPOTIFY_ALBUM_SUCCESS, data: data });
    }).catch(e => {
      dispatch({ type: SPOTIFY_ALBUM_FAILURE, error: e });
    });
  }
}

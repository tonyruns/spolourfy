import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();

// our constants
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';
export const SPOTIFY_ALBUM_BEGIN = "SPOTIFY_ALBUM_BEGIN";
export const SPOTIFY_ALBUM_SUCCESS = "SPOTIFY_ALBUM_SUCCESS";
export const SPOTIFY_ALBUM_FAILURE = "SPOTIFY_ALBUM_FAILURE";

/** set the app's access and refresh tokens */
export function setTokens(accessToken, refreshToken) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}

/* get the user's info from the /me api */
export function getMyInfo() {
  return dispatch => {
    dispatch({ type: SPOTIFY_ME_BEGIN});
    spotifyApi.getMe().then(data => {
      dispatch({ type: SPOTIFY_ME_SUCCESS, data: data });
    }).catch(e => {
      dispatch({ type: SPOTIFY_ME_FAILURE, error: e });
    });
  };
}

export function getMySavedAlbums() {
  return dispatch => {
    dispatch({ type: SPOTIFY_ALBUM_BEGIN});
    spotifyApi.getMySavedAlbums({
      limit : 50,
      offset: 0
    }).then(data => {
      console.log(data);
      dispatch({ type: SPOTIFY_ALBUM_SUCCESS, data: data });
    }).catch(e => {
      dispatch({ type: SPOTIFY_ALBUM_FAILURE, error: e });
    });
  }
}

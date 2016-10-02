const Spotify = require('spotify-web-api-node');

// configure the express server
const CLIENT_ID = process.env.client_id || 'ea8305c15cbb43f6ae22874019f923e0';
const CLIENT_SECRET = process.env.client_secret || '25862222fd804af1800d6dcd6c7fb12b';
const FRONTEND_URI = process.env.frontend_uri || 'http://localhost:6969';
const REDIRECT_URI = process.env.redirect_uri || 'http://localhost:3000/api/callback';
const STATE_KEY = 'spotify_auth_state';
// your application requests authorization
const scopes = ['user-read-private', 'user-read-email', 'user-library-read'];

// configure spotify
const spotifyApi = new Spotify({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
});

/** Generates a random string containing numbers and letters of N characters */
const generateRandomString = N => (Math.random().toString(36)+Array(N).join('0')).slice(2, N+2);

function login(res) {
  const state = generateRandomString(16);
  res.cookie(STATE_KEY, state);
  res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
}

function callback(req, res) {
  const { code, state } = req.query;
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null;
  // first do state validation
  if (state === null || state !== storedState) {
    // if the state is valid, get the authorization code and pass it on to the client
    res.redirect(`${FRONTEND_URI}/error`);
  } else {
    res.clearCookie(STATE_KEY);

    // Retrieve an access token and a refresh token
    spotifyApi.authorizationCodeGrant(code).then(data => {
      const { expires_in, access_token, refresh_token } = data.body;

      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      // use the access token to access the Spotify Web API
      spotifyApi.getMe().then(({ body }) => {
        console.log(body);
      });

      // we can also pass the token to the browser to make requests from there
      res.redirect(`${FRONTEND_URI}/user/${access_token}/${refresh_token}`);
    }).catch(err => {
      res.redirect(`${FRONTEND_URI}/error`);
    });
  }
}

module.exports = {
  login,
  callback
}
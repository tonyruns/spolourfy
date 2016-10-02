var express = require('express');
var router = express.Router();
var _ = require('lodash');

var Colors = require('../modules/colors');
var SpotifyAuth = require('../modules/spotifyauth');

/**
 * The /imagecolor endpoint
 * Accepts an image url, and returns the dominant color.
 */
router.post('/imagecolor', (req, res, next) => {
  const { body } = req;
  if (_.isEmpty(body))
    return res.status(400).send({ error: 'empty request body'} );
  if (!_.isString(body))
    return res.status(400).send({ error: 'invalid body'} );

  Colors.getColor(body).then(color => {
    res.send(color);
  });
});

/**
 * The /imagecolors endpoint
 * Accepts an array of image urls, and returns the dominant color.
 */
router.post('/imagecolors', (req, res, next) => {
  const { body } = req;
  if (_.isEmpty(body))
    return res.status(400).send({ error: 'empty request body'} );
  if (!_.isArray(body))
    return res.status(400).send({ error: 'invalid body'} );

  Colors.getColors(body).then(colors => {
    res.send(colors);
  });
});

/**
 * The /login endpoint
 * Redirect the client to the spotify authorize url,
 * Set the user's state in the cookie.
 */
router.get('/login', (_, res) => {
  SpotifyAuth.login(res);
});

/**
 * The /callback endpoint - hit after the user logs in to spotifyApi
 * Verify that the state we put in the cookie matches the state in the query
 * parameter. Then, if it matches, redirect the user to the user page. If it
 * does not match, redirect the user to an error page.
 */
router.get('/callback', (req, res) => {
  SpotifyAuth.callback(req, res);
});

module.exports = router;

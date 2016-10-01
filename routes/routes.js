var express = require('express');
var router = express.Router();
var _ = require('lodash');
var color = require('onecolor');
var async = require('async');

/* GET users listing. */
router.get('/colortest', function(req, res, next) {
  var SpotifyWebApi = require('spotify-web-api-node');
  var getColors = require('get-image-colors');
  var spotifyApi = new SpotifyWebApi({
      clientId: 'ea8305c15cbb43f6ae22874019f923e0',
      clientSecret: '25862222fd804af1800d6dcd6c7fb12b'
  });

  spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    async.parallel(data.body.items.map(item => {
        return callback => {
            const url = item.images[0].url;
            getColors(url, (err, albumColors) => {
                callback(null, {
                    rgb: albumColors[0]._rgb,
                    hsv: color('rgb(' + albumColors[0]._rgb[0] +', ' + albumColors[0]._rgb[1] + ', ' + albumColors[0]._rgb[2] +')').hsv(),
                    url
                });
            });
        };
    }), (err, results) => {
        res.send(results);
    });

  }, function(err) {
      console.error(err);
  });
  // res.send('respond with a resource');
});
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

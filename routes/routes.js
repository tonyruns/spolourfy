var express = require('express');
var router = express.Router();
var _ = require('lodash');

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
      // console.log('Artist albums', data.body);
      // console.log(data.body.items[0].images[0].url);
      let colors = [];
      for (let i = 0; i < data.body.items.length; i++) {
          getColors(data.body.items[i].images[0].url, function(err, albumColors) {
              colors.push({
                  colour: albumColors[0],
                  album: data.body.items[i].images[0].url
              });
              if (colors.length === 20) {
                  res.send(colors);
              }
          });
      }

  }, function(err) {
      console.error(err);
  });
  // res.send('respond with a resource');
});
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

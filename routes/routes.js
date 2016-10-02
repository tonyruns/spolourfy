var express = require('express');
var router = express.Router();
var _ = require('lodash');
var color = require('onecolor');
var async = require('async');

/* GET users listing. */
router.get('/colortest/:artist', function(req, res, next) {
  var SpotifyWebApi = require('spotify-web-api-node');
  var getColors = require('get-image-colors');
  var spotifyApi = new SpotifyWebApi({
    clientId: 'ea8305c15cbb43f6ae22874019f923e0',
    clientSecret: '25862222fd804af1800d6dcd6c7fb12b'
  });

  // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  const artist = req.params.artist;
  spotifyApi.searchArtists(artist)
  .then(function(data) {
      return data.body.artists.items[0].id;
  })
  .then(artistID => {
      return spotifyApi.getArtistAlbums(artistID)
  })
  .then(function(data) {
    async.parallel(data.body.items.map(item => {
      return callback => {
        const url = item.images[0].url;
        getColors(url, (err, albumColors) => {
          let result = null;
          if (!albumColors)
            return callback(null, result);
          for (let i = 0; i < 5; i++) {
            rgb = albumColors[i]._rgb;
            let c = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
            hsv = color(c).hsv();
            if (i == 0 || (hsv.value() > 0.3 && hsv.saturation() > 0.3))
              result = {rgb, hsv, url};

            if ((hsv.value() > 0.3 && hsv.saturation() > 0.3))
              break;
          }
          console.log('done');
          callback(null, Object.assign(result, {albumColors}));
        });
      };
    }), (err, results) => {
      res.send(results.filter(r => r));
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

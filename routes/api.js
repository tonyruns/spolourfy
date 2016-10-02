var express = require('express');
var router = express.Router();
var async = require('async');
var _ = require('lodash');

var Colors = require('../modules/colors');

router.post('/imagecolors', (req, res, next) => {
  const { body } = req;
  console.log(body);
  if (_.isEmpty(body))
    return res.status(400).send({ error: 'empty request body'} );
  if (!_.isArray(body))
    return res.status(400).send({ error: 'invalid body'} );

  async.parallel(body.map(url => {
    return callback => {
      Colors.getColor(url).then(results => {
        callback(null, results);
      }, err => {
        callback(null, null);
      });
    };
  }), (err, results) => {
    res.send(results.filter(r => r));
  });
});

module.exports = router;

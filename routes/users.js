var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hot', function(req, res, next) {
    res.json({"message": "how are you"});
});

module.exports = router;

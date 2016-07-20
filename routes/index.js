var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dog', function(req, res, next) {
  res.send("woof I'm a dog");
});

module.exports = router;

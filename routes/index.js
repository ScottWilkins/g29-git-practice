var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/dog', function(req, res, next) {
  res.send("woof I'm a dog");
});

router.get('/cat', function(req, res, next) {
  res.send("Meow, I'm a cat")
});

router.get('/duck', function(req, res, next) {
  res.send("Quack, I'm a duck")
})

module.exports = router;

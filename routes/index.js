var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Movie Info System" });
  res.set('Access-Control-Allow-Origin', '*');
  //res.json(film);
});

module.exports = router;

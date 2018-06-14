var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Splat'});
});

router.post('/auth', function(req, res){
  console.log("Auth in progress...");
  fetch('accounts.spotify.com/authorize')
  res.sendStatus(200);
});

module.exports = router;

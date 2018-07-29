var express = require('express');
var router = express.Router();

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.access_token){
    spotifyApi.setAccessToken(req.query.access_token);
    spotifyApi.getMyTopArtists()
    .then(function(data) {
      console.log(data.body);
    }, function(err) {
      console.log('Something went wrong!', err);
    });
  }
  res.render('index', { title: 'Splat'});
});

module.exports = router;

// splat algorithm

const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(
  new SpotifyStrategy(
    {
      clientID: '14423eb6c978401d92181dc3a6a74830',
      clientSecret: '07fd2ef9f6684136a394b748d384999d',
      callbackURL: 'http://localhost:8888/auth'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({ spotifyId: profile.id }, function(err, user) {
        return done(err, user);
      });
    }
  )
);

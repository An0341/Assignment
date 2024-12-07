const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

const initPassport = (passport) => {
  // JWT strategy
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      async (jwtPayload, done) => {
        try {
          const user = await User.findById(jwtPayload.id);
          if (user) return done(null, user);
          return done(null, false);
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );

  // OAuth strategy (Google example)
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        callbackURL: '/api/v1/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ googleId: profile.id });
          if (!user) {
            user = await User.create({ googleId: profile.id, name: profile.displayName });
          }
          return done(null, user);
        } catch (err) {
          return done(err, false);
        }
      }
    )
  );
};

module.exports = { initPassport };

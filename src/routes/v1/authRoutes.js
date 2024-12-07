const express = require('express');
const passport = require('passport');
const authController = require('../../controllers/v1/authController');

const router = express.Router();

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/protected', passport.authenticate('jwt', { session: false }), authController.protected);
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  authController.googleCallback
);

module.exports = router;

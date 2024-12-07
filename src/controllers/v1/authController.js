const authService = require('../../services/authService');

exports.register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

exports.googleCallback = async (req, res, next) => {
  try {
    const token = await authService.generateToken(req.user);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

exports.protected = async (req, res, next) => {
  try {
    res.status(200).json(req.user);
  } catch (err) {
    next(err);
  }
};
const User = require('../models/User');

exports.getAllUsers = async () => {
  return await User.find({});
};

exports.getUserById = async (id) => {
  return await User.findById(id);
};

exports.updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
};

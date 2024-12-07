const Role = require('../models/Role');

exports.getAllRoles = async () => {
  return await Role.find({});
};

exports.createRole = async (data) => {
  const role = new Role(data);
  return await role.save();
};

exports.updateRole = async (id, data) => {
  return await Role.findByIdAndUpdate(id, data, {
    new: true,
  });
}
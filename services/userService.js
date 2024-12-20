const userModel = require("../models/userModel");

exports.getAllUsers = async () => {
  return await userModel.findAll();
};

exports.getUserById = async (id) => {
  return await userModel.findById(id);
};

exports.createUser = async (userData) => {
  return await userModel.create(userData);
};

exports.updateUser = async (id, userData) => {
  return await userModel.update(id, userData);
};

exports.deleteUser = async (id) => {
  return await userModel.remove(id);
};

// 예시: MongoDB 사용 시 mongoose 활용
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

exports.findAll = async () => {
  return await User.find({});
};

exports.findById = async (id) => {
  return await User.findById(id);
};

exports.create = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

exports.update = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

exports.remove = async (id) => {
  return await User.findByIdAndDelete(id);
};

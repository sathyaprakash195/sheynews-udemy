const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: "" },
    email: { type: String, required: "" },
    password: { type: String, required: "" },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model('users' , userSchema)

module.exports = UserModel

const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    nome: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

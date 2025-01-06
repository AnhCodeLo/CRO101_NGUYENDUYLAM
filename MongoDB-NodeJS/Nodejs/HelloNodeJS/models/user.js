const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Tạo Collection (Bảng) Users
const Users = new Schema(
  {
    username: { type: String, unique: true, required: true, maxLength: 255 },
    password: { type: String },
    email: { type: String, required: true },
    name: { type: String },
    avatar: { type: String },
    age: { type: Number, min: 18, max: 65 },
    available: { type: Boolean, default: false }, // Bỏ unique: true
  },
  {
    timestamps: true,
  }
);

// Export model
module.exports = mongoose.model("user", Users);

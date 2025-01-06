const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Tạo Collection (Bảng) Distributor
const Distributors = new Schema(
  {
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

// Export model
module.exports = mongoose.model("distributor", Distributors);

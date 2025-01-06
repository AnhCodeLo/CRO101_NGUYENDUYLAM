const mongoose = require("mongoose");
const Counter = require("./counter");
const Schema = mongoose.Schema;

// Tạo Collection (Bảng) Fruits
const Fruits = new Schema(
  {
    product_id: { type: Number, unique: true },
    name: { type: String },
    quantity: { type: Number },
    price: { type: Number },
    status: { type: Number },
    images: { type: Array },
    description: { type: String },
    id_distributor: { type: Schema.Types.ObjectId, ref: "distributor" },
  },
  {
    timestamps: true,
  }
);

Fruits.pre("save", async function (next) {
  const doc = this;
  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "product_id" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    doc.product_id = counter.seq;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("fruit", Fruits);

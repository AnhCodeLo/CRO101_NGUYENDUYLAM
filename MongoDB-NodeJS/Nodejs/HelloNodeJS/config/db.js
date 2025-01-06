const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const atlat =
  "mongodb+srv://nguyenduylam2710:ChPppmbMo3PqYvnX@cluster0.91xa3.mongodb.net/mySQL?retryWrites=true&w=majority&appName=Cluster0";
const connect = async () => {
  try {
    await mongoose.connect(atlat, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect success");

    // Đảm bảo rằng đường dẫn tới model là chính xác
    const Fruit = require("../models/fruit");
    const Counter = require("../models/counter");

    // Cập nhật các tài liệu hiện có để thêm product_id nếu không có
    const updateExistingFruits = async () => {
      const fruits = await Fruit.find({ product_id: { $exists: false } });
      for (let fruit of fruits) {
        const counter = await Counter.findByIdAndUpdate(
          { _id: "product_id" },
          { $inc: { seq: 1 } },
          { new: true, upsert: true }
        );
        fruit.product_id = counter.seq;
        await fruit.save();
      }
    };

    await updateExistingFruits();
  } catch (error) {
    console.log("Connect fail");
    console.log(error);
  }
};

module.exports = { connect };

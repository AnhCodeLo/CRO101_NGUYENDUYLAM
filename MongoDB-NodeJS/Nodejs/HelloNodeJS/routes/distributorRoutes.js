var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const modelDistributor = require("../models/distributor");

// GET test route
router.get("/test", function (req, res, next) {
  res.send("respond with a resource distributors test");
});

// POST add data
router.post("/add", async (req, res) => {
  try {
    const model = new modelDistributor(req.body);
    const result = await model.save();
    if (result) {
      res.json({
        status: 200,
        message: "Thêm thành công",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        message: "Thêm thất bại",
        data: [],
      });
    }
    //res.status(200).send(result);
  } catch (error) {
    console.error("Error adding user:", error);
  }
});

//-----------------------------------------------------------------

// GET list data (bỏ comment nếu cần dùng)
router.get("/list", async (req, res) => {
  try {
    const result = await modelDistributor.find({});
    //res.send(result);
    if (result) {
      res.json({
        status: 200,
        message: "List",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        message: "lỗi không có dữ liệu",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});

//--------------------------------------------------------------------

// Tìm kiếm theo id
router.get("/getbyid/:id", async (req, res) => {
  const { id } = req.params;

  // Kiểm tra nếu ID là ObjectId hợp lệ
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).json({
      status: 500,
      message: "ID không hợp lệ",
      data: [],
    });
  }

  try {
    const result = await modelDistributor.findById(id);

    if (result) {
      res.send(result);
    } else {
      res.json({
        status: 404,
        message: "Không tìm thấy người dùng với ID",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).send({ error: "Lỗi khi tìm kiếm người dùng" });
  }
});

//----------------------------------------------------------------------

// PATCH update data (partial update)
router.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;

  // Kiểm tra nếu ID là ObjectId hợp lệ
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).json({
      status: 500,
      message: "ID không hợp lệ",
      data: [],
    });
  }

  try {
    const result = await modelDistributor.findByIdAndUpdate(id, req.body);

    if (result) {
      const rs = await result.save();
      //res.send(rs);
      res.json({
        status: 200,
        message: "cập nhật thành công",
        data: rs,
      });
    } else {
      res.json({
        status: 400,
        message: "Không tìm thấy người dùng với ID",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).send({ error: "Lỗi khi tìm kiếm người dùng" });
  }
});

//--------------------------------------------------------------------

// Delete User
// PATCH update data (partial update)
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  // Kiểm tra nếu ID là ObjectId hợp lệ
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(600).json({
      status: 500,
      message: "ID không hợp lệ",
      data: [],
    });
  }

  try {
    const result = await modelDistributor.findByIdAndDelete(id);

    if (result) {
      res.json({
        status: 200,
        message: "Xoá thành công",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        message: "Xoá thất bại",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).send({ error: "Lỗi khi tìm kiếm người dùng" });
  }
});

//----------------------------------------------------------------------
router.get("/search", async (req, res) => {
  try {
    const key = req.query.key;
    const result = await modelDistributor
      .find({ name: { $regex: key, $options: "i" } }) // Chỉnh sửa ở đây
      .sort({ createAt: -1 });

    if (result.length > 0) {
      res.json({
        status: 200,
        message: "Tìm thấy",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        message: "Không có dữ liệu",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      status: 500,
      message: "Lỗi server",
      data: [],
    });
  }
});

module.exports = router;

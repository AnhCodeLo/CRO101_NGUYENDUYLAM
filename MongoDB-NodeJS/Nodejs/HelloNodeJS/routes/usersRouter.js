var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const modelUser = require("../models/user");
const Transporter = require("../config/mail");
const Upload = require("../config/upload");

// GET test route
router.get("/test", function (req, res, next) {
  res.send("respond with a resource user test");
});

router.post("/add", Upload.single("avatar"), async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const { file } = req;

    // Kiểm tra dữ liệu đầu vào
    if (!username || !email || !password) {
      return res.status(400).json({
        status: 400,
        message: "Username, email và password là bắt buộc",
      });
    }

    // Kiểm tra file avatar
    if (!file) {
      return res.status(400).json({
        status: 400,
        message: "Avatar là bắt buộc",
      });
    }

    // Tạo URL avatar
    const urlImages = `${req.protocol}://${req.get("host")}/uploads/${
      file.filename
    }`;

    // Tạo model và lưu vào DB
    const model = new modelUser({
      ...req.body,
      avatar: urlImages,
    });
    const result = await model.save();

    // Gửi email nếu thành công
    const mailOption = {
      from: "nguyenduylam2710@gmail.com",
      to: model.email,
      subject: "Welcome to nodeJS",
      text: "Chúc mừng bạn đã đăng ký thành công",
    };
    await Transporter.sendMail(mailOption);

    res.json({
      status: 200,
      message: "Thêm thành công",
      data: result,
    });
  } catch (error) {
    console.error("Error adding user:", error); // Ghi lỗi chi tiết ra console

    // Trả về lỗi chi tiết cho client (nếu cần)
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyValue)[0];
      return res.status(400).json({
        status: 400,
        message: `Trường ${duplicateField} đã tồn tại`,
      });
    }

    res.status(500).json({
      status: 500,
      error: error.message || "Failed to add user",
    });
  }
});

//-----------------------------------------------------------------

// GET list data (bỏ comment nếu cần dùng)
router.get("/list", async (req, res) => {
  try {
    const result = await modelUser.find({});
    res.send(result);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ error: "Failed to fetch users" });
  }
});

//--------------------------------------------------------------------

// Tìm kiếm theo id
router.get("/getbyid/:id", async (req, res) => {
  const { id } = req.params;

  // Kiểm tra nếu ID là ObjectId hợp lệ
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: 400,
      message: "ID không hợp lệ",
      data: [],
    });
  }

  try {
    const result = await modelUser.findById(id);

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
    return res.status(400).json({
      status: 400,
      message: "ID không hợp lệ",
      data: [],
    });
  }

  try {
    const result = await modelUser.findByIdAndUpdate(id, req.body);

    if (result) {
      const rs = await result.save();
      res.send(rs);
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

//--------------------------------------------------------------------

// Delete User
// PATCH update data (partial update)
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  // Kiểm tra nếu ID là ObjectId hợp lệ
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: 400,
      message: "ID không hợp lệ",
      data: [],
    });
  }

  try {
    const result = await modelUser.findByIdAndDelete(id);

    if (result) {
      res.json({
        status: 200,
        message: "Xoá thành công",
        data: result,
      });
    } else {
      res.json({
        status: 404,
        message: "Xoá thất bại",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).send({ error: "Lỗi khi tìm kiếm người dùng" });
  }
});

module.exports = router;

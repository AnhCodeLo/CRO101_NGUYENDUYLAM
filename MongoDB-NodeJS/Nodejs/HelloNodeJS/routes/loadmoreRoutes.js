const express = require("express");
const router = express.Router();
const Distributor = require("../models/distributor"); // Đường dẫn tới file model của bạn

// API loadmore với phân trang
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
  const limit = parseInt(req.query.limit) || 3; // Số lượng bản ghi mỗi trang, mặc định là 3

  try {
    const distributors = await Distributor.find()
      .skip((page - 1) * limit)
      .limit(limit);

    // Tổng số bản ghi
    const totalItems = await Distributor.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    res.json({
      data: distributors,
      currentPage: page,
      totalPages: totalPages,
      totalItems: totalItems,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

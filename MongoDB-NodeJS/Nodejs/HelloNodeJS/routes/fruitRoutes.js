var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const modelFruit = require("../models/fruit");
const Upload = require("../config/upload");
const JWT = require("jsonwebtoken");
const SECRECT_KEY = "NamNV";

// GET test route
router.get("/test", function (req, res, next) {
  res.send("respond with a resource fruit test");
});

router.post("/add", Upload.array("images", 5), async (req, res) => {
  try {
    const { files } = req;
    const urlImages = files.map(
      (file) => `${req.protocol}://${req.get("host")}/uploads/${file.filename}`
    );
    const user = new modelFruit(req.body);
    user.images = urlImages;

    const result = await user.save();

    res.status(201).send(result);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send({ error: "Failed to add user" });
  }
});

//-----------------------------------------------------------------

router.get("/list", async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);

    let payload;
    JWT.verify(token, SECRECT_KEY, (err, _payload) => {
      if (err) {
        if (err instanceof JWT.TokenExpiredError) return res.sendStatus(401);
        return res.sendStatus(403);
      }
      payload = _payload;
    });

    if (!payload) return; // Dừng lại nếu không có payload hợp lệ

    const result = await modelFruit.find({}).populate("id_distributor");
    res.send(result);
  } catch (error) {
    console.error("Error fetching users:", error);
    if (!res.headersSent) {
      res.status(500).send({ error: "Failed to fetch users" });
    }
  }
});

//--------------------------------------------------------------------

// GET list data theo khoảng giá
router.get("/getListByPrice", async (req, res) => {
  try {
    const { start, end } = req.query;
    const query = { price: { $gte: start, $lte: end } };
    const result = await modelFruit
      .find(query, "name price quantity id_distributor")
      .sort({ quantity: -1 })
      .limit(2)
      .populate("id_distributor");
    res.send(result);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ error: "Failed to fetch users" });
  }
});

//-------------------------------------------------------------------------

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
    const result = await modelFruit.findById(id).populate("id_distributor");

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

// Cập nhật thông tin sản phẩm
router.put("/update/:id", Upload.array("images", 5), async (req, res) => {
  try {
    const { id } = req.params;
    const { files } = req;
    const urlImages = files.map(
      (file) => `${req.protocol}://${req.get("host")}/uploads/${file.filename}`
    );

    const updatedData = req.body;
    if (urlImages.length > 0) {
      updatedData.images = urlImages;
    }

    const result = await modelFruit.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!result) {
      return res.status(404).send({ error: "Product not found" });
    }

    res.send(result);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send({ error: "Failed to update product" });
  }
});

//--------------------------------------------------------------------

// Định nghĩa route để xóa sản phẩm bằng `product_id`
router.delete("/delete/:product_id", async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);

    let payload;
    JWT.verify(token, SECRECT_KEY, (err, _payload) => {
      if (err) {
        if (err instanceof JWT.TokenExpiredError) return res.sendStatus(401);
        return res.sendStatus(403);
      }
      payload = _payload;
    });

    if (!payload) return;

    const productId = req.params.product_id;
    const result = await modelFruit.findOneAndDelete({ product_id: productId });

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
    console.error("Error deleting fruit:", error);
    if (!res.headersSent) {
      res.status(500).send({ error: "Failed to delete fruit" });
    }
  }
});

//=====================================================================

// Tìm kiếm theo tên sản phẩm
router.get("/searchByName", async (req, res) => {
  try {
    const { name } = req.query;

    const result = await modelFruit
      .find({ name: new RegExp(name, "i") })
      .populate("id_distributor");
    res.send(result);
  } catch (error) {
    console.error("Error searching by name:", error);
    res.status(500).send({ error: "Failed to search by name" });
  }
});

//=====================================================================

// Tìm kiếm theo tên sản phẩm và giá
router.get("/searchByNameAndPrice", async (req, res) => {
  try {
    const { name, minPrice, maxPrice } = req.query;
    let query = {};

    if (name) {
      query.name = new RegExp(name, "i");
    }

    if (minPrice && maxPrice) {
      query.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
    } else if (minPrice) {
      query.price = { $gte: Number(minPrice) };
    } else if (maxPrice) {
      query.price = { $lte: Number(maxPrice) };
    }

    const result = await modelFruit.find(query).populate("id_distributor");
    res.send(result);
  } catch (error) {
    console.error("Error searching by name and price:", error);
    res.status(500).send({ error: "Failed to search by name and price" });
  }
});

//===========================================================================

// Lọc sản phẩm theo giá tăng dần hoặc giảm dần
router.get("/filterByPrice", async (req, res) => {
  try {
    const { order } = req.query;
    let sortOption = {};

    if (order === "asc") {
      sortOption.price = 1; // Giá tăng dần
    } else if (order === "desc") {
      sortOption.price = -1; // Giá giảm dần
    } else {
      return res.status(400).send({ error: "Invalid order parameter" });
    }

    const result = await modelFruit
      .find({})
      .sort(sortOption)
      .populate("id_distributor");
    res.send(result);
  } catch (error) {
    console.error("Error filtering by price:", error);
    res.status(500).send({ error: "Failed to filter by price" });
  }
});

//===========================================================================

// Load more sản phẩm
router.get("/loadMore", async (req, res) => {
  try {
    const { page = 1, limit = 4 } = req.query; // Mặc định page = 1 và limit = 4
    const skip = (page - 1) * limit;

    const result = await modelFruit
      .find({})
      .skip(skip)
      .limit(Number(limit))
      .populate("id_distributor");

    res.send(result);
  } catch (error) {
    console.error("Error loading more products:", error);
    res.status(500).send({ error: "Failed to load more products" });
  }
});

//===========================================================================

// Xóa sản phẩm bằng product_id
router.delete("/delete/:product_id", async (req, res) => {
  const { product_id } = req.params;

  try {
    const result = await modelFruit.findOneAndDelete({ product_id });

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
    console.error("Error deleting product:", error);
    res.status(500).send({ error: "Lỗi khi xoá sản phẩm" });
  }
});

//==============================================================

// Định nghĩa route để cập nhật thông tin sản phẩm bằng `product_id`
router.put("/update/:product_id", async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);

    let payload;
    JWT.verify(token, SECRECT_KEY, (err, _payload) => {
      if (err) {
        if (err instanceof JWT.TokenExpiredError) return res.sendStatus(401);
        return res.sendStatus(403);
      }
      payload = _payload;
    });

    if (!payload) return;

    const productId = req.params.product_id;
    const updatedData = req.body;

    const result = await modelFruit.findOneAndUpdate(
      { product_id: productId },
      updatedData,
      { new: true }
    );

    if (result) {
      res.json({
        status: 200,
        message: "Cập nhật thành công",
        data: result,
      });
    } else {
      res.json({
        status: 404,
        message: "Cập nhật thất bại",
        data: [],
      });
    }
  } catch (error) {
    console.error("Error updating fruit:", error);
    if (!res.headersSent) {
      res.status(500).send({ error: "Failed to update fruit" });
    }
  }
});

module.exports = router;

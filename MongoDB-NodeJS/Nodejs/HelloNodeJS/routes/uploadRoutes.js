var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Upload = require("../config/upload");

// GET test route
router.post("/test", function (req, res, next) {
  res.send("respond with a resource upload test");
});

router.post("/mulUpload", Upload.array("images", 5), async (req, res) => {
  try {
    const { files } = req;
    const urlImages = files.map(
      (file) => `${req.protocol}://${req.get("host")}/uploads/${file.filename}`
    );
    console.log(urlImages);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

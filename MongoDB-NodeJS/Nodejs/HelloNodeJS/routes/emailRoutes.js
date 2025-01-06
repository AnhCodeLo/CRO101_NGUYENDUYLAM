var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Transporter = require("../config/mail");

// GET test route
router.post("/test", function (req, res, next) {
  const mailOption = {
    from: "nguyenduylam2710@gmail.com",
    to: "nguyenlamtest27@gmail.com",
    subject: "test mail",
    text: "this is a text email sent NodeJS project",
  };
  Transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      res.status(500).json({ error: "send mail fail" + error });
    } else {
      res.status(200).json({ message: "send mail success" + info.response });
    }
  });
});

module.exports = router;

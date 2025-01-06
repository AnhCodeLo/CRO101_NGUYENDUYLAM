const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "nguyenduylam2710@gmail.com",
    pass: "grns rvjz fwkm pasv",
  },
});
module.exports = transporter;

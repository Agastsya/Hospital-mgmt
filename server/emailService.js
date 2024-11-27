// emailService.js
require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (medicine) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shubham.goel@tech-bridge.biz",
      pass: "627312@SbG",
    },
  });

  const mailOptions = {
    from: "shubham.goel@tech-bridge.biz",
    to: "agastsya007@gmail.com",
    subject: `Reorder Needed for ${medicine.name}`,
    text: `The stock for ${medicine.name} is zero. Please reorder it.`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };

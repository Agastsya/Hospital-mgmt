// emailService.js
require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (medicine) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "agastsya007@gmail.com",
    subject: `Reorder Needed for ${medicine.name}`,
    text: `The stock for ${medicine.name} is zero. Please reorder it.`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };

const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  minimumStock: {
    type: Number,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Near Expiry', 'Low Stock', 'Sufficient Stock'],
    required: true
  },
});

module.exports = mongoose.model("Medicine", medicineSchema);

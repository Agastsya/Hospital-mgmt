const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  priorityCategory: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  admissionDate: {
    type: Date,
    default: Date.now,
  },
  admissionTime: {
    type: String,
    default: () => new Date().toLocaleTimeString(),
  },
});

module.exports = mongoose.model("Patient", patientSchema);

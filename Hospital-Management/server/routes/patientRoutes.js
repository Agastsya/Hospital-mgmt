const express = require("express");
const router = express.Router();
const { getPatients, addPatient } = require("../controllers/patientController");

// @route GET /api/patients
// @desc Get all patients
router.get("/", getPatients);

// @route POST /api/patients
// @desc Add a patient
router.post("/", addPatient);

module.exports = router;

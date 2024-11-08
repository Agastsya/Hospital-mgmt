const Patient = require("../models/patientModel");

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addPatient = async (req, res) => {
  const { name, age, symptoms, priorityCategory } = req.body;

  try {
    const newPatient = new Patient({
      name,
      age,
      symptoms,
      priorityCategory,
    });

    const patient = await newPatient.save();
    return res.json(patient);
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};

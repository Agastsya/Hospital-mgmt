const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const AuthRouter = require("./routes/auth.routes.js")

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.use("/api/patients", require("./routes/patientRoutes.js"));

app.use('/api/auth', AuthRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

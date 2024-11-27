import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddPatient from "./components/AddPatient";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/navbar/navbar";
import PatientList from "./components/PatientList";
import AppointmentSchedulingPage from "./pages/AppointmentSchedulingPage";
import BedAvailabilityPage from "./pages/BedAvailabilityPage";
import MedicineInventoryPage from "./pages/MedicineInventoryPage";
import QueueStatusPage from "./pages/QueueStatusPage";
import Header from "./components/header";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contactus/Contact";
import About from "./components/AboutUs/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/addpatients" element={<AddPatient />} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/bed-availability" element={<BedAvailabilityPage />} />
          <Route path="/queue-status" element={<QueueStatusPage />} />
          <Route path="/appointments" element={<AppointmentSchedulingPage />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/medicine-inventory"
            element={<MedicineInventoryPage />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;

import { useState } from "react";

import "./Register.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("http://localhost:5000/api/auth/register", {
        name: formData.username,
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.msg);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.res.data);
        toast.error(err.res.data.err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="hero-section">
        <div className="photo">
          <img src={"/images/loginSVG.svg"} alt="Register" />
        </div>
        <div className="section">
          <h1 className="register-heading">
            Please <span className="registerSpanner">Register</span> Yourself
          </h1>
          <form onSubmit={handleRegister}>
            <label>Username</label>
            <br />
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="inputbox"
              value={formData.username}
              onChange={handleInputChange}
            />
            <br />
            <label>Email</label>
            <br />
            <input
              disabled={isLoading}
              type="email"
              placeholder="Email"
              id="email"
              className="inputbox"
              value={formData.email}
              onChange={handleInputChange}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              disabled={isLoading}
              type="password"
              placeholder="Password"
              id="password"
              className="inputbox"
              value={formData.password}
              onChange={handleInputChange}
            />
            <br />
            <button disabled={isLoading} type="submit" className="button">
              Register
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
}

export default Register;

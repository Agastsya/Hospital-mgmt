import { useState } from "react";

import "./Register.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.msg);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.err);
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
            Please <span className="registerSpanner">Login</span> Yourself
          </h1>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <br />
            <input
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
              type="password"
              placeholder="Password"
              id="password"
              className="inputbox"
              value={formData.password}
              onChange={handleInputChange}
            />
            <br />
            <button type="submit" className="button">
              Login
            </button>
          </form>
          {/* {message && <p>{message}</p>} */}
        </div>
      </div>
    </>
  );
}

export default Login;
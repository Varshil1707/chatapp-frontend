import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:6002/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((data) => {
        console.log(data.data.message);
      })
      .catch((err) => console.log("Error", err));

    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div className="signup">
      <h1>Register For Chat App</h1>
      <form className="signup-form-container">
        <input
          className="input"
          type="text"
          placeholder="Enter Full Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="input"
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="input"
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="submit-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;

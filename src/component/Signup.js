import React, { useState } from "react";
import "./signup.css";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://chat-app-a2f38-default-rtdb.firebaseio.com/user-details.json",
        {
          name: name,
          email: email,
          password: password,
        }
      )
      .then(() => console.log("Success"))
      .catch((err) => console.log(err));

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

import React, { useState } from "react";
import "./Join.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Join = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("")
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState([])
  const navigate = useNavigate();
  let dataArray = [];

  const sendUser = (e) => {
    e.preventDefault();
    navigate("/chat");
    localStorage.setItem("user",name)
    axios
      .post(
        "http://localhost:6002/login"
      )
      .then((data) => {
          console.log("Success")
      })
      .catch((err) => {
        console.log(err);
      });
      setEmail("")
      setPassword("")
    };

  return (
    <div className="joinPage">
      <div className="joinPageContainer">
        <h1>Chat App</h1>
        {/* <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="joinInput"
          placeholder="Enter Your Email"
          value={email}
        />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="joinInput"
          placeholder="Enter Your Password"
        /> */}
        <input
          value={name}
          type="password"
          onChange={(e) => setName(e.target.value)}
          className="joinInput"
          placeholder="Enter Your name"
        />

        <button className="loginButton" onClick={sendUser}>
          Login In
        </button>
      </div>
    </div>
  );
};

export default Join;

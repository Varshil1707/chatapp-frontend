import React, { useState } from "react";
import "./Join.css";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const sendUser = (e) => {
    e.preventDefault();
    localStorage.setItem("user", user);
    navigate("/chat");
  };

  return (
    <div className="joinPage">
      <div className="joinPageContainer">
        <h1>Chat App</h1>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          id="joinInput"
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          id="joinInput"
          placeholder="Enter Your Password"
        />
      {user.length <= 0 ? 
        <button disabled  className="loginButton" onClick={sendUser}>
          Login In
        </button> :
                  <button  className="loginButton" onClick={sendUser}>
                  Login In
                </button>
      }
      </div>
    </div>
  );
};

export default Join;

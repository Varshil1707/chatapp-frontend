import React, { useState } from "react";
import "./Join.css";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [user, setUser] = useState("");
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
          onChange={(e) => setUser(e.target.value)}
          id="joinInput"
          placeholder="Enter Your Name"
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

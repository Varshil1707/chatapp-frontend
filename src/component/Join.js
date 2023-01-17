import React, { useState } from "react";
import "./Join.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../features/userSlice";

const Join = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let dataArray = [];

  const sendUser = (e) => {
    e.preventDefault();
    navigate("/chat")
    localStorage.setItem("user",name)
    // const body = {
    //   email: "email@email.com",
    //   password: "pass",
    // };

    // axios
    //   .post("http://localhost:6002/login", { email: email, password: password })
    //   .then((data) => {
    //     setAuth(data.data.auth);
    //     dispatch(login())

    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // console.log(auth);
    setEmail("");
    setPassword("");
  };
  // if (auth) {
  //   navigate("/chat");
  // }
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
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="joinInput"
          placeholder="Enter Your name"
        />

        <button className="loginButton" onClick={sendUser}>
          Login In
        </button>
        {/* <Link className="signupButton" to="/signup">
          Register
        </Link> */}
      </div>
    </div>
  );
};

export default Join;

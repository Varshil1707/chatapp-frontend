import axios from "axios";
import React, { useEffect, useState } from "react";
import socketIo from "socket.io-client";
import "./Chat.css";
import Message from "./Message";

const ENDPOINT = "http://localhost:4500/";

const Chat = () => {
  const socket = socketIo(ENDPOINT, { transports: ["websocket"] });
  const user = localStorage.getItem("user");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [id, setId] = useState("");

  const send = () => {
    // const message = document.getElementById('chatInput').value
    socket.emit("message", { message, id });
    console.log(id)
    setMessage("");
  };
  useEffect(() => {
    socket.on("connect", () => {
            axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=falsey"
    )
    .then((data) => {
      console.log(data.data);
    })
    .catch((err) => console.log("err"));
      console.log("connected");
      setId(socket.id);
    });
    socket.emit("joined", { user });
    socket.on("welcome", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });
    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });
   
    socket.on("leave", (data) => {
      console.log(data);
      setMessages([...messages, data]);
    });
    return () => {
      socket.emit("disconnected");
      socket.off();
    };
  }, []);

  useEffect(()=>{
    socket.on("sentMessage", (data) => {
      setMessages([...messages, data]);
      console.log(`${data.user} : ${data.message}` );
    });
    
  },[messages])

  console.log(messages)

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
        <h2>Chat App</h2>
        </div>
        <div className="chatBox">
          {messages.map((data, i) => (
            <Message message={data.message} classes={data.id === id ? 'Right' : 'Left'} user={data.id === id ? "" : data.user} />
          ))}
        </div>
        <div className="inputBox">
          <input
          placeholder="Enter Message Here"
            className="inputBoxInput"
            id="chatInput"
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            value={message}
            
          />
          <button className="inputBoxButton" onClick={send} >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

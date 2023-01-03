import React, { useEffect, useState } from "react";
import socketIo from "socket.io-client";
import "./Chat.css";
import Message from "./Message";
import SendIcon from '@mui/icons-material/Send';

const ENDPOINT = "https://chatapp-backend-ne38.onrender.com";
// const ENDPOINT = "http://localhost:6002/";
let socket;

const Chat = () => {
  const user = localStorage.getItem("user");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [id, setId] = useState("");

  const send = () => {
    // const message = document.getElementById('chatInput').value
    socket.emit("message", { message, id });
    console.log(id);
    setMessage("");
  };
  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      console.log("connected");
      setId(socket.id);
    });
    socket.emit("joined", { user });
    socket.on("welcome", (data) => {
      setMessages([...messages, data]);
    });
    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
    });

    socket.on('disconnect-method',(data)=>console.log(data))

  }, []);

  useEffect(() => {
    socket.on("sentMessage", (data) => {
      setMessages([...messages, data]);
      console.log(`${data.user} : ${data.message}`);
    });
  }, [messages]);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
          <h2>Chat App</h2>
        </div>
        <div className="chatBox">
          {messages.map((data, i) => (
            <Message
              key={i}
              message={data.message}
              classes={data.id === id ? "Right" : "Left"}
              user={data.id === id ? "" : data.user}
            />
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
          <button className="inputBoxButton" onClick={send}>
            <SendIcon fontSize="small" color ="action" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

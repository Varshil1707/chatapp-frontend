import React, { useEffect, useState } from "react";
import socketIo, { io } from "socket.io-client";
import "./Chat.css";
import Message from "./Message";
import SendIcon from "@mui/icons-material/Send";
import Sidebar from "./Sidebar";

// const ENDPOINT = "https://chatapp-backend-ne38.onrender.com";
const ENDPOINT = "http://localhost:6002/";
let socket;

const Chat = () => {
  const user = localStorage.getItem("user");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [clientCount, setClientCount] = useState(0);
  const [updatedClientCount, setUpdatedClientCount] = useState()
  const [id, setId] = useState("");
  // socket = socketIo(ENDPOINT, { transports: ["websocket"] });

  const send = () => {
    // const message = document.getElementById('chatInput').value
    socket.emit("message", { message, id });
    console.log(id);
    setMessage("");
  };
  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });
    console.log(socket);
    console.log("! useEffect");
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
      setClientCount(data.clientCount);
    });

    socket.on("clientsCount", (data) => {
      setClientCount(data.count);
      socket.emit("clientsCount-again",{clientCount})
    });
    console.log(socket);
  }, []);

  useEffect(() => {
    console.log("@ useEffect");
    socket.on("sentMessage", (data) => {
      setMessages([...messages, data]);
      setClientCount(data.clientCount);
      console.log(`${data.user} : ${data.message}`);
    });
  }, [messages]);

  useEffect(() => {
    console.log("# useEffect");
    socket.on("updated-clientsCount", (data) => {
      setUpdatedClientCount(data.count);
    });
  }, [updatedClientCount]);

  const handelSubmit = (e) => {
    if (e.keyCode === 13) {
      send();
    }
  };

  return (
    <div className="chatPage">
      <div className="sidepanel">
        <Sidebar clientCount={clientCount} />
      </div>
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
            onKeyDown={handelSubmit}
          />

          {message.length <= 0 ? (
            <button disabled className="inputBoxButton" onClick={send}>
              <SendIcon fontSize="small" color="disabled" />
            </button>
          ) : (
            <button className="inputBoxButton" onClick={send}>
              <SendIcon fontSize="small" color="action" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;

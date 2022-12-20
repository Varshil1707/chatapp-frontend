import socketIO from 'socket.io-client'
import { Route, Routes } from "react-router-dom";
import Join from './component/Join';
import Chat from './component/Chat';
// const ENDPOINT = "http://localhost:4500/"
// const socket = socketIO(ENDPOINT,{transports : ['websocket']})

function App() {
    // socket.on("connection",()=>{
    //   console.log("Connected")
    // })

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Join/>} exact />
          <Route path="/chat" element={<Chat/>} />
        </Routes>
    </div>
  );
}

export default App;

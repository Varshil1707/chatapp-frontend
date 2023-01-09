import socketIO from "socket.io-client";
import { Route, Routes } from "react-router-dom";
import Join from "./component/Join";
import Chat from "./component/Chat";
import Signup from "./component/Signup";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/chat" element={<Chat />} exact />
        <Route path="/" element={<Join />} exact />
      </Routes>
      {/* <Signup/> */}
    </div>
  );
}

export default App;

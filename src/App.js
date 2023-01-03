import socketIO from 'socket.io-client'
import { Route, Routes } from "react-router-dom";
import Join from './component/Join';
import Chat from './component/Chat';


function App() {


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

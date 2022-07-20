import logo from "./logo.svg";
import "./App.css";
import Registeruser from "./Components/registeruser";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./Components/Privateroute";
import PrivateScreen from "./Components/Privatescreen";
import P from "./Components/P.js";
import Loginuser2 from "./Components/Loginuser2";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<P />} />
          <Route path="/mainpage" element={<ProtectedRoute />}>
            <Route path="/mainpage" element={<PrivateScreen />} />
          </Route>
          <Route path="/" element={<Registeruser />} />
          <Route path="/login" element={<Loginuser2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
function App(){
  return(
    <Router>

      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </Router>
  )
}

export default App;
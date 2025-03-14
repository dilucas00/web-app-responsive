import "./App.css"
import React from 'react';
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'antd/dist/reset.css'; 


const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/"></Link>
        <Link to="/register"></Link>
        <Link to="/login" ></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
};

export default App;

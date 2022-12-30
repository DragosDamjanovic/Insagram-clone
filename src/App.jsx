import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Explore from "./screens/Explore";
import Home from "./screens/Home";
import Inbox from "./screens/Inbox";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Register from "./screens/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/inbox/:id" element={<Inbox />} />
      </Routes>
    </Router>
  );
};

export default App;

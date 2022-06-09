import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/index";
import Transfer from "./components/pages/Dashboard/Transfer/index";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Transfer />} />
      </Routes>
    </>
  );
}

export default App;

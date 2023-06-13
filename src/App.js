import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing";
import { Flags } from "./pages/flags";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/flags" element={<Flags />} />
      </Routes>
    </div>
  );
}

export default App;

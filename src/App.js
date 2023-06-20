import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing";
import { Flags } from "./pages/flags";
import { ScoreContext } from "./context/AppContext";
import { useEffect } from "react";

function App() {
  // search state 
  const [onSeacrh, setOnsearch]= useState(false)
  const [teamData, setTeamData] = useState(null);
  console.log(teamData);
  const getData = () => {
    fetch("football.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setTeamData(data);
        return data;
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <ScoreContext.Provider value={{ teamData, onSeacrh, setOnsearch }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/flags" element={<Flags />} />
        </Routes>
      </ScoreContext.Provider>
    </div>
  );
}

export default App;

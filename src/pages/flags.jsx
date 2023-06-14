/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import { ScoreContext } from "../context/AppContext";

export const Flags = () => {
  const { teamData } = useContext(ScoreContext);
  const [clubs, setClubs] = useState([]);
  const [countries, setCountries] = useState([]);

  console.log("cluds", { teamData });

  useEffect(() => {
    setClubs(teamData?.clubs);
    setCountries(teamData?.countries);
  }, [teamData]);

  // handle team selection

  const handleSelection = ()=>{
    // alert(key)
  }

  return (
    <div>
      <h2 className="text-center">Choose Terms</h2>
      <div className="teamFlags">
        <input
          className="seacrtBar bg-red-900"
          type="text"
          placeholder="search team"
        />
        <div className="htext">
          <h3>Countries</h3>
          <h3>Clubs</h3>
        </div>
        <div className="Cf">
          <div className="teams">
            <div className="countrySection">
              {countries?.map((team, i) => {
                return (
                  <div key={team.country + i} onClick={handleSelection} className="teamSection">
                    <img className="teamFlags" src={team.flag} alt="flag" />
                    <p>{team.country}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="teams">
            <div className="clubsSection">
              {clubs?.map((club, i) => {
                return (
                  <div key={club.name + i} onClick={handleSelection} className="teamSection">
                    <img className="teamFlags" src={club.url} alt="flag" />
                    <p>{club.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

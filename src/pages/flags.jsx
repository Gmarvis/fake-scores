/* eslint-disable */
import { SearchBar } from "../components/search";
import React, { useContext, useEffect, useState } from "react";
import { ScoreContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export const Flags = () => {
  const { teamData } = useContext(ScoreContext);
  const {onSeacrh, setOnsearch} = useContext(ScoreContext)
  const [clubs, setClubs] = useState([]);
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();
  
console.log("onSeacrh =",onSeacrh)
  // console.log("these are cluds", { teamData });

  useEffect(() => {
    setClubs(teamData?.clubs);
    setCountries(teamData?.countries);
  }, [teamData]);

  // handle team selection
  const handleSelect = (team) => {
    const select = JSON.parse(sessionStorage.getItem("select"));

    if (select.choice === "home") {
      select.teams.home = team;
      sessionStorage.setItem("select", JSON.stringify(select));
    }

    if (select.choice === "away") {
      select.teams.away = team;
      sessionStorage.setItem("select", JSON.stringify(select));
    }

    navigate("/");
  };

  return (
    <div>
      <div className="teamFlags">
        <h2 className="text-center">Choose Terms</h2>

        {/* <div className="setStoresSection">
          <form action="">
            <input type="search" placeholder="search"/>
            <button>
              <GoSearch />
            </button>
          </form>
        </div> */}

        <SearchBar />

        <div className="htext">
          <h3>Countries</h3>
          <h3>Clubs</h3>
        </div>
        <div className="Cf">
          <div className="teams">
            <div className="countrySection">
              {countries?.map((team, i) => {
                return (
                  <div
                    key={team.country + i}
                    className="teamSection"
                    onClick={() => handleSelect(team)}
                  >
                    <img className="teamFlags" src={team.flag} alt="flag" />
                    <p>{team.country}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <li className="teams">
            <div className="clubsSection">
              {clubs?.map((club, i) => {
                return (
                  <div
                    key={club.name + i}
                    className="teamSection"
                    onClick={() => handleSelect(club)}
                  >
                    <img className="teamFlags" src={club.url} alt="flag" />
                    <p>{club.name}</p>
                  </div>
                );
              })}
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

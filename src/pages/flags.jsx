/* eslint-disable */
import React, { useEffect, useState } from "react";

export const Flags = () => {
  const [clubs, setClubs] = useState([]);
  const [countries, setCountries] = useState([]);

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
        setClubs(data.clubs);
        setCountries(data.countries);
        // console.log("team =", data);
        return data;
      });
  };
  console.clear;
  console.log("clubs", clubs);
  console.log("countries, ", countries);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2 className="text-center">Choose Terms</h2>
      <div className="teamFlags">
        <input
          className="seacrtBar bg-red-900"
          type="text"
          placeholder="search team"
        />
        <div className="Cf">
          <div className="teams">
            <h3>Clountries</h3>
            <div className="countries">
              {countries?.map((team) => {
                return (
                  <div key={team.country} className="teamSection">
                    <img className="teamFlags" src={team.flag} alt="flag" />
                    <p>{team.country}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="teams">
            <h3>Clubs</h3>
            <div className="countries">
              {clubs?.map((club) => {
                return (
                  <div key={club.name} className="teamSection">
                    <img className="teamFlags" src={club.url} alt="flag" />
                    <p>{club.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

/* eslint-disable */
import React, { useEffect, useState } from "react";
// import { json } from "react-router-dom";
// import Data from "../../public/data/football.json";
// import { useEffect } from "react";
// import { json } from "react-router-dom";

export const Flags = () => {
  // const [flagData, setFlagData] = useState();

  // const getData = (url) => fetch(url);

  // const getData = () => {
  //   fetch(football.json, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })

  //   .then(function(response){
  //     return response.json();
  //   })
  //   .then(function(data){
  //     console.log(data)
  //   })

  const getData = () => {
    fetch('football.json', {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log('my teams',myJson);
      });
  };
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
          <div>
            <h3>Clountries</h3>
          </div>

          <div>
            <h3>Clubs</h3>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

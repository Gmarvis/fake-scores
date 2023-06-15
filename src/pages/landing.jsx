import React, { useContext, useEffect, useState, createRef } from "react";
import { ScoreContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { ScreenShot } from "../components/screenshot";

export const Landing = () => {
  const ref = createRef(null)

  const { teamData } = useContext(ScoreContext);
  const [choice, setChoice] = useState({});
  const navigate = useNavigate();

  console.log(teamData);
  const selectHome = () => {
    const prev = JSON.parse(sessionStorage.getItem("select"));

    let select = {
      choice: "home",
      teams: { away: {}, home: {} },
    };

    if (prev) {
      select = { ...prev, choice: "home" };
    }

    sessionStorage.setItem("select", JSON.stringify(select));
    navigate("/flags");
  };

  const selectAway = () => {
    const prev = JSON.parse(sessionStorage.getItem("select"));

    let select = {
      choice: "away",
      teams: { away: {}, home: {} },
    };

    if (prev) {
      select = { ...prev, choice: "away" };
    }

    sessionStorage.setItem("select", JSON.stringify(select));
    navigate("/flags");
  };

  useEffect(() => {
    const select = JSON.parse(sessionStorage.getItem("select"));
    setChoice(select);
  }, []);

  return (
    <div>
      <div className=" thead" ref={ref}>
        <div className="top-container">
          <br />
          <br />
          <br />
          <br />
          <div className="subContainer">
            <div className="display">
              <div onClick={selectHome} className="select">
                <img
                  src={choice?.teams?.home?.url || choice?.teams?.home?.flag}
                  className="displayFlag"
                  alt={
                    choice?.teams?.home?.name || choice?.teams?.home?.country
                  }
                />
                <p>
                  {choice?.teams?.home?.name || choice?.teams?.home?.country}
                </p>
                <h2>Home</h2>
              </div>
              <div className="scores">
                <p>4 : 2</p>
              </div>
              <div onClick={selectAway} className="select">
                <img
                  src={choice?.teams?.away?.url || choice?.teams?.away?.flag}
                  className="displayFlag"
                  alt={
                    choice?.teams?.home?.name || choice?.teams?.home?.country
                  }
                />
                <p className="text-center">
                  {choice?.teams?.away?.name || choice?.teams?.away?.country}
                </p>

                <h2>Away</h2>
              </div>
            </div>
            <div className="captureBtn mt-20 text-white">
              <ScreenShot />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

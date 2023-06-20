import React, { useContext, useEffect, useState } from "react";
import { createRef } from "react";
import { ScoreContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { EditScores } from "../components/editScores";

export const Landing = () => {
  /*implement sreenShot */
  const ref = createRef(null);

  const [image, takeScreenshot] = useScreenshot({
    type: "image/png",
    quality: 5.1,
  });

  const download = (
    image,
    { name = "screen capture", extension = "jpg" } = {}
  ) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => {
    takeScreenshot(ref.current).then(download);
  };

  // const ref = createRef(null);
  // const [image, takeScreenshot] = useScreenshot({
  //   type: "image/jpeg",
  //   quality: 1.0,
  // });
  // const getImage = () => takeScreenshot(ref.current);
  /*implement sreenShot end*/

  /* new fubtion for enable content edit*/


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
    <div >
      <div className=" thead">
        <div className="top-container">
          <br />
          <br />
          <br />
          <br />
          <div className="subContainer" ref={ref}>
            <div className="display" ref={ref}>
              <div onClick={selectHome} className="select" ref={ref}>
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
                {/* <p>4 : 2</p> */}
                <EditScores />
              </div>
              <div onClick={selectAway} className="select">
                <img
                  src={choice?.teams?.away?.url || choice?.teams?.away?.flag}
                  className="displayFlag"
                  alt={
                    choice?.teams?.home?.name || choice?.teams?.home?.country
                  }
                />
                <p className="clubNames text-center">
                  {choice?.teams?.away?.name || choice?.teams?.away?.country}
                </p>
                <h2>Away</h2>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="captureBtn mt-20 text-white">
              <button onClick={downloadScreenshot}>Capture</button>
            </div>
    </div>
  );
};

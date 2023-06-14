import React, { useContext } from "react";
import { ScoreContext } from "../context/AppContext";

export const Landing = () => {
  const { teamData } = useContext(ScoreContext);
  console.log(teamData);

  return (
    <div>
    <div className=" thead">
      <div className="top-container">
        <br />
        <br />
        <br />
        <br />
        <div className="subContainer">
          <div className="display">
            <div>
              <div>
                {/* <img src="https://i.pinimg.com/564x/44/17/7a/44177a0cb8f73f4781a08bd7b400ca74.jpg" alt="" /> */}
              </div>
              <h2>Home</h2>
            </div>
            <div className="scores">
              <p>4 : 2</p>
            </div>
            <div>
              <h2>Away</h2>
            </div>
          </div>
          <div className="captureBtn mt-20 text-white">
        <button>Capture</button>
      </div>
        </div>
      </div>

 
    </div>

   </div>
  );
};

import React from "react";
import "../Teamsection/Teamsection.css";

function Teamsection(params) {
  return (
    <div className="section secTS">
      <div className="container conTS">
        <h1 className="title">Who we are</h1>
        <div className="team">
          <div className="row rowTS">
            <div className="col-md-4">
              <div className="team-player"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Teamsection;

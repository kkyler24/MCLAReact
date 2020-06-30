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
              <div className="team-player">
              <img alt="..." class="rounded-circle img-fluid img-raised" src="/now-ui-kit-react/static/media/avatar.7257a1a9.jpg">
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Teamsection;

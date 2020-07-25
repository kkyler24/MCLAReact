import React from "react";
import "./Jumbotron.css";
import gameJumb from "../../pictures/gamepagepics/blackboard.png";

const jumbStyle = {
  backgroundImage: `url(${gameJumb})`,
  backgroundSize: "1440px",
};

function Jumbotron(props) {
  return (
    <div className="page-header page-header-small">
      <div
        className="page-header-image backgroundImage"
        style={jumbStyle}
      ></div>
      <div className="content-centerAU">
        {props.children}
        <div className="text-centerAU"></div>
      </div>
    </div>
  );
}

export default Jumbotron;

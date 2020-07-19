import React from "react";
import "./Jumbotron.css";
import gameJumb from "../../pictures/controller.jpg";

function Jumbotron(props) {

  return (
      <div className="page-header page-header-small">
        <div
          className="page-header-image backgroundImage" style={{backgroundImage: `url(${gameJumb})`}}
        ></div>
        <div className="content-centerAU">
              {props.children}
            <div className="text-centerAU"></div>
        </div>
      </div>
  );
}

export default Jumbotron;

import React from "react";
import "./gamesC.css";
import { Card, CardBody } from "reactstrap";
import GameCards from "../GameCards/GameCards";
import Jumbo from "../Jumbotron/Jumbogamepage.js";
import SocialFooter from "../SocialFooter/SocialFooter.js";

function GamesContainer() {
  return (
    <>
      <Jumbo />
      <div id="gamePageBackground">
        <CardBody id="GCard">
          <div className="text">
            <h2 className="GamesTitleC "></h2>
            <GameCards />
          </div>
        </CardBody>
        <SocialFooter color="transparent" />
      </div>
    </>
  );
}

export default GamesContainer;

// import React, { Component } from "react";

// const BorderStyle = {
//   border: "transparent",

// export default IndexContainer;

import React from "react";
import "./gamesC.css";
import { Card, CardBody } from "reactstrap";
import GameCards from "../GameCards/GameCards";
import Jumbo from "../Jumbotron/Jumbogamepage.js";

// const Indistyle = {
//   width: "550px  ",
//   display: "block  ",
// };

function GamesContainer() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 1000) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <Jumbo />
      <CardBody id="GCard">
        <div className="text">
          <h2 className="GamesTitleC "></h2>
          <GameCards />
        </div>
      </CardBody>
    </>
  );
}

export default GamesContainer;

// import React, { Component } from "react";

// const BorderStyle = {
//   border: "transparent",

// export default IndexContainer;

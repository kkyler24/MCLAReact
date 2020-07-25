import React from "react";
import "./gamesC.css";
import { Card, CardBody } from "reactstrap";
import "../indexcontainer/indexC.css";
import GameCards from "../GameCards/GameCards";
import Jumbo from "../Jumbotron/Jumbotron.js";

const Indistyle = {
  width: "550px  ",
  display: "block  ",
};

function GamesContainer() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
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
      <Card>
        <CardBody id="GCard">
          <div class="text">
            <GameCards />
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default GamesContainer;

// import React, { Component } from "react";

// const BorderStyle = {
//   border: "transparent",

// export default IndexContainer;

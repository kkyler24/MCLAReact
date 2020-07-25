import React from "react";
import "./gamesC.css";
import { Card, CardBody } from "reactstrap";
import "../indexcontainer/indexC.css";
import GameCards from "../GameCards/GameCards";

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
      <Card id="gameContainer">
        <h1>Learning games</h1>
        <CardBody>
          <div className="titleG">
            <p id="cardText" className="mx-auto" style={Indistyle}>
              Where unconventional learning is our specialty
            </p>
          </div>

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

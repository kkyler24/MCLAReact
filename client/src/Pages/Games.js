import React, { Component } from "react";
import SocialFooter from "../components/SocialFooter/SocialFooter";
import Jumbotron from "../components/Jumbotron/Jumbogamepage";
import GamesContainer from "../components/GamesContainer/gamescontain.js";
import "../components/GamesContainer/gamesC.css";

const bstyle = {
  height: "300px",
  backgroundSize: "cover",
  backgroundRepeat: "no repeat",
};

function Games() {
  return (
    <>
      <div id="gamePageBackground">
        {/* <h2>MorseCode Games</h2> */}

        <GamesContainer />

        <SocialFooter color="transparent" />
      </div>
    </>
  );
}
export default Games;

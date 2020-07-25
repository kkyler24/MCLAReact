import React, { Component } from "react";
import SocialFooter from "../components/SocialFooter/SocialFooter";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import GamesContainer from "../components/GamesContainer/gamescontain.js";

const bstyle = {
  height: "300px",
  backgroundSize: "cover",
  backgroundRepeat: "no repeat",
};

function Games() {
  return (
    <>
      {/* <h2>MorseCode Games</h2> */}

      <GamesContainer />

      <SocialFooter color="transparent" />
    </>
  );
}
export default Games;

import React, { Component } from "react";
import GameCards from "../components/GameCards/GameCards";
import SocialFooter from "../components/SocialFooter/SocialFooter";
// import Jumbotron from "../components/Jumbotron/Jumbotron";
import Background from "../components/Background/Background";
import backImg from "../pictures/mario.jpg"

function Games() {
  return (
    <>
      <Background backgroundColor="white"/>
        <GameCards/>
        <SocialFooter />
    </>
  );
}
export default Games;

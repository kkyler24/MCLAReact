import React, { Component } from "react";
import GameCards from "../components/GameCards/GameCards";
import SocialFooter from "../components/SocialFooter/SocialFooter";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Background from "../components/Background/Background";

function Games() {
  return (
    <>
      <Background backgroundColor="#FFFFFF"/>
        <Jumbotron>
        <h2>Learn With Games</h2>
        </Jumbotron>
        <GameCards/>
        <div id="googleButton"></div>
        <SocialFooter />
    </>
  );
}
export default Games;

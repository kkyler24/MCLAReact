import React, { Component } from "react";
import GameCards from "../components/GameCards/GameCards";
import Background from "../components/Background/Background";
import airBallon from "../pictures/darren-lee-0kEvX-9hJyQ-unsplash.jpg"
import SocialFooter from "../components/SocialFooter/SocialFooter";

function Games() {
  return (
    <>
  <Background backgroundImage={airBallon}>
  </Background>
  <GameCards>
  </GameCards>
  <SocialFooter></SocialFooter>
    </>
  );
}
export default Games;
import React, { Component } from "react";
import GameCards from "../components/GameCards/GameCards";
import SocialFooter from "../components/SocialFooter/SocialFooter";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Background from "../components/Background/Background";
<<<<<<< Updated upstream
import Footer from "../components/Footer/Footer.js";
=======
// import mario from "../pictures/mario.jpg" 
import CardBack from "../pictures/MathApics/geometrictechnology.jpg"
>>>>>>> Stashed changes

const bstyle = {
  height: "300px",
};

// const cardBackStyle = {
//   backgroundImage: `url(${CardBack})`,
  // backgroundSize: "1500px",
// };

function Games() {
  return (
    <>
      <Background backgroundImage={CardBack} backgroundSize="1500px" />
      <Jumbotron style={bstyle}>
        <h2>MorseCode Games</h2>
      </Jumbotron>
      <GameCards />
      <div id="googleButton"></div>
      <SocialFooter color="white"/>
    </>
  );
}
export default Games;

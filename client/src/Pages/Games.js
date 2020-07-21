import React, { Component } from "react";
import GameCards from "../components/GameCards/GameCards";
// import SocialFooter from "../components/SocialFooter/SocialFooter";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Background from "../components/Background/Background";
import Footer from "../components/Footer/Footer.js";

const bstyle = {
  height: "300px",
};

// const bstyle1 = {
//   backgroundImage: "backImg",
//   backgroundSize: "cover",
//   backgroundRepeat: "no repeat",
//   height: "700px",
// };
function Games() {
  return (
    <>
      <Background backgroundColor="#FFFFFF" />
      <Jumbotron style={bstyle}>
        <h2>MorseCode Games</h2>
      </Jumbotron>
      <GameCards />
      <div id="googleButton"></div>
      <Footer />
    </>
  );
}
export default Games;

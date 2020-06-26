import React, { Component } from "react";
import Textscrambler from "../Scramble/Scramble";

const phrases = ["MCLA"];

class IndexContainer extends Component {
  render() {
    return (
      <div className="indexContainer">
        <div id="scrabble" class="wordScramble">
          <div class="text"></div>
        </div>
      </div>
    );
  }
}

export default Navbar;

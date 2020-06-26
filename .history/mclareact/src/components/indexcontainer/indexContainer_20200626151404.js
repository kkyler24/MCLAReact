import React, { Component } from "react";
import TextScrambler from "../Scramble/Scramble";
import "../indexcontainer/indexC.css";

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

export default IndexContainer;

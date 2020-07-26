import React, { Component } from "react";
import TextScrambler from "../Scramble/Scramble.js";
import "../indexcontainer/indexC.css";
import { Card, CardBody } from "reactstrap";

const BorderStyle = {
  border: "transparent",
};
class IndexContainer extends Component {
  render() {
    return (
      <div id="morse-code">
        <div id="scrabble" class="text">
          <TextScrambler />
        </div>
        <p id="cardText" className="mx-auto">
          Where unconventional learning is our specialty
        </p>
      </div>
  );
  }
}

export default IndexContainer;

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
      <Card>
        <CardBody>
          <blockquote
            className="blockquote blockquote-primary mb-0 "
            style={BorderStyle}
          >
            <div id="scrabble" class="text">
              <TextScrambler />
            </div>
            <p id="cardText" className="mx-auto">
              Where unconventional learning is our specialty
            </p>
          </blockquote>
        </CardBody>
      </Card>
    );
  }
}

export default IndexContainer;

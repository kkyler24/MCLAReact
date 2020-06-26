import React, { Component } from "react";
import TextScrambler from "../Scramble/Scramble";
import "../indexcontainer/indexC.css";
import { Card, CardBody } from "reactstrap";

class IndexContainer extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <blockquote className="blockquote blockquote-primary mb-0">
            <div id="scrabble" class="text">
              <TextScrambler />
            </div>
            <p id="cardText">Where unconventional learning is our specialty</p>
          </blockquote>
        </CardBody>
      </Card>
    );
  }
}

export default IndexContainer;

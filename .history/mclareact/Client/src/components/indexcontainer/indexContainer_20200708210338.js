import React, { Component } from "react";
import TextScrambler from "../Scramble/Scramble.js";
import "../indexcontainer/indexC.css";
import { Card, CardBody } from "reactstrap";

const Indistyle = {
  width: "550px  ",
  display: "block  ",
};
class IndexContainer extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <blockquote className="blockquote blockquote-primary mb-0 transparent">
            <div id="scrabble" class="text">
              <TextScrambler />
            </div>
            <p id="cardText" className="mx-auto" style={Indistyle}>
              Where unconventional learning is our specialty
            </p>
          </blockquote>
        </CardBody>
      </Card>
    );
  }
}

export default IndexContainer;

import React, { Component } from "react";
import TextScrambler from "../Scramble/Scramble";
import "../indexcontainer/indexC.css";

class IndexContainer extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <blockquote className="blockquote blockquote-primary mb-0">
            <div id="scrabble" class="text">
              <TextScrambler />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CardBody>
      </Card>
    );
  }
}

export default IndexContainer;

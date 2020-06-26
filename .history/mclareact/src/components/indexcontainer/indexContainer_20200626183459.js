import React, { Component } from "react";
import TextScrambler from "../Scramble/Scramble";
import "../indexcontainer/indexC.css";
import { Card, CardBody } from "reactstrap";

const Indistyle={width:   '200px  ',
 display: 'block  ';}
class IndexContainer extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <blockquote className="blockquote blockquote-primary mb-0">
            <div id="scrabble" class="text">
              <TextScrambler />
            </div>
            <p
              id="cardText"
              className="mx-auto"
              
            >
              Where unconventional learning is our specialty
            </p>
          </blockquote>
        </CardBody>
      </Card>
    );
  }
}

export default IndexContainer;

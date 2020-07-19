import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import TicTacToe from "../../pictures/tictactoe2.png";
import "./GameCards.css";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button,
} from "reactstrap";
// core components

function GameCards() {
  return (
    <>
      <div className="game-div">
        <Row>
          <Col size="md-4">
            <div className="text-center game-card" style={{backgroundImage: `url(${TicTacToe})`}}>
              <CardHeader className="mt-2">Featured</CardHeader>
              <CardBody>
                <CardTitle tag="h4">Special title treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  >
                  Go somewhere
                </Button>
              </CardBody>
              <CardFooter className="text-muted mb-2">2 days ago</CardFooter>
            </div>
          </Col>
          <Col size="md-4">
            <div className="text-center game-card">
              <CardHeader className="mt-2">Featured</CardHeader>
              <CardBody>
                <CardTitle tag="h4">Special title treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  >
                  Go somewhere
                </Button>
              </CardBody>
              <CardFooter className="text-muted mb-2">2 days ago</CardFooter>
            </div>
          </Col>
          <Col size="md-4">
            <div className="text-center game-card">
              <CardHeader className="mt-2">Featured</CardHeader>
              <CardBody>
                <CardTitle tag="h4">Special title treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  >
                  Go somewhere
                </Button>
              </CardBody>
              <CardFooter className="text-muted mb-2">2 days ago</CardFooter>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default GameCards;

// style={{
//   boxShadow: "0 5px 25px 0 rgba(0,0,0,.2)",
//   width: "90%",
//   marginLeft: "20px",
//   marginRight: "0",
//   borderRadius: "12px",
//   backgroundImage: `url(${TicTacToe})`,
// }}
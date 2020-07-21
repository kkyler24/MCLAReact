import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import TicTacToe from "../../pictures/tictactoe2.png";
import CodeCollector from "../../pictures/code_collector2.JPG";
import Annihilator from "../../pictures/Math_Poster2.jpg";
import CardBack from "../../pictures/MathApics/geometrictechnology.jpg";
import "./GameCards.css";

// reactstrap components
import { CardBody, Button } from "reactstrap";
// core components

const cardBackStyle = {
  backgroundImage: `url(${CardBack})`,
  backgroundSize: "1500px",
};

const collectorImg = {
  backgroundImage: `url(${CodeCollector})`,
  backgroundSize: "550px",
};

const ticImg = {
  backgroundImage: `url(${TicTacToe})`,
  backgroundSize: "-10px",
};

const spaceImg = {
  backgroundImage: `url(${Annihilator})`,
  backgroundSize: "500px",
};

let url = "https://www.wwe.com/";

function GameCards() {
  return (
    <>
      <div className="game-div" style={cardBackStyle}>
        <Row>
          <Col size="md-4">
            <div className="text-center game-card" style={ticImg}>
              <CardBody>
                <h4 className="game-description">Tic Tac Toe</h4>
                <CardText>
                  <p className="game-description">
                    Morse Code Alphabet learning
                  </p>
                </CardText>
                <a
                  href="https://mcla1.herokuapp.com/ttt.html"
                  className="btn btn-secondary play-button"
                >
                  PLAY
                </a>
              </CardBody>
            </div>
          </Col>
          <Col size="md-4">
            <div className="text-center game-card" style={collectorImg}>
              <CardBody>
                <h4 className="game-description">Code Collector</h4>
                <p className="game-description">
                  Collect the morse code bits and race to the finish!
                </p>
                <a
                  href="https://mcla1.herokuapp.com/race.html"
                  className="btn btn-secondary play-button"
                >
                  PLAY
                </a>
              </CardBody>
            </div>
          </Col>
          <Col size="md-4">
            <div className="text-center game-card" style={spaceImg}>
              <CardBody>
                <p className="game-description">Addition Space Shooter</p>
                <h4 className="game-description">Math Invaders</h4>
                <a
                  href="https://kkyler24.github.io/MathInvader/"
                  className="btn btn-secondary play-button"
                >
                  PLAY
                </a>
              </CardBody>
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

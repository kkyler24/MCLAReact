import React, { Component } from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
// import CardBody from "../CardBody/CardBody";
import Images from "../Images/Images";
import crdImg from "../../pictures/boyReading.jpg";
import Scrabble from "../../pictures/scrabbleLetters.jpg";
import TicTacToe from "../../pictures/tictactoe.jpeg";
import "./GameCards.css";

function GameCards(props) {
  return (
    <Row>
      <Col size="sm-4">
  <div class="card" style={{ width: "18rem", border: "black 2px solid" }}>
  <Images src={Scrabble} className="card-img-top" alt="image"></Images>
  <div class="card-body game-card-body">
    <h5 class="card-title">Code Collector</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">PLAY</a>
    </div>
  </div>
      </Col>
      <Col size="sm-4">
  <div class="card" style={{ width: "18rem", border: "black 2px solid" }}>
  <Images src={TicTacToe} className="card-img-top" alt="image"></Images>
  <div class="card-body game-card-body">
    <h5 class="card-title">Tic Tac Toe</h5>
    <p class="card-text">description</p>
    <a href="#" class="btn btn-primary">PLAY</a>
    </div>
  </div>
      </Col>
      <Col size="sm-4">
  <div class="card" style={{ width: "18rem", border: "black 2px solid" }}>
  <Images src={crdImg} className="card-img-top" alt="image"></Images>
  <div class="card-body game-card-body">
    <h5 class="card-title">Math Annihilator</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">PLAY</a>
    </div>
  </div>
      </Col>
    </Row>
  );
}

export default GameCards;

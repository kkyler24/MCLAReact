import React, { Component } from "react";
import GamesCard from "../components/GamesCard/GamesCard";
import Col from "../components/Col/Col";
import Row from "../components/Row/Row";

function Games() {
  return (
    <>
    <Row>
    <Col size="sm-4">
    <GamesCard></GamesCard>
    </Col>
    <Col size="sm-4">
    <GamesCard></GamesCard>
    </Col>
    <Col size="sm-4">
    <GamesCard></GamesCard>
    </Col>
    </Row>
    </>
  )
}
export default Games;

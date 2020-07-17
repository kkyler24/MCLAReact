import React, { Component } from "react";
import GamesCard from "../components/GamesCard/GamesCard";
import Col from "../components/Col/Col";

function Games() {
  return (
    <>
    <Col size="sm-4">
    <GamesCard></GamesCard>
    </Col>
    <Col size="sm-4">
    <GamesCard></GamesCard>
    </Col>
    <Col size="sm-4">
    <GamesCard></GamesCard>
    </Col>
    </>
  )
}
export default Games;

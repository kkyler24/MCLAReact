import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import "./socialMediaB.css";

function Buttons() {
  return (
    <div>
      <Container>
        <Button
          className="btn-icon btn-round"
          color="info"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <i className="fab fa-facebook-square"></i>
        </Button>
        <Button
          className="btn-icon btn-round "
          color="info"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <i className="fab fa-github"></i>
        </Button>
        <Button
          className="btn-icon btn-round"
          color="info"
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <i className="fab fa-linkedin"></i>
        </Button>
      </Container>
    </div>
  );
}
export default Buttons;

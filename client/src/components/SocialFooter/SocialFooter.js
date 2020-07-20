import React from "react";
import Buttons from "../SocialMediaButtons/socialButtons";
import Row from "../Row/Row";
import Col from "../Col/Col";
import "./SocialFooter.css";

function SocialFooter() {
  return (
    <Row id="rowfooter">
      <Col size="sm-12">
        <h5>Contact Us</h5>
        <div className="card social-footer">
          <div className="card-body">
            <Buttons></Buttons>
          </div>
          <div className="card-header">© Copyright 2020</div>
        </div>
      </Col>
    </Row>
  );
}

export default SocialFooter;

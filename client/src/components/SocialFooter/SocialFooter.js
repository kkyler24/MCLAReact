import React from "react";
import Buttons from "../SocialMediaButtons/socialButtons";
import Row from "../Row/Row";
import Col from "../Col/Col";
import "./SocialFooter.css";

function SocialFooter(props) {
  return (
    <Row id="rowfooter">
      <Col id="sm-12SocialFooter" size="sm-12">
        <div className="card social-footer">
          <h5 id="H5text">Contact Us</h5>
          <div className="card-body">
            <Buttons></Buttons>
            <p> © Copyright 2020</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default SocialFooter;

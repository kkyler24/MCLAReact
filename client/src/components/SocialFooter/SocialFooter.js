import React from "react";
import Buttons from "../SocialMediaButtons/socialButtons";
import Row from "../Row/Row";
import Col from "../Col/Col";
import "./SocialFooter.css";

function SocialFooter(props) {
  return (
    <Row id="rowfooter">
      <div id="Spacer"></div>
      <div id="sm-12SocialFooter">
        <div className="card social-footer">
          <h5 id="H5text">Contact Us</h5>
          <div className="cardBody">
            <Buttons></Buttons>© Copyright 2020
          </div>
        </div>
      </div>
    </Row>
  );
}

export default SocialFooter;

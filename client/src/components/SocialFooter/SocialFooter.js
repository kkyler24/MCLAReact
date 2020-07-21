import React from "react";
import Buttons from "../SocialMediaButtons/socialButtons";
import Row from "../Row/Row";
import Col from "../Col/Col";
import "./SocialFooter.css";

function SocialFooter(props) {
  return (
    <Row id="rowfooter">
      <Col size="sm-12">
        <div className="card social-footer">
        <h5 style={{color: props.color, textAlign:"center"}}>Contact Us</h5>
          <div className="card-body">
            <Buttons></Buttons>
          </div>
          <div className="card-header" style={{color: props.color}}>© Copyright 2020</div>
        </div>
      </Col>
    </Row>
  );
}

export default SocialFooter;

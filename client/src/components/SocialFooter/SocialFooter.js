import React from "react";
import Buttons from "../SocialMediaButtons/socialButtons";
import Row from "../Row/Row";
import Col from "../Col/Col";
import "./SocialFooter.css";

function SocialFooter() {
  return (
    <div className="card social-footer">
      <div className="card-body">
        <h5>Contact Us</h5>
        <Buttons></Buttons>
      </div>
      <div className="card-header">© Copyright 2020</div>
    </div>
  );
}

export default SocialFooter;

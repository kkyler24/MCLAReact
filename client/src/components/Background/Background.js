import React from "react";
import "./Background.css";

function Background(props) {
  return (
    <div
      className="container-fluid background-img"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundColor: props.backgroundColor
      }}
    ></div>
  );
}

export default Background;

// height: props.height,
// width: props.width,

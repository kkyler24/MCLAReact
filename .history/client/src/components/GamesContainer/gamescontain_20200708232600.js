import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import "./gamesC.css";

function GamesContainer() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image GbackgroundImage"
          ref={pageHeader}
        ></div>
        <div className="content-centerAU">
          <Container>
            <h1 className="GamesTitle" style={styleFont}>
              What makes us unique
            </h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default GamesContainer;

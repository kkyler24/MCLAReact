import React from "react";
import { Button, Container } from "reactstrap";
import "./AboutJumbo.css";
import greenBalloon from "../../pictures/hothairballoongreen.jpg";

const styleFont = {
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "300px",
};
// core components

function AboutJumbo() {
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
        <div id="backgroundImage" className="page-header-image "></div>
        <div className="content-centerAU">
          <div className="containerJumbo">
            <h1 className="titleJB" style={styleFont}>
              What makes us unique
            </h1>
            <div className="text-centerAU">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutJumbo;

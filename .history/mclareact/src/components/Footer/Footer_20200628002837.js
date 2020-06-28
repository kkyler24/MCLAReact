import React, { Component } from "react";
import "./Footer.css";
import { Container } from "reactstrap";

function Footer() {
  return (
    <div id="footer">
      <header id="footerHeader" class=" mdl-layout__header--transparent">
        <div id="footerHeader-row">
          {/* <a class="navbar-brand">
                <img src="assets/pictures/LogoText.png" alt="MCLA LOGO"   height="63.99" width="166.09">
              </a> */}

          {/* <!-- Add spacer, to align navigation to the right --> */}
          <div id="spacerFooter" class="mdl-layout-spacer"></div>
          <nav id="navigation">
            <a class=" footerClass" href="">
              Home
            </a>
            {/* <button className="btn-linkedin btn-linkedinfocus"> </button> */}
            <a class=" footerClass" href="">
              Games
            </a>
            <a class=" footerClass" href="">
              About Us
            </a>
            <a class=" footerClass" href="">
              Log-in
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Footer;

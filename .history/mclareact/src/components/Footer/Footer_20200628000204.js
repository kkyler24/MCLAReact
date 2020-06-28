import React, { Component } from "react";
import "./Footer.css";
import { Container } from "reactstrap";

function Footer() {
  return (
    <div id="footer" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header
        id="footerHeader"
        class="mdl-layout__header mdl-layout__header--transparent"
      >
        <div id="footerHeader-row" class="mdl-layout__header-row">
          {/* <a class="navbar-brand">
                <img src="assets/pictures/LogoText.png" alt="MCLA LOGO"   height="63.99" width="166.09">
              </a> */}

          {/* <!-- Add spacer, to align navigation to the right --> */}
          <div id="spacerFooter" class="mdl-layout-spacer"></div>
          <nav id="navigation" class="mdl-navigation ">
            <a class="mdl-navigation__link footerClass" href="">
              Home
            </a>
            {/* <button className="btn-linkedin btn-linkedinfocus"> </button> */}
            <a class="mdl-navigation__link footerClass" href="">
              Games
            </a>
            <a class="mdl-navigation__link footerClass" href="">
              About Us
            </a>
            <a class="mdl-navigation__link footerClass" href="">
              Log-in
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Footer;

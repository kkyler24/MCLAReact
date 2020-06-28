import React, { Component } from "react";
import "./Footer.css";
import { Container } from "reactstrap";

function Footer() {
  return (
    <div id="footer" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">
          {/* <a class="navbar-brand">
                <img src="assets/pictures/LogoText.png" alt="MCLA LOGO"   height="63.99" width="166.09">
              </a> */}

          {/* <!-- Add spacer, to align navigation to the right --> */}
          <div class="mdl-layout-spacer"></div>
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <a class="mdl-navigation__link" href="">
              Home
            </a>
            {/* <button className="btn-linkedin btn-linkedinfocus"> </button> */}
            <a class="mdl-navigation__link" href="">
              Games
            </a>
            <a class="mdl-navigation__link" href="">
              About Us
            </a>
            <a class="mdl-navigation__link" href="">
              Log-in
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Footer;

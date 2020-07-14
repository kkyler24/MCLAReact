import React, { Component } from "react";
import "./Nav.css";

class Navbar extends Component {
  render() {
    return (
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header mdl-layout__header--transparent">
          <div class="mdl-layout__header-row">
            {/* <a class="navbar-brand">
                    <img src="assets/pictures/LogoText.png" alt="MCLA LOGO"   height="63.99" width="166.09">
                  </a> */}
            <span class="mdl-layout-title">MCLALOGO</span>
            {/* <!-- Add spacer, to align navigation to the right --> */}
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation mdl-layout--large-screen-only">
              <a class="mdl-navigation__link" href=" ">
                Home
              </a>
              {/* <button className="btn-linkedin btn-linkedinfocus"> </button> */}
              <a class="mdl-navigation__link" href="https://mclareact.herokuapp.com/about">
                About Us
              </a>
              <a class="mdl-navigation__link" href="https://mclareact.herokuapp.com/games">
                Games
              </a>
              <a class="mdl-navigation__link" href="https://mclareact.herokuapp.com/signup">
                Log-in
              </a>
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer mdl-layout--small-screen-only">
          <span class="mdl-layout-title">Menu</span>
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" link to = "/client/src/Pages/Home.js"> 
              Home
            </a>
            <a class="mdl-navigation__link" link to = "/client/src/Pages/About.js">
              About Us
            </a>
            <a class="mdl-navigation__link" href="">
              Games
            </a>
            <a class="mdl-navigation__link " href="">
              Log in
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;

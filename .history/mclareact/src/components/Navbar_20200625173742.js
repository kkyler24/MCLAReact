import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
        <div class="mdl-layout__drawer">
          <span class="mdl-layout-title">Title</span>
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="">
              Home
            </a>
            <a class="mdl-navigation__link" href="">
              About Us
            </a>
            <a class="mdl-navigation__link" href="">
              Games
            </a>
            <a class="mdl-navigation__link" href="">
              Contact Us
            </a>
            <a class="mdl-navigation__link" href="">
              Log-in
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;

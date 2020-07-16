import React, { Component } from "react";

import ship from "../../pictures/MathApics/spaceship/spaceship.png";

class Ship {
  ship() {
    // centering ship in the middle for start position
    this.x = width / 2;

    this.show = ship(this.x, height - 20, 30, 30);
  }
}

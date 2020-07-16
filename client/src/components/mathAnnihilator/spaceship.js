import React, { Component } from "react";
import styles from "./mathAn.module.css";
import Shipspacepic from "../../pictures/MathApics/spaceship/spaceship.png";

export default class SpaceShip extends Component {
  constructor(el, props) {
    super(props);
    this.x = 840 / 2;
    this.y = -350;
    this.move = function (dir) {
      this.x += dir;
      this.show = function () {
        Shipspacepic(this.x, 20, 20);
      };
    };

    // input.addEventListner("keypressed", (event) => {
    //   if (event.keyCode === Arrow_right) {
    //     return;
    //   }
    //   SpaceShip.move();
    // });
    // this.ship = () => {
    //   return function keyPressed() {
    //     if (keyCode === ArrowRight) {
    //       ship.move(1);
    //     } else if (keyCode === LeftArrow) {
    //       ship.move(-1);
    //     }
    //   };
    // };
  }
  render() {
    return (
      <div>
        <img src={Shipspacepic} className={styles.shippic} />
      </div>
    );
  }
}

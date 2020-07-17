import React, { Component } from "react";
import style from "../../components/mathAnnihilator/mathAn.module.css";
import Ship from "./spaceship";
import Shipspacepic from "../../pictures/MathApics/spaceship/spaceship.png";

// three arrays in state

export default class MathInvaders extends Component {
  render() {
    return (
      <div id="MIBG">
        <div id="Canvas" className={style.containerFluid}>
          <div className={StyleSheet.shipContainer}>
            <Ship />
          </div>
        </div>
        <div className={style.description}></div>
      </div>
    );
  }
}

import React, { Component } from "react";
import style from "../../components/mathAnnihilator/mathA.module.css";

// three arrays in state
export default class MathInvaders extends Component {
  render() {
    return (
      <div id="MIBG">
        <div id="Canvas" className={style.containerFluid}></div>
      </div>
    );
  }
}

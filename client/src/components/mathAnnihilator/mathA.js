import React, { Component } from "react";
import style from "./mathA.module.css";
import Spacebackground from "../../pictures/MathApics/spaceship/background3591568.png";
import MathInvaders from "../mathAnnihilator/mathAN.js";

const spaceGameIndex = {
  backgroundImage: `url(${Spacebackground})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  // height: "800px",
};

function mathA() {
  return (
    <div
      className={`${style.section} ${style.textCenter} ${style.background} ${style.containerFluid}`}
      style={spaceGameIndex}
    >
      <div className={style.Container}>
        <h2 className={style.title}>Math Annihilator</h2>
        <p className={style.description}></p>

        <div className={style.row}>
          <div id="canvas" className={`${style.textCenter} ${style.btnroundC}`}>
            <div className={`${style.containerFluid} ${style.btnround}`}>
              <MathInvaders />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default mathA;

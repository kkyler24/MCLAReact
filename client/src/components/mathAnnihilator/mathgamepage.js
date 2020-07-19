import React, { Component } from "react";
import style from "./mathA.module.css";
import Spacebackground from "../../pictures/MathApics/spaceship/cosmicgalaxbluebackground.jpg";
import MathInvaders from "../mathAnnihilator/mathInvaderConponent.js";

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
        <h2 className={style.title}>Math Invader</h2>
        <p className={style.description}></p>

        <div className={style.row}>
          <div id="canvas" className={`${style.textCenter} ${style.btnroundC}`}>
            <div className={style.containerFluid}>
              <MathInvaders />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default mathA;

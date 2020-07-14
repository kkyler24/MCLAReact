import React, { Component } from "react";
import style from "./mathA.module.css";
import Spacebackground from "../../pictures/MathApics/spaceship/background3591568.png";
import MathAN from "../mathAnnihilator/mathAN.js";

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
          <div className="text-center ml-auto mr-auto col-8 col-lg-6">
            <div>
              {" "}
              <mathInvaders />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default mathA;

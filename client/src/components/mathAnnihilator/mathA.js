import React, { Component } from "react";
import styles from "./mathA.module.css";
import Spacebackground from "../../pictures/MathApics/spaceship/background3591568.png";
// import MathAN from "../mathAnnihilator/mathAN.js";

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
      className="section text-center background containerFluid"
      style={spaceGameIndex}
    >
      <div className={styles.Container}>
        <h2 className={styles.title}>
          <p className={styles.description}>Math Annihilator</p>
        </h2>

        <div className={styles.row}>
          <div className="text-center ml-auto mr-auto col-8 col-lg-6"></div>
        </div>
      </div>
    </div>
  );
}
export default mathA;

<<<<<<< HEAD
// import React, { Component } from "react";
// import style from "../../components/mathAnnihilator/mathAn.module.css";
// import Ship from "./spaceship";
// import Shipspacepic from "../../pictures/MathApics/spaceship/spaceship.png";
// import Aliens from "./Aliens.js";
// import Tokens from "./TokenIntergers.js";

// export default class MathInvaders extends Component {
//   constructor(props) {
//     super(props);
//     this.canvasRef = React.createRef();
//   }
//   render() {
//     return (
//       <div id="MIBG">
//         <div id="Canvas" ref={this.canvasRef} className={style.containerFluid}>
//           <Tokens canvasRef={this.canvasRef} />
//           <Aliens canvasRef={this.canvasRef} />
//           <div className={StyleSheet.shipContainer}>
//             <Ship canvasRef={this.canvasRef} />
//           </div>
//         </div>
//         <div className={style.description}></div>
//       </div>
//     );
//   }
// }
=======
import React, { Component } from "react";
import style from "../../components/mathAnnihilator/mathAn.module.css";
import Ship from "./spaceship";
import Shipspacepic from "../../pictures/MathApics/spaceship/spaceship.png";
import Aliens from "./Aliens.js";
// import Tokens from "./TokenIntergers.js";

// three arrays in state

export default class MathInvaders extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  render() {
    return (
      <div id="MIBG">
        <div id="Canvas" ref={this.canvasRef} className={style.containerFluid}>
          {/* <Tokens canvasRef={this.canvasRef} /> */}
          <Aliens canvasRef={this.canvasRef} />
          <div className={StyleSheet.shipContainer}>
            <Ship canvasRef={this.canvasRef} />
          </div>
        </div>
        <div className={style.description}></div>
      </div>
    );
  }
}
>>>>>>> 5bd2153a7ee5ee327216acf2ec8677686482bf66

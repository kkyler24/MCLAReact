import React, { Component } from "react";
import styles from "./mathAn.module.css";
import Shipspacepic from "../../pictures/MathApics/spaceship/spaceship.png";

export default class SpaceShip extends Component {
  constructor(el, props) {
    super(props);
    this.state = {
      left: 820 / 2,
      top: -25,
    };

    // this.move = function (dir) {
    //   this.x += dir;
    //   this.show = function () {
    //     Shipspacepic(this.x, 20, 20, 20);

    //   };
  }

  //  SpaceShip.move();

  //     // <button onClick={e => this.props.move(10, 0)}>Right</button>
  //     // <button onClick={e => this.props.move(0, -10)}>Up</button>
  //     // <button onClick={e => this.props.move(0, 10)}>Down</button>
  //   //       ship.move(1);
  //   //

  // move = (x, y) => {
  //   console.log(x, y);
  //   this.setState({
  //     left: this.state.left + x,
  //     Right: this.state.right - x,
  //   });
  // };

  ship = (event) => {
    console.log(event);
    if (event.keyCode === 37) {
      this.setState({
        left: this.state.left - 10,
      });
    }
    //Do whatever when leftarrow is pressed
    else if (event.keyCode === 39) {
      this.setState({
        left: this.state.left + 10,
      });
    } else {
      console.log("default");
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.ship);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.ship);
  }
  render() {
    return (
      <div>
        <img
          src={Shipspacepic}
          className={styles.shippic}
          style={{ top: this.state.top, left: this.state.left }}
        />
      </div>
    );
  }
}

// 	render() {
//   	return <div>
//
//       <Controls move={(x, y) => this.move(x, y)}/>
//     </div>;
//   }
// }

import React, { Component } from "react";
import styles from "./mathAn.module.css";
import Shipspacepic from "../../pictures/MathApics/spaceship/spaceship.png";

export default class SpaceShip extends Component {
  constructor(el, props) {
    super(props);
    // this.shipFunction = this.shipFunction.bind(this);
    this.state = {
      left: 0,
      top: 0,
    };
    this.x = 840 / 2;
    this.y = -350;
    this.move = function (dir) {
      this.x += dir;
      this.show = function () {
        Shipspacepic(this.x, 20, 20);
      };
    };

    // move(x, y) {
    //     	this.setState({
    //       	left: this.state.left + x,
    //       	top: this.state.right -x,
    //       });
    //     }

    //   SpaceShip.move();

    //   this.ship = () => {
    //     return function shipFunction(event){
    //   if(event.keyCode === ArrowRight) {
    //     // Key onClick={e => this.props.move(-10, 0)}
    //     //Do whatever when leftarrow is pressed
    //   };
    //    else if (keyCode === LeftArrow) {
    //         ship.move(-1);
    // }
    // };

    // }

    // componentDidMount(){
    //   document.addEventListener("keydown", this.shipFunction, false);
    // };
    // componentWillUnmount(){
    //   document.removeEventListener("keydown", this.shipFunction, false);

    //     //
    //     // <button onClick={e => this.props.move(10, 0)}>Right</button>
    //     // <button onClick={e => this.props.move(0, -10)}>Up</button>
    //     // <button onClick={e => this.props.move(0, 10)}>Down</button>
    //   //       ship.move(1);
    //   //
  }
  render() {
    return (
      <div>
        <img src={Shipspacepic} className={styles.shippic} />
      </div>
    );
  }
}

// 	render() {
//   	return <div>
//     	<Thing left={this.state.left} top={this.state.top}/>
//       <Controls move={(x, y) => this.move(x, y)}/>
//     </div>;
//   }
// }

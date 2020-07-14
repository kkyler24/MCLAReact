import React, { Component } from "react";
// import P5Wrapper from "react-p5-wrapper";
import Sketch from "react-p5";

export default class MathInvaders extends Component {
  x = 50;
  y = 50;

  //  preload = (p5) =>{
  //     img = loadImage('assets/laDefense.jpg');
  //   }
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 600).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
  draw = (p5) => {
    p5.background(51);
    p5.ellipse(this.x, this.y, 70, 70);
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    this.x++;
  };
  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}

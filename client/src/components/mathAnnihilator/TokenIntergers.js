import React from "react";
import One from "../../pictures/MathApics/invaders_png/one.png";
import Two from "../../pictures/MathApics/invaders_png/two.png";
import Three from "../../pictures/MathApics/invaders_png/three.png";
import Four from "../../pictures/MathApics/invaders_png/four.png";
import Five from "../../pictures/MathApics/invaders_png/five.png";
import Six from "../../pictures/MathApics/invaders_png/six.png";
import Seven from "../../pictures/MathApics/invaders_png/seven.png";
import Eight from "../../pictures/MathApics/invaders_png/eight.png";
import Nine from "../../pictures/MathApics/invaders_png/nine.png";

const intergersImagesArray = [
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
];

function TokenIntegerComponent(props) {
  console.log(props.canvasRef);
  // if (props.canvasRef) {

  // }
  // return <></>;
  return (
    <div
      style={{
        position: "absolute",
        left: props.position[0],
        height: "90px",
        width: "90px",
        zIndex: 2,
      }}
    >
      <img
        src={props.image}
        alt="TokenInteger"
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
}

function Tokens(props) {
  //   const alienInterval =
  return (
    <div>
      <TokenIntegerComponent
        // canvasRef={props.canvasRef.current}
        position={[40, 40]}
        image={intergersImagesArray[0]}
        pointVaule={1}
      />
      <TokenIntegerComponent
        // canvasRef={props.canvasRef.current}
        position={[80, 40]}
        image={intergersImagesArray[1]}
        pointVaule={2}
      />
      <TokenIntegerComponent
        // canvasRef={props.canvasRef.current}
        position={[120, 40]}
        image={intergersImagesArray[2]}
        pointVaule={3}
      />
    </div>
  );
}
export default Tokens;

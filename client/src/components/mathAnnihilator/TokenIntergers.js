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

const width = document;
console.log(width);
const intergersImagesArray = [
  { image: One, value: 1, position: [10, 40] },
  { image: Two, value: 2, position: [10, 40] },
  { image: Three, value: 3, position: [10, 40] },
  { image: Four, value: 4, position: [10, 40] },
  { image: Five, value: 5, position: [10, 40] },
  { image: Six, value: 6, position: [10, 40] },
  { image: Seven, value: 7, position: [10, 40] },
  { image: Eight, value: 7, position: [10, 40] },
  { image: Nine, value: 9, position: [10, 40] },
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
        // top: props.position[0],
        // left: props.position[0],
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
      {intergersImagesArray.map((token) => {
        return (
          <TokenIntegerComponent
            // canvasRef={props.canvasRef.current}
            position={token.position[(40, 40)]}
            image={token.image}
            pointVaule={token[1]}
          />
        );
      })}
      {/* <TokenIntegerComponent
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
      /> */}
    </div>
  );
}
export default Tokens;

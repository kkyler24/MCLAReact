import React from "react";
import Green from "../../pictures/MathApics/invaders_png/green.png";
import Yellow from "../../pictures/MathApics/invaders_png/yellow.png";
import Red from "../../pictures/MathApics/invaders_png/red.png";

const aliensImagesArray = [Green, Yellow, Red];

function AlienComponent(props) {
  console.log(props.canvasRef);
  // if (props.canvasRef) {

  // }
  // return <></>;
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        height: "90px",
        width: "90px",
        zIndex: 2,
      }}
    >
      <img src={props.image} alt="Alien" style={{ width: 90, height: 90 }} />
    </div>
  );
}

function Aliens(props) {
  //   const alienInterval =
  return (
    <div>
      <AlienComponent
        // canvasRef={props.canvasRef.current}
        position={[0, 0]}
        image={aliensImagesArray[0]}
        pointVaule={10}
      />
      <AlienComponent
        // canvasRef={props.canvasRef.current}
        position={[40, 0]}
        image={aliensImagesArray[1]}
        pointVaule={10}
      />
      <AlienComponent
        // canvasRef={props.canvasRef.current}
        position={[80, 0]}
        image={aliensImagesArray[2]}
        pointVaule={10}
      />
    </div>
  );
}
export default Aliens;

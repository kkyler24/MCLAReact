// import React from "react";
// import One from "../../pictures/MathApics/invaders_png/one.png";
// import Two from "../../pictures/MathApics/invaders_png/two.png";
// import Three from "../../pictures/MathApics/invaders_png/three.png";
// import Four from "../../pictures/MathApics/invaders_png/four.png";
// import Five from "../../pictures/MathApics/invaders_png/five.png";
// import Six from "../../pictures/MathApics/invaders_png/six.png";
// import Seven from "../../pictures/MathApics/invaders_png/seven.png";
// import Eight from "../../pictures/MathApics/invaders_png/eight.png";
// import Nine from "../../pictures/MathApics/invaders_png/nine.png";

// class MathTokens extends Component {
//   constructor(props) {
//     super(props);
//     this.x = 850 / 2;

//     const intergersImagesArray = [
//       { image: One, value: 1 },
//       { image: Two, value: 2 },
//       { image: Three, value: 3 },
//       { image: Four, value: 4 },
//       { image: Five, value: 5 },
//       { image: Six, value: 6 },
//       { image: Seven, value: 7 },
//       { image: Eight, value: 8 },
//       { image: Nine, value: 9 },
//     ];
//   }
//   render() {
//     return (
//       <div
//         style={{
//           position: "absolute",
//           // top: props.position[0],
//           // left: props.position[0],
//           height: "90px",
//           width: "90px",
//           zIndex: 2,
//         }}
//       >
//         <img
//           src={props.image}
//           alt="TokenInteger"
//           style={{ width: 150, height: 150 }}
//         />
//       </div>
//     );

//     function Tokens(props) {
//       console.log(props.canvasRef);
//       return (
//         <div>
//           {intergersImagesArray.map((token) => {
//             return (
//               <TokenIntegerComponent
//                 // canvasRef={props.canvasRef.current}
//                 position={token.position(40, 40)}
//                 image={token.image}
//                 pointVaule={token[1]}
//               />
//             );
//           })}
//         </div>
//       );
//     }
//   }
// }
// export default MathTokens;

// import React, {
//   Component,
//   Card,
//   CardImg,
//   CardImgOverlay,
//   CardTitle,
//   CardText,
// } from "react";
// import Row from "../Row/Row";
// import Col from "../Col/Col";
// // import CardBody from "../CardBody/CardBody";
// import Images from "../Images/Images";
// import crdImg from "../../pictures/boyReading.jpg";
// import Scrabble from "../../pictures/scrabbleLetters.jpg";
// import TicTacToe from "../../pictures/tictactoe.jpeg";

// function GameCards(props) {
//   return (
//     // <Row>
//     //   <Col size="sm-4">
//     //     <Card className="bg-dark">
//     //       <CardImg
//     //         alt="..."
//     //         data-src="holder.js/100px270/#55595c:#373a3c/text:Card image"
//     //       ></CardImg>
//     //       <CardImgOverlay>
//     //         <CardTitle tag="h4">Card title</CardTitle>
//     //         <CardText>
//     //           This is a wider card with supporting text below as a natural
//     //           lead-in to additional content. This content is a little bit
//     //           longer.
//     //         </CardText>
//     //         <CardText>Last updated 3 mins ago</CardText>
//     //       </CardImgOverlay>
//     //     </Card>
//     //   </Col>
//     //   <Col size="sm-4">
//     //     <div class="card" style={{ width: "18rem", border: "black 2px solid" }}>
//     //       <Images src={TicTacToe} className="card-img-top" alt="image"></Images>
//     //       <div class="card-body game-card-body">
//     //         <h5 class="card-title">Tic Tac Toe</h5>
//     //         <p class="card-text">description</p>
//     //         <a href="#" class="btn btn-primary">
//     //           PLAY
//     //         </a>
//     //       </div>
//     //     </div>
//     //   </Col>
//     //   <Col size="sm-4">
//     //     <div class="card" style={{ width: "18rem", border: "black 2px solid" }}>
//     //       <Images src={crdImg} className="card-img-top" alt="image"></Images>
//     //       <div class="card-body game-card-body">
//     //         <h5 class="card-title">Math Annihilator</h5>
//     //         <p class="card-text">
//     //           Some quick example text to build on the card title and make up the
//     //           bulk of the card's content.
//     //         </p>
//     //         <a href="#" class="btn btn-primary">
//     //           PLAY
//     //         </a>
//     //       </div>
//     //     </div>
//     //   </Col>
//     // </Row>
    
//   );
// }

// export default GameCards;





// import React from "react";
// import "./GameCards.css";
// // reactstrap components
// import{
//   Card,
//   CardBody,
//   CardTitle,
//   CardText
// } from "reactstrap";
// // core components

// function GameCards(){
//   return (
//  <Card style={{ width: "20rem" }}>
//         <CardBody className={style.cardBody}>
//           <CardTitle className={style.cardTitle} tag="h4">Special title treatment</CardTitle>
//           <CardText>
//             With supporting text below as a natural lead-in to additional
//             content.
//           </CardText>
//           <Button
//             color="primary"
//             href="#pablo"
//             onClick={e => e.preventDefault()}
//   )
// }

// export default GameCards;

import React from "react";

// reactstrap components
import{
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button
} from "reactstrap";
// core components

function GameCards(){
  return (
    <>
      <Card className="text-center">
        <CardHeader className="mt-2">Featured</CardHeader>
        <CardBody>
          <CardTitle tag="h4">Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button
            color="primary"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Go somewhere
          </Button>
        </CardBody>
        <CardFooter className="text-muted mb-2">2 days ago</CardFooter>
      </Card>
    </>
  );
}

export default GameCards;
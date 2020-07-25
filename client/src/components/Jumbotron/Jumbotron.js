import React from "react";
import "./Jumbotron.css";
import gameJumb from "../../pictures/gamepagepics/blackboard.png";

// const jumbStyle = {
//   backgroundImage: `url(${gameJumb})`,
//   backgroundSize: "1440px",
// };

function Jumbotron(props) {
  return (
    <div id="GamesJumbo">
      <div className="JumboTitleOne">
        <div className="titleG">
          <h1 id="h1G">Learning Games</h1>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;

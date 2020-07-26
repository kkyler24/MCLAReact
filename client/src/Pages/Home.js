import React, { Component } from "react";
import "../App.css";

import IndexContainer from "../components/indexcontainer/indexContainer";
import Scramble from "../components/indexcontainer/indexContainer";
class Home extends Component {
  render() {
    return (
      <div id="backgroundPic" class="img-fluid" alt="Responsive image">
        <IndexContainer />
      </div>
    );
  }
}
export default Home;

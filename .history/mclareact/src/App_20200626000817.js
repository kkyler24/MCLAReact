import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";

class App extends Component {
  render() {
    return (
      <div id="backgroundPic" class="img-fluid" alt="Responsive image">
        <Navbar />;
      </div>
    );
  }
}

export default App;

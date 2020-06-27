import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import IndexContainer from "./components/indexcontainer/indexContainer.js";
import Footer from "./components/Footer/Footer.js";
import TransparentFooter from "./components/Footer/TransparentFooter";
class App extends Component {
  render() {
    return (
      <div id="backgroundPic" class="img-fluid" alt="Responsive image">
        <Navbar />
        <IndexContainer />
        <Footer />
      </div>
    );
  }
}

export default App;

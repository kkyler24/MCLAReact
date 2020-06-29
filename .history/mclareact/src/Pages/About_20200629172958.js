import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Jumbotron from "../components/Jumbotron/Jumbotron";

class AboutUS extends Component {
  render() {
    return (
      <div className="Container">
        <Navbar />
        <Jumbotron />
        <Footer />
      </div>
    );
  }
}
export default AboutUS;

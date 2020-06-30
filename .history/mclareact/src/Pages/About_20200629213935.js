import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import SectionAU from "../components/sectionAboutUs/sectionAU.js";

class AboutUS extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <SectionAU />
        <Footer />
      </div>
    );
  }
}
export default AboutUS;

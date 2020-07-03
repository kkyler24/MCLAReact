import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import SectionAU from "../components/sectionAboutUs/sectionAU.js";
import Teamsection from "../components/Teamsection/Teamsection.js";
import Signup from "../components/Signup/signupC";

class AboutUS extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <SectionAU />
        <Teamsection />
        <Signup />
        <Footer />
      </div>
    );
  }
}
export default AboutUS;

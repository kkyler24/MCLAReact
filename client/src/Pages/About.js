import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AboutJumbo from "../components/AboutJumbo/AboutJumbo";
import SectionAU from "../components/sectionAboutUs/sectionAU.js";
import Teamsection from "../components/Teamsection/Teamsection.js";
import Signup from "../components/Signup/signupC";
import MessageUs from "../components/MessageUS/messageUs";
import greenBalloon from "../pictures/hothairballoongreen.jpg"

class AboutUS extends Component {
  render() {
    return (
      <div>
        <AboutJumbo></AboutJumbo>
        <SectionAU />
        <Teamsection />
        <MessageUs />
        <Footer />
      </div>
    );
  }
}
export default AboutUS;

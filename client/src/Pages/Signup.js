import React from "react";
import SignupC from "../components/Signup/signupC";
import Login from "../../src/components/Login/Login.js";
import Image1 from "../pictures/darren-lee-0kEvX-9hJyQ-unsplash.jpg";
// import Footer from "../components/footerSocial";

const Style1 = {
  display: "inlineblock",
  flexdirection: "column",
};

const Style2 = {
  backgroundImage: `url(${Image1})`,
  backgroundSize: "cover",
  minHeight: "700px",
  margin: "0px !important",
};

const style3 = {
  marginTop: "10%",
};

function SignupP() {
  return (
    <div style={Style2}>
      <div className="container" style={Style1}>
        <div className="row">
          <div className="col md-8" style={style3}>
            <div>
              <SignupC />
            </div>

            <div>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupP;

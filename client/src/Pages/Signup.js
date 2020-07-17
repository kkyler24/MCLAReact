import React from "react";
import SignupC from "../components/Signup/signupC";
import Login from "../../src/components/Login/Login.js";
// import Image1 from "../../pictures/controller.jpg";
// import Footer from "../components/footerSocial";

// const background = {
//   backgroundImage: `url(${Image1})`,
//   backgroundSize: "cover",
//   backgroundPosition: "top center",
//   minHeight: "700px",
// };
function SignupP() {
  return (
    <div className="container">
      <div className="row">
        <div className="col md-5">
          <SignupC />
        </div>
        <div className="col md-5">
          <Login />
        </div>
      </div>
    </div>
  );
}
export default SignupP;

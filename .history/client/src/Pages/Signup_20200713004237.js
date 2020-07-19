import React from "react";
import SignupC from "../components/Signup/signupC";
import Image1 from "../../pictures/controller.jpg";
// import Footer from "../components/footerSocial";

const background = {
  backgroundImage: `url(${Image1})`,
  backgroundSize: "cover",
  backgroundPosition: "top center",
  minHeight: "700px",
};
function SignupP() {
  return (
    <div className=" row">
      <div className="container col md-5">
        <SignupC />
      </div>
      <div className="container col md-5">{/* <login/> */}</div>
      {/* <footerSocial /> */}
    </div>
  );
}
export default SignupP;

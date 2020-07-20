import React from "react";
import SignupC from "../components/Signup/signupC";
import Login from "../../src/components/Login/Login.js";
import Image1 from "../pictures/lighBulbLIbrary.jpg";
import SocialFooter from "../components/SocialFooter/SocialFooter";

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

function SignupP(props) {
  return (
    <>
    <div style={Style2}>
      <div className="container" style={Style1}>
        <div className="row">
          <div className="col md-8" style={style3}>
            <div>
              <SignupC {...props}/>
            </div>

            <div>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
    <SocialFooter></SocialFooter>
    </>
  );
}
export default SignupP;

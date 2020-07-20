import React from "react";
import styles from "./signupC.module.css";
import {Redirect} from "react-router-dom";
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// import facebookAuthentication from "./facebookAuthentication";

import GoogleAuth from "./authentication.js";
// import { Link } from "react-router-dom";
// reactstrap components

// core components

function SignupC() {
  return (
    <>
<GoogleAuth></GoogleAuth>
    </>
  );
}

export default SignupC;

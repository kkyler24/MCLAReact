import React from "react";
import "./Login.css";

import {
  Button,
  CardFooter,
  CardTitle,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// core components
function Login() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
      <div action="" className="formL" method="">
        <CardTitle className="title-up" tag="h5">
          Login
        </CardTitle>
        <div className="social-line">
          <Button
            className="btn-neutral btn-iconL btn-roundL"
            color="twitter"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="lg"
          >
            <i className="fab fa-twitter"></i>
          </Button>
          <Button
            className="btn-neutral btn-iconL btn-roundL"
            color="google"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <i className="fab fa-google-plus"></i>
          </Button>
        </div>
        <div className="card-body-login">
          <InputGroup
            className={"no-border" + (firstFocus ? " input-group-focus" : "")}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="now-ui-icons users_circle-08"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="First Name..."
              type="text"
              onFocus={() => setFirstFocus(true)}
              onBlur={() => setFirstFocus(false)}
            ></Input>
          </InputGroup>
          <InputGroup
            className={"no-border" + (lastFocus ? " input-group-focus" : "")}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="now-ui-icons text_caps-small"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Last Name..."
              type="text"
              onFocus={() => setLastFocus(true)}
              onBlur={() => setLastFocus(false)}
            ></Input>
          </InputGroup>
          <InputGroup
            className={"no-border" + (emailFocus ? " input-group-focus" : "")}
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="now-ui-icons ui-1_email-85"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Email..."
              type="text"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            ></Input>
          </InputGroup>
        </div>
        <CardFooter className="text-center">
          <Button
            className="btn-neutral btn-round login-button"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="lg"
          >
            Login
          </Button>
        </CardFooter>
      </div>
      <div className="col text-center">
        <Button
          className="btn-round btn-white"
          color="default"
          to="/login-page"
          outline
          size="lg"
          // tag={Link}
        ></Button>
      </div>
    </>
  );
}
export default Login;

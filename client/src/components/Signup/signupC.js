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
<<<<<<< HEAD
      <div className={`${styles.section} ${styles.sectionSignup}`}>
        <div className={styles.container}>
<<<<<<< Updated upstream
          <div className={styles.row}>
            <div
              className={`${styles.cardSignup} ${styles.card} `}
              data-background-color="blue"
            >
              <div
                action=""
                className={`${styles.form} ${styles.btnround}`}
                method=""
              >
                <div className={`${styles.textCenter} ${styles.cardHeader}`}>
                  <div
=======
          <Row className={styles.row}>
            <Card className={styles.cardSignup} data-background-color="blue">
              <Form action="" className={styles.form} method="">
                <CardHeader
                  className={`${styles.textCenter} ${styles.cardHeader}`}
                >
                  <CardTitle
>>>>>>> Stashed changes
                    className={`${styles.cardTitle} ${styles.titleUp}`}
                    tag="h3"
                  >
                    Sign Up
                  </div>
                  <div className={styles.socialLine}>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                    //   href="#pablo"
                    //   onClick={(e) => e.preventDefault()}
                     >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="twitter"
                      // href="https://twitter.com"
                      // onClick={(e) => e.preventDefault()}
                      // size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    >
                      <i className="fab fa-google btngoogle"></i>                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="google"
                      // href=""
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
<<<<<<< Updated upstream
                </div>
                <div className={styles.cardBody}>
                  <InputGroup className={styles.inputGroup}>
=======
                </CardHeader>
                <CardBody className={styles.cardBody}>
                  <InputGroup
                    className={
                      `${styles.inputGroup} ${styles.inputGroupround}` +
                      (firstFocus ? " input-group-focus" : "")
                    }
                  >
>>>>>>> Stashed changes
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
                    className={
                      "no-border" + (lastFocus ? " input-group-focus" : "")
                    }
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
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
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
<<<<<<< Updated upstream
                </div>
                <div className={`${styles.textCenter} ${styles.cardFooter}`}>
=======
                </CardBody>
                <CardFooter className="text-center">
>>>>>>> Stashed changes
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Get Started
                  </Button>
<<<<<<< Updated upstream
                </div>
              </div>
            </div>
=======
                </CardFooter>
              </Form>
            </Card>
          </Row>
          <div className="col text-center">
            <Button
              className="btn-round btn-white"
              color="default"
              to="/login-page"
              outline
              size="lg"
              // tag={Link}
            >
              View Login Page
            </Button>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
=======
<GoogleAuth></GoogleAuth>
>>>>>>> d310d8b98c15652612fec4a61de8d46946ef6401
    </>
  );
}

export default SignupC;

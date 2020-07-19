import React from "react";
import styles from "./signupC.module.css";
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import GoogleAuth from "./authentication.js";
import responseFacebook from "./facebookAuthentication";
// import { Link } from "react-router-dom";
// reactstrap components

// core components

function SignupC(props) {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>

<GoogleAuth></GoogleAuth>
      <div className={`${styles.section} ${styles.sectionSignup}`}>
        <div className={styles.container}>
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
                       onClick={(e) => e.preventDefault()}
                     >
                      <i className="fab fa-facebook-square"></i>
                    </Button>

                    {/* PUT GOOGLE BUTTON HERE */}

                    <Button
                    
                      className="btn-neutral btn-icon btn-round"
                      color="linkedin"
                      // href=""
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <InputGroup className={styles.inputGroup}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className={styles.inputGroupText}>
                        <i className="nowuiicons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className={styles.input}
                      placeholder="First Name..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup className={styles.inputGroup}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className={styles.inputGroupText}>
                        <i className="nowuiicons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className={styles.input}
                      placeholder="Last Name..."
                      type="text"
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup className={styles.inputGroup}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className={styles.inputGroupText}>
                        <i className="far fa-user-circle"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className={styles.input}
                      placeholder="Email..."
                      type="text"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                </div>
                <div className={`${styles.textCenter} ${styles.cardFooter}`}>
                  <Button
                    className={`${styles.btnround} ${styles.btn}  ${styles.btninfo} ${styles.btnlg}`}
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupC;

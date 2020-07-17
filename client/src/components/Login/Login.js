import React from "react";
import styles from "./Login.module.css";
import {
  Button,
  CardFooter,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// core components

function Login() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <div className={`${styles.sectionl} ${styles.sectionSignupl}`}>
        <div className={styles.containerl}>
          <div className={styles.rowl}>
            <div
              className={`${styles.cardSignupl} ${styles.cardl} `}
              data-background-color="blue"
            >
              <div
                action=""
                className={`${styles.forml} ${styles.btnroundl}`}
                method=""
              >
                <div className={`${styles.textCenterl} ${styles.cardHeaderl}`}>
                  <div
                    className={`${styles.cardTitlel} ${styles.titleUpl}`}
                    tag="h3"
                  >
                    MCLA
                    <p className={styles.paragraphl}> --| -.-.| .-.. |.-</p>
                  </div>
                  <div className={styles.socialLinel}></div>
                </div>
                <div className={styles.cardBodyl}>
                  <InputGroup className={styles.inputGroupl}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className={styles.inputGroupTextl}>
                        <i className="far fa-user-circle"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className={styles.inputl}
                      placeholder="Email..."
                      type="text"
                      // onFocus={() => setEmailFocus(true)}
                      // onBlur={() => setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup className={styles.inputGroupl}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText className={styles.inputGroupTextl}>
                        <i className="nowuiicons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className={styles.inputl}
                      placeholder="Password..."
                      type="text"
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>
                </div>
                <div className={`${styles.textCenterl} ${styles.cardFooterl}`}>
                  <Button
                    className={`${styles.btnroundl} ${styles.btnl}  ${styles.btninfol} ${styles.btnlgl}`}
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Log In
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

export default Login;

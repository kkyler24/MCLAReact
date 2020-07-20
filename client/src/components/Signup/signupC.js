import React from "react";
import styles from "./signupC.module.css";
import { Redirect } from "react-router-dom";
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
    //       <div className={`${styles.section} ${styles.sectionSignup}`}>
    //         <div className={styles.container}>

    //           <div className={styles.row}>
    //             <div
    //               className={`${styles.cardSignup} ${styles.card} `}
    //               data-background-color="blue"
    //             >
    //               <div
    //                 action=""
    //                 className={`${styles.form} ${styles.btnround}`}
    //                 method=""
    //               >
    //                 <div className={`${styles.textCenter} ${styles.cardHeader}`}>
    //                   <div></div>

    //           <Row className={styles.row}>
    //             <Card className={styles.cardSignup} data-background-color="blue">
    //               <Form action="" className={styles.form} method="">
    //                 <CardHeader
    //                   className={`${styles.textCenter} ${styles.cardHeader}`}
    //                 >
    //                   <CardTitle

    //                     className={`${styles.cardTitle} ${styles.titleUp}`}
    //                     tag="h3"
    //                   >
    //                     Sign Up
    //                   </div>
    //                   <div className={styles.socialLine}>
    //                     <Button
    //                       className="btn-neutral btn-icon btn-round"
    //                       color="facebook"
    //                     //   href="#pablo"
    //                     //   onClick={(e) => e.preventDefault()}
    //                      >
    //                       <i className="fab fa-facebook-square"></i>
    //                     </Button>
    //                     <Button
    //                       className="btn-neutral btn-icon btn-round"
    //                       color="twitter"
    //                       // href="https://twitter.com"
    //                       // onClick={(e) => e.preventDefault()}
    //                       // size="lg"
    //                     >
    //                       <i className="fab fa-twitter"></i>

    //                       <i className="fab fa-google btngoogle"></i>                    </Button>
    //                     <Button
    //                       className="btn-neutral btn-icon btn-round"
    //                       color="google"
    //                       // href=""
    //                       // onClick={(e) => e.preventDefault()}
    //                     >
    //                       <i className="fab fa-linkedin"></i>
    //                     </Button>
    //                   </div>
    //                 </div>
    //                 <div className={styles.cardBody}>
    //                   <InputGroup className={styles.inputGroup}>
    //                     <InputGroupAddon addonType="prepend">
    //                       <InputGroupText>
    //                         <i className="now-ui-icons users_circle-08"></i>
    //                       </InputGroupText>
    //                     </InputGroupAddon>
    //                     <Input
    //                       placeholder="First Name..."
    //                       type="text"
    //                       onFocus={() => setFirstFocus(true)}
    //                       onBlur={() => setFirstFocus(false)}
    //                     ></Input>
    //                   </InputGroup>
    //                   <InputGroup
    //                     className={
    //                       "no-border" + (lastFocus ? " input-group-focus" : "")
    //                     }
    //                   >
    //                     <InputGroupAddon addonType="prepend">
    //                       <InputGroupText>
    //                         <i className="now-ui-icons text_caps-small"></i>
    //                       </InputGroupText>
    //                     </InputGroupAddon>
    //                     <Input
    //                       placeholder="Last Name..."
    //                       type="text"
    //                       onFocus={() => setLastFocus(true)}
    //                       onBlur={() => setLastFocus(false)}
    //                     ></Input>
    //                   </InputGroup>
    //                   <InputGroup
    //                     className={
    //                       "no-border" + (emailFocus ? " input-group-focus" : "")
    //                     }
    //                   >
    //                     <InputGroupAddon addonType="prepend">
    //                       <InputGroupText>
    //                         <i className="now-ui-icons ui-1_email-85"></i>
    //                       </InputGroupText>
    //                     </InputGroupAddon>
    //                     <Input
    //                       placeholder="Email..."
    //                       type="text"
    //                       onFocus={() => setEmailFocus(true)}
    //                       onBlur={() => setEmailFocus(false)}
    //                     ></Input>
    //                   </InputGroup>
    //                 </div>
    //                 <div className={`${styles.textCenter} ${styles.cardFooter}`}>
    //                   <Button
    //                     className="btn-neutral btn-round"
    //                     color="info"
    //                     href="#pablo"
    //                     onClick={(e) => e.preventDefault()}
    //                     size="lg"
    //                   >
    //                     Get Started
    //                   </Button>
    //                 </div>
    //               </div>

    //             </div>
    //           </div>
    //         </div>
    //       </div>
    <div>hi</div>
  );
}

export default SignupC;

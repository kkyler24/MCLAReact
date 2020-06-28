import React, { Component } from "react";
import "./Footer.css";
import { Container } from "reactstrap";
import "../src/Assets/now-ui-kit.css";

function Footer() {
  return (
    <footer id="footer" className="footer .d-md-flex row">
      <Container>
        <nav className=" col-md-6 col-lg-10">
          <h3 id="textChange">Follow the action with Us!</h3>
          <ul className=" ulFooter mx-auto">
            <li>
              <a
                href="https://www.instagram.com"
                class="btn-social btn-outline"
              >
                <i class="fa fa-fw fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                class="btn-social btn-outline "
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-transparent-footer"
                target="_blank"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" Ky Kyler "}
          <a
            href="https://www.invisionapp.com?ref=nukr-transparent-footer"
            target="_blank"
          >
            Invision
          </a>
          . Coded by{"The Confusion Group"}
          <a
            href="https://www.creative-tim.com?ref=nukr-transparent-footer"
            target="_blank"
          >
            Creative Tim
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

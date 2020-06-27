import React, { Component } from "react";
import "./Footer.css";
import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <h3 id="textChange">Follow the action with Us!</h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com"
                class="btn-social btn-outline"
              >
                <i class="fa fa-fw fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" class="btn-social btn-outline">
                <i class="fa fa-fw fa-linkedin"></i>
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
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-transparent-footer"
            target="_blank"
          >
            Invision
          </a>
          . Coded by{" "}
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

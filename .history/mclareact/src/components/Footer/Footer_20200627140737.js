import React, { Component } from "react";
import "./Footer.css";
import ".mclareact/src/Assets/now-ui-kit.css";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" class=" footer text-center">
        <div class="footer-above">
          <div class="blank-flex-container-1"></div>
          <div id="footerFlex" class="footer-flex-container-main">
            <h3 id="textChange">Follow the action with Us!</h3>
            <ul id="linksColor" class="list-inline">
              <li>
                <a
                  href="https://www.instagram.com"
                  class="btn-social btn-outline"
                >
                  <i class="fa fa-fw fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" class="btn-social btn-outline">
                  <i class="fa fa-fw fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  class="btn-social btn-outline"
                >
                  <i class="fa fa-fw fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com" class="btn-social btn-outline">
                  <i class="fa fa-fw fa-github"></i>
                </a>
              </li>
            </ul>
            <p>Copyright</p>
          </div>
          <div class="blank-flex-container-2"></div>
        </div>
      </footer>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="footer-content">
          <h3>Software Developer</h3>
          <p>lorem</p>
        </div>
        <div class="footer-bottom">
          <p>
            copyright &copy; <a href="meet">Meet Patel</a>{" "}
          </p>
          <div class="footer-menu">
            <ul class="f-menu">
              <li>
                <a href="a">Home</a>
              </li>
              <li>
                <a href="a">About</a>
              </li>
              <li>
                <a href="a">Contact</a>
              </li>
              <li>
                <a href="a">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

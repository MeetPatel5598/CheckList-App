import React, { Component } from "react";
import "./Aboutus.css";

export default class Aboutus extends Component {
  render() {
    return (
      <div class="row">
        <div class="column">
          <div class="cards">
            <img src="meet.jpg" alt="Meet" />
            <div class="container">
              <h2>Meet Patel</h2>
              <p class="title">Software Developer</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

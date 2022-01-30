import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link className="link-logo" to="/">
          TO-DO APP
        </Link>
        <div className="header-right">
          <Link className="link-logo" to="/Home">
            Home
          </Link>
          <Link className="link-logo" to="/About">
            Contact
          </Link>
          <Link className="link-logo" to="/About">
            About
          </Link>
        </div>
      </div>
    );
  }
}

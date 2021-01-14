import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    const { user, isAuthenticated } = this.props.authUser;
    const notUser = (
      <div className="nav-btn">
        <div className="nav-links">
          <ul>
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            {/* <li className="nav-link">
              <Link to="#">Contact</Link>
            </li> */}
            <li className="nav-link">
              <Link to="/poplarpower/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="log-sign">
          <Link to="/poplarpower/signin" className="btn transparent">
            Log in
          </Link>
          <Link to="/poplarpower/signup" className="btn solid">
            Sign up
          </Link>
        </div>
      </div>
    );
    const users = (
      <div className="nav-btn">
        <div className="nav-links">
          <ul>
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/poplarpower/profile/dashboard">Dashboard</Link>
            </li>

            <li className="nav-link">
              <Link to="/poplarpower/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="log-sign">
          <Link to="/poplarpower/profile">
            <Button>
              {user === null ? "" : `Welcome ${user.user.firstName}`}
            </Button>
          </Link>
          <Logout />
        </div>
      </div>
    );
    return (
      <>
        <header>
          <div className="container">
            <input type="checkbox" name="" id="check" />

            <div className="logo-container">
              <h3 className="logo">
                Poplar<span>Power</span>
              </h3>
            </div>
            {localStorage.token ? users : notUser}
            <div className="hamburger-menu-container">
              <div className="hamburger-menu">
                <div></div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

export default connect(mapStateToProps, null)(Navbar);

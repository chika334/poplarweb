import React, { Component } from "react";
import { logout } from "../../_action/userAction";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
// import{NavItem, NavLink} from 'reactstrap'
import PropTypes from "prop-types";

export class Logout extends Component {
  static propType = {
    logout: PropTypes.func.isRequired,
  };
  render() {
    return (
      <Button
        color="inherit"
        onClick={this.props.logout}
        href="/poplarpower/signin"
      >
        Signout
      </Button>
    );
  }
}

export default connect(null, { logout })(Logout);

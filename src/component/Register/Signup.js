import React from "react";
import { signup } from '../../_action/userAction'
// import { create } from "../../api-user/api-user";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import {connect} from 'react-redux' 
import './verify.css'
import { clearErrors } from '../../_action/errorAction'

const styles = (theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  error: {
    verticalAlign: "middle",
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle,
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 300,
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
});

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      countryId: "1",
      open: false,
      error: "",
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    authUser: PropTypes.object.isRequired,
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const {error, isAuthenticated} = this.props
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === 'REGISTER_FAIL') {
        this.setState({error: error.message.message})
      }
    } else {
      this.check();
    }
  }

  check = () => {
    const {isAuthenticated} = this.props
    if(isAuthenticated) {
      this.setState({open: true})
      this.sendRedirect();
    }
  }

  sendRedirect = () => {
    this.props.clearErrors()
  }

  clickSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, password, countryId } = this.state
    const user = {
      firstName,
      lastName,
      email,
      phone,
      password,
      countryId,
    };

    this.props.signup(user)
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="" className={classes.title}>
              Register
            </Typography>
            <TextField
              id="firstname"
              label="First Name"
              className={classes.textField}
              value={this.state.firstName || ""}
              onChange={this.handleChange("firstName")}
              margin="normal"
            />{" "}
            <TextField
              id="lastname"
              label="Last Name"
              className={classes.textField}
              value={this.state.lastName || ""}
              onChange={this.handleChange("lastName")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              id="email"
              label="Email"
              type="email"
              className={classes.textField}
              value={this.state.email || ""}
              onChange={this.handleChange("email")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              id="mobile"
              label="Mobile"
              className={classes.textField}
              value={this.state.phone || ""}
              type="number"
              onChange={this.handleChange("phone")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              id="password"
              label="Password"
              type="password"
              className={classes.textField}
              value={this.state.password || ""}
              onChange={this.handleChange("password")}
              margin="normal"
            />{" "}
            <br />
            {this.state.error && (
              <Typography component="p" color="error">
                <Icon color="error" className={classes.error}>
                  error
                </Icon>
                {this.state.error}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              type="button"
              variant="contained"
              onClick={this.clickSubmit}
              className={classes.submit}
            >
              Submit
            </Button>
          </CardActions>
        </Card>
        <Dialog open={this.state.open} disableBackdropClick={true}>
          <DialogTitle>New Account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              New account successfully created.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to="/signin">
              <Button color="primary" autoFocus="autoFocus" variant="contained">
                Sign In
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authUser.isAuthenticated,
  authUser: state.authUser,
  error: state.error
})

export default connect(mapStateToProps, { signup, clearErrors })(withStyles(styles)(Signup))
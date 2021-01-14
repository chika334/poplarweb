import React, { Component, useState } from "react";
// import { token } from "../api-user/token-api";
import { token } from "../_action/tokenAction";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { clearErrors } from "../_action/errorAction";
import { Link } from 'react-router-dom'
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const styles = (theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
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

class BuyToken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      accountNumber: "",
      phoneNo: "",
      amount: "",
      productCode: "rccg-power-12",
      customerId: "",
      fullname: "",
      error: "",
      open: false,
    };
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    token: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "BUYTOKEN_FAIL") {
        this.setState({ error: error.message.message });
      }
    } else {
      this.sendRedirect();
    }
  }

  sendRedirect = () => {
    this.props.clearErrors();
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  setOpenDialog = () => {
    this.setState({ open: true })
  }

  handleCheckChange = (event) => {
    this.setState({ checked: event.target.checked });
  };

  clickSubmit = (e) => {
    e.preventDefault();
    const {
      accountNumber,
      amount,
      fullname,
      productCode,
      customerId,
    } = this.state;

    const buyToken = {
      productCode,
      fullname,
      amount,
      accountNumber,
      customerId,
    };

    this.props.token(buyToken)
    
    if(this.props.error.id === null) {
      this.setOpenDialog()
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              type="headline"
              component="h2"
              className={classes.title}
            >
              Buy Token
            </Typography>
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <TextField
                id="fullname"
                label="Full Name"
                // className={classes.textField}
                value={this.state.fullname || ""}
                type="text"
                variant="outlined"
                onChange={this.handleChange("fullname")}
                margin="normal"
              />
            </FormControl>{" "}
            <br />
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Meter Number
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={this.state.accountNumber || ""}
                onChange={this.handleChange("accountNumber")}
                startAdornment={
                  <InputAdornment position="start">Meter Number</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
            <br />
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={this.state.amount || ""}
                onChange={this.handleChange("amount")}
                startAdornment={
                  <InputAdornment position="start">₦</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
            <br />
            {this.state.error && (
              <Typography component="p" color="error">
                <Icon color="error" className={classes.error}>
                  error{" "}
                </Icon>
                {this.state.error}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button
              color="primary"
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
              <CheckCircleIcon />
              success
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to="/profile/dashboard">
              <Button color="primary" autoFocus="autoFocus" variant="contained">
                Back to Dashboard
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error
})

export default connect(mapStateToProps, { token, clearErrors })(
  withStyles(styles)(BuyToken)
);

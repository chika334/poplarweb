import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import { EditProfile } from "../../_action/userAction";
import { clearErrors } from "../../_action/errorAction";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";

const styles = (theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  card: {
    maxWidth: 400,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(1),
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
  buttonField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 300,
    backgroundColor: "red",
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
});

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

class VerticalLinearStepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      firstName: "",
      lastName: "",
      phone: "",
      bizType: 2,
      position: 1,
      companyName: "",
      contactEmail: "",
      contactPhone: "",
      // error: "",
    };
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    authUser: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    EditProfile: PropTypes.func.isRequired,
    // clearErrors: PropTypes.func.isRequired,
  };

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  handleReset = () => {
    this.setState({ activeStep: 0 });
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleNumberChange = (name) => (event) => {
    this.setState({ [name]: event.target.value.replace(/\D/,'') });
  };

  clickSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      phone,
      bizType,
      position,
      companyName,
      contactEmail,
      contactPhone,
    } = this.state;

    const user = {
      firstName,
      lastName,
      phone,
      bizType,
      position,
      companyName,
      contactEmail,
      contactPhone,
    };
    console.log(this.state);

    this.props.EditProfile(user);
  };

  render() {
    const { activeStep } = this.state;
    const { classes } = this.props;
    const steps = getSteps();

    const first = (
      // const classes = props
      <Card className={classes.card}>
        <CardContent>
          <Typography type="h1" className={classes.title}>
            Edit Profile
          </Typography>
          <TextField
            id="firstName"
            label="First Name"
            type="text"
            className={classes.textField}
            value={this.state.firstName}
            onChange={this.handleChange("firstName")}
            margin="normal"
          />{" "}
          <br />
          <TextField
            id="lastName"
            label="Last Name"
            type="text"
            className={classes.textField}
            value={this.state.lastName}
            onChange={this.handleChange("lastName")}
            margin="normal"
          />{" "}
          <br />
        </CardContent>
      </Card>
    );

    const second = (
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="phone"
            label="Phone"
            type="number"
            className={classes.textField}
            value={this.state.phone}
            onChange={this.handleChange("phone")}
            margin="normal"
          />{" "}
          <br />
          {/* <TextField
            id="bizType"
            label="bizType"
            type="text"
            className={classes.textField}
            value={this.state.bizType || ""}
            onChange={this.handleNumberChange("bizType")}
            margin="normal"
          />{" "}
          <br /> */}
          <TextField
            id="companyName"
            label="Company Name"
            type="text"
            className={classes.textField}
            value={this.state.companyName}
            onChange={this.handleChange("companyName")}
            margin="normal"
          />{" "}
          <br />
        </CardContent>
      </Card>
    );

    const third = (
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="contactEmail"
            label="Contact Email"
            type="email"
            className={classes.textField}
            value={this.state.contactEmail}
            onChange={this.handleChange("contactEmail")}
            margin="normal"
          />{" "}
          <br />
          <TextField
            id="contactPhone"
            label="Contact Phone"
            type="number"
            className={classes.textField}
            value={this.state.contactPhone}
            onChange={this.handleChange("contactPhone")}
            margin="normal"
          />{" "}
          <br />
        </CardContent>
      </Card>
    );

    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return first;
        case 1:
          return second;
        case 2:
          return third;
        default:
          return "Unknown step";
      }
    };

    return (
      <div className={classes.root}>
        <Stepper
          style={{ width: "90%" }}
          activeStep={activeStep}
          orientation="vertical"
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <div>{getStepContent(index)}</div>
                {/* {this.state.error && (
                  <Typography component="p" color="error">
                    <Icon color="error" className={classes.error}>
                      error
                    </Icon>
                    {this.state.error}
                  </Typography>
                )} */}
                {/* <Typography>{getStepContent(index)}</Typography> */}
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <div className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        )}
        {this.state.activeStep === steps.length && (
          <Button
            disabled={activeStep > 3}
            variant="contained"
            color="primary"
            onClick={this.clickSubmit}
            className={classes.button}
          >
            Submit
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authUser.isAuthenticated,
  authUser: state.authUser,
  error: state.error,
});

export default connect(mapStateToProps, { EditProfile })(
  withStyles(styles)(VerticalLinearStepper)
);

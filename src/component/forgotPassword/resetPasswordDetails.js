import React from "react";
import { resetPasswordDetail } from "../../_action/resetPasswordDetails";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import Alert from '@material-ui/lab/Alert';
import { clearErrors } from "../../_action/errorAction";

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

class resetPasswordDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      redirect: false,
      error: "",
      msg: null,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    authUser: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    resetPasswordDetail: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "RESET_PASSWORD_FAIL") {
        this.setState({ error: error.message.message });
      }
    } else {
      this.sendRedirect();
    }
  }

  sendRedirect = () => {
    const message =
      this.props.forgot === null &&
      this.props.forgot.success === false;
    
    if (!message) {
      this.setState({
        msg: this.props.forgot.message,
      });
    }
    this.props.clearErrors();
  };

  forgotPassword = (e) => {
    e.preventDefault();
    const { password } = this.state;
    const details = {
      password,
    };

    this.props.resetPasswordDetail(details);
  };

  render() {
    const { classes } = this.props;
    console.log(this.props.authUser)
    return (
      <div>
        <Card className={classes.card}>
          {this.state.msg ? (
            <Alert severity="success">{this.state.msg}</Alert>
          ) : null}
          <CardContent>
            <Typography type="" className={classes.title}>
              REQUEST PASSWORD RESET
            </Typography>
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
              onClick={this.forgotPassword}
              className={classes.submit}
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authUser.isAuthenticated,
  authUser: state.authUser,
  error: state.error,
  forgot: state.forgot
});

export default connect(mapStateToProps, { resetPasswordDetail, clearErrors })(
  withStyles(styles)(resetPasswordDetails)
);

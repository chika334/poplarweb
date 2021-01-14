import React from "react";
import { changepassword } from '../../_action/changePassword_action'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import {connect} from 'react-redux'
import Alert from '@material-ui/lab/Alert';
// import './verify.css'
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

class changePassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oldPassword: "",
      newPassword: "",
      // redirect: false,
      msg: null,
      error: "",
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    authUser: PropTypes.object.isRequired,
    // ResetPassword: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    clearErrors: PropTypes.func.isRequired,
    changepassword:  PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const {error} = this.props
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === 'CHANGEPASSWORD_FAIL') {
        this.setState({error: error.message.message})
      }
    } else {
      this.sendRedirect();
    }

  }

  sendRedirect = () => {
    const message = this.props.changepasswords === null && this.props.changepasswords.success === false
    if(!message) {
      this.setState({
        msg: this.props.changepasswords.message
      })
    }
    this.props.clearErrors()
  }

  clickSubmit = (e) => {
    e.preventDefault();
    const { oldPassword, newPassword } = this.state
    const user = {
      oldPassword,
      newPassword
    };

    this.props.changepassword(user)
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          {this.state.msg ? <Alert severity="success">{this.state.msg.message}</Alert> : null}
          <CardContent>
            <Typography type="" className={classes.title}>
              Change Password
            </Typography>
            <TextField
              id="oldPassword"
              label="Old Password"
              type="password"
              className={classes.textField}
              value={this.state.oldPassword || ""}
              onChange={this.handleChange("oldPassword")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              id="password"
              label="New Password"
              type="password"
              className={classes.textField}
              value={this.state.newPassword || ""}
              onChange={this.handleChange("newPassword")}
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authUser.isAuthenticated,
  authUser: state.authUser,
  error: state.error,
  changepasswords: state.changepassword
})

export default connect(mapStateToProps, { changepassword, clearErrors })(withStyles(styles)(changePassword))
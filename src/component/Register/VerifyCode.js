import React, { useState } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Paper from '../Paper/Paper';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import './verify.css'
import { Button } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(5),
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  margbody: {
    margin: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    color: theme.palette.text.secondary,
  },
  imageSize: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20%',
    height: '160px',
    width: '150px'
  },
  margbodys: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  padddem: {
    width: 500,
    height: 600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallimageSize: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '30px',
    width: '150px'
  },
});

function Token(props) {
  const {classes} = props;
  const [values, setValues] = useState({
    open: false,
  })

  const clickSubmit = () => {

  }

  const maxLengthCheck = (object) => {
    if(object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength)
    }
  }
  return (
    <div className={classes.root}>
      <Paper>
          <div className={classes.margbodys}>
            <Typography type="p" className={classes.title}>
              A 6digit code was sent to your phone. Kindly enter it below
            </Typography>
          </div>
          <div className="verifynumber">
          {/* <div className={classes.margbodys}> */}
            <input maxLength="6" onInput={maxLengthCheck} type="number" />
          </div>
          <div className={classes.margbody}>  
            <Button onClick={clickSubmit} color="primary" variant="contained">
              Submit
            </Button>
          </div>
      </Paper>
    </div>
  );
}

Token.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Token);
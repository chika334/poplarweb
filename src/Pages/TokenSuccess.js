import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Paper from '../component/Paper/Paper';
import PropTypes from "prop-types"; 
import Button from '@material-ui/core/Button';
import {GiCheckMark} from 'react-icons/gi'
import {IoCheckmarkCircleSharp} from 'react-icons/io5'

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  margbody: {
    width: 300,
    margin: theme.spacing(10),
    height: 200,
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
    // width: 500,
    // height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  padddem: {
    width: 500,
    height: 600,
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallimageSize: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: '20%',
    height: '30px',
    width: '150px'
  },
});

function TokenSuccess(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Paper>
          <div className={classes.margbodys}>
            <GiCheckMark className={classes.imageSize} />
          </div>
          <h4 className={classes.title}>Transaction successful</h4>
          <h4 className={classes.title}>Electric Token</h4>
          <h4 className={classes.title}>82390823612032370212</h4>
          <div className={classes.margbodys}>
            <IoCheckmarkCircleSharp className={classes.smallimageSize} />
          </div>
      </Paper>
    </div>
  );
}

TokenSuccess.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TokenSuccess);
import React, { Component } from 'react';
import Cards from '../Cards/Cards'
import PropTypes from "prop-types";
import './Dashboard.css';
import { withStyles } from "@material-ui/core/styles";
import { GiAlarmClock } from 'react-icons/gi'
import Charts from './Chart'
import Paper from '../Paper/Paper'
import Services from "../Services/Services";

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(3),
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  card: {
    width: '50px'
  },
  title: {
    margin: "auto",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "70px",
    color: theme.palette.text.secondary,
  },
  titles: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    color: theme.palette.text.secondary,
  },
  paddedAll: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  centerImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  }
});

const mapItems = [
  {
    name: 'pending transactions',
    icon: <GiAlarmClock />,
    figure: "figures"
  },
  {
    name: 'completed transactions',
    icon: <GiAlarmClock />,
    figure: "figures"
  },
  {
    name: 'Failed transactions',
    icon: <GiAlarmClock />,
    figure: "figures"
  },
]

class Dashboard extends Component {
  constructor(props){  
    super(props); 
    this.state = {
    }
  }

  static proptype = {
    classes: PropTypes.object.isRequired,
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginTop: '30px'}} className={classes.root}>
        <h2 className={classes.title}>Dashboard</h2>
        <div className="">
          {/* <div className="news">
            {
              mapItems.map((allDetails, index) => (
                <div key={index} className="firster">
                  <Cards>
                    <h3 className={classes.titles}>{allDetails.name}</h3>
                    <div className={classes.centerImage}>{allDetails.icon}</div>
                    <h3 className={classes.titles}>{allDetails.figure}</h3>
                  </Cards>
                </div>
              ))
            }
          </div> */}
          <Services />
          {/* <div style={{ padding: "3%" }}> */}
            {/* <div id="responsive-chart"></div> */}
            {/* <Paper > */}
              <Charts />
            {/* </Paper> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard)
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Banner from '../component/Banner/Banner';
import blueBackground from '../assets/images/blueBackground.jpg'
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
// import Carousels from '../Components/Carousel/Carousel'

const styles = (theme) => ({
  card: {
    maxWidth: 260,
    margin: "2.35rem",
    marginTop: theme.spacing(5),
    float: "left",
  },
  backgroundHeroText: {
    textAalign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    color: 'black',
  },
  backgroundHero: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    width: `calc(100vw+ 48px)`,
    height: '400',
  },
  title: {
    margin: "auto",
    // height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff"
  },
  EventTitle: {
    //margin: 'auto',
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px",
    color: theme.palette.text.secondary,
  },
  media: {
    minHeight: 330,
  },
  button: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
});

function HomePage(props) {
  const { classes } = props;

  const headerText = (
    <Typography type="headline" variant="h2" className={classes.title}>
      Poplar Power
    </Typography>
  )
  return (
    <div>
      <img src={blueBackground} alt="good" width="100%" height="450px" />
        <div className={classes.backgroundHeroText}>
          <Banner
            title={headerText}
          >
            <Button variant="contained" color="primary" href="/powerweb/about">
              learn more
            </Button>
          </Banner>
        </div> 
    </div>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
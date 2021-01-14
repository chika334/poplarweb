import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

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
  title: {
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    color: theme.palette.text.secondary,
  },
});

class About extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <h2 className={classes.title}>About</h2>
        <div>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. Lorem ipsum, or lipsum as
            it is sometimes known, is dummy text used in laying out print,
            graphic or web designs. The passage is attributed to an unknown
            typesetter in the 15th century who is thought to have scrambled
            parts of Cicero's De Finibus Bonorum et Malorum for use in a type
            specimen book. Lorem ipsum, or lipsum as it is sometimes known, is
            dummy text used in laying out print, graphic or web designs. The
            passage is attributed to an unknown typesetter in the 15th century
            who is thought to have scrambled parts of Cicero's De Finibus
            Bonorum et Malorum for use in a type specimen book. Lorem ipsum, or
            lipsum as it is sometimes known, is dummy text used in laying out
            print, graphic or web designs. The passage is attributed to an
            unknown typesetter in the 15th century who is thought to have
            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in
            a type specimen book.
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About)
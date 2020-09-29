import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/AboutStyles';
import Yun from './media/YunChungProfile.jpeg';

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.About} id='about'>
        <div className={classes.AboutTitle}>
          <h1>Bio</h1>
          <h2>About Me</h2>
        </div>
        <div className={classes.AboutFlexContainer}>
          <div className={classes.AboutLeft}>
            <img src={Yun} alt="Yun Chung's Profile" />
          </div>
          <div className={classes.AboutRight}>
            <h2>Hi! I'm Yun.</h2>
            <p>
              I'm a recent graduate of Le Wagon (Tokyo), the highest-rated
              coding bootcamp in the world.
            </p>
            <p>
              I'm currently looking for a position as a full stack web
              developer. Technology fascinates me, so an ideal environment for
              me would be a place where I can learn, develop my skills, and make
              a meaningful contribution towards building useful products each
              and every day.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);

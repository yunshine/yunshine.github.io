import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/AboutStyles';
import Yun from './media/YunChungProfile.jpeg';

class About extends Component {
  // static defaultProps = {
  //   key: value,
  // };

  // constructor(props) {
  //   super(props);
  // this.state = { key: value };
  // this.handleClick = this.handleClick.bind(this);
  // }

  // About() {
  //   this.setState({ key: value });
  // }

  // handleClick() {
  //   this.newFunction();
  //   this.setState(oldState => {
  //     return { score: oldState + 3 };
  //   })
  // }
  // => This is the way and the syntax to update an existing state, not:   this.setState({ score: this.state.score + 3 });

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.About}>
        <div className={classes.AboutTitle}>
          <h1>Bio</h1>
          <h2>About Me</h2>
        </div>
        <div className={classes.AboutFlexContainer}>
          <div className={classes.AboutLeft}>
            <img src={Yun} />
          </div>
          <div className={classes.AboutRight}></div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);

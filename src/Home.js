import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/HomeStyles';

class Home extends Component {
  // static defaultProps = {
  //   key: value,
  // };

  // constructor(props) {
  //   super(props);
  // this.state = { key: value };
  // this.handleClick = this.handleClick.bind(this);
  // }

  // Home() {
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
      <div className={classes.Home}>
        <div className={classes.HomeLeft}>
          <h2>
            <span className={classes.Blue}>Hello.</span> I'm a full stack web
            developer.
          </h2>
        </div>
        <div className={classes.HomeRight}>
          <h1>This is the right side of the home component...</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

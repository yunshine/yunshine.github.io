import React, { Component } from 'react';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MainStyles'; // make a CSS file for this component..
// import classes from '*.module.css';
// import -something-, { -something- } from './-something-';
// import { Route, Switch, NavLink } from 'react-router-dom';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class Main extends Component {
  // static defaultProps = {
  //   key: value,
  // };

  // constructor(props) {
  //   super(props);
  // this.state = { key: value };
  // this.handleClick = this.handleClick.bind(this);
  // }

  // Main() {
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
    return (
      <div className={this.props.classes.Main}>
        <Navbar />
        <div className={this.props.classes.MainDiv}>
          <h3>Portfolio Coming Soon...</h3>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Main); /// connect this component to App.js...

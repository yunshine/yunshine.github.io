import React, { Component } from 'react';
// import -something-, { -something- } from './-something-';
// import classes from '*.module.css';
import { withStyles } from '@material-ui/styles';
// import { Route, Switch, NavLink } from 'react-router-dom';
import styles from './styles/NavbarStyles.css'; // make a CSS file for this component..

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class Navbar extends Component {
  // static defaultProps = {
  //   key: value,
  // };

  // constructor(props) {
  //   super(props);
  // this.state = { key: value };
  // this.handleClick = this.handleClick.bind(this);
  // }

  // Navbar() {
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
      <div class='navbar navbar-expand-sm navbar-light navbar-lewagon main'>
        <a class='navbar-brand' href='#'></a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                About
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Work
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar); /// connect this component to App.js...

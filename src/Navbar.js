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
      <nav class='navbar navbar-expand-lg navbar-light yuntest'>
        <a class='navbar-brand' href='#'>
          Yun
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul class='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                Home <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Link
              </a>
            </li>
            <li class='nav-item'>
              <a
                class='nav-link disabled'
                href='#'
                tabindex='-1'
                aria-disabled='true'
              >
                Disabled
              </a>
            </li>
          </ul>

          <form class='form-inline my-2 my-lg-0'>
            <input
              class='form-control mr-sm-2'
              type='search'
              placeholder='Search'
            />
            <button class='btn btn-outline-success my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar); /// connect this component to App.js...

import React, { Component } from 'react';
// import -something-, { -something- } from './-something-';
// import classes from '*.module.css';
import { withStyles } from '@material-ui/styles';
// import { Route, Switch, NavLink } from 'react-router-dom';
import styles from './styles/NavbarStyles.css';

class Navbar extends Component {
  render() {
    return (
      <div class='navbar navbar-expand-sm navbar-light navbar-lewagon main'>
        <a class='navbar-brand' href='#'>
          Logo Placeholder
        </a>
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

            <li class='nav-item dropdown'>
              <a
                href='#'
                class='nav-link dropdown-toggle'
                id='navbarDropdown'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Contact
              </a>
              <div
                class='dropdown-menu dropdown-menu-right'
                aria-labelledby='navbarDropdown'
              >
                <div class='contact-dropdown-link'>
                  <a class='dropdown-item' href='#'>
                    <i class='far fa-envelope'> yun.chung@mac.com</i>
                  </a>
                </div>

                <div class='contact-dropdown-link'>
                  <a
                    class='dropdown-item'
                    href='https://www.linkedin.com/in/yunchungio/'
                  >
                    <i class='fab fa-linkedin'> Linked In</i>
                  </a>
                </div>

                <div class='contact-dropdown-link'>
                  <a class='dropdown-item' href='https://github.com/yunshine'>
                    <i class='fab fa-github'> Github</i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar); /// connect this component to App.js...

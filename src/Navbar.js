import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/NavbarStyles.css';
import CV from './media/YunChungCV.pdf';
import logo from './media/logo.png';

class Navbar extends Component {
    render() {
        return (
            <div class='navbar navbar-expand-sm navbar-light navbar-lewagon main'>
                <a class='navbar-brand' href='#top'><img class='navbar-logo' src={logo} alt="Logo" /></a>
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
                            <a class='nav-link' href='#about'>
                                About
                                </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href='#work'>
                                Work
                                </a>
                        </li>
                        <li class='nav-item'>
                            <a class='nav-link' href={CV} download>
                                CV
                                </a>
                        </li>

                        <li class='nav-item dropdown'>
                            {/* eslint-disable-next-line */}
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
                                    <a class='dropdown-item' href='mailto:yun.chung@mac.com'>
                                        <i class='far fa-envelope'> yun.chung@mac.com</i>
                                    </a>
                                </div>
                                <hr></hr>

                                <div class='contact-dropdown-link'>
                                    <a
                                        class='dropdown-item'
                                        href='https://www.linkedin.com/in/yunchungdev/'
                                        target="_blank"
                                    >
                                        <i class='fab fa-linkedin'> LinkedIn</i>
                                    </a>
                                </div>
                                <hr></hr>

                                <div class='contact-dropdown-link'>
                                    <a class='dropdown-item' href='https://github.com/yunshine' target="_blank">
                                        <i class='fab fa-github'> GitHub</i>
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

export default withStyles(styles)(Navbar);

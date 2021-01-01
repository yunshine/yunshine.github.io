import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Work from './Work';
import About from './About';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MainStyles';

class Main extends Component {
    render() {
        return (
            <div className={this.props.classes.Main}>
                <Navbar />
                <Home />
                <Work />
                <About />
                <Footer />
                {/* <div className={this.props.classes.MainDiv}>
                        <i class='fas fa-tools'></i>
                        <h3>Portfolio Under Construction...</h3>
                </div> */}
            </div>
        );
    }
}

export default withStyles(styles)(Main);

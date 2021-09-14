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
                            I’m a junior full stack developer specializing in React and Express, and a recent graduate of Le Wagon (Tokyo), the highest rated bootcamp in the world.
                        </p>
                        <p>
                            I love what I do because I get to develop products and features that create solutions for our users. Plus, I get to do it in an environment where I can learn, be stretched, and grow as a developer.
                        </p>
                        <p>
                            I’m interested in finding a position where I can continue to learn and grow as a developer, show my potential and talent, and contribute my skills towards creating innovative solutions that allow users to achieve success.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(About);

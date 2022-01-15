import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyles';

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.Footer}>
                <h5>© 2022 Yun Chung</h5>
                <div className={classes.iconDiv}>
                    <a href='mailto:yun.chung@mac.com'>
                        <i class='far fa-envelope'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/yunchungdev/' target="_blank" rel="noopener noreferrer">
                        <i class='fab fa-linkedin'></i>
                    </a>
                    <a href='https://github.com/yunshine' target="_blank" rel="noopener noreferrer">
                        <i class='fab fa-github'></i>
                    </a>
                    <a href='https://www.instagram.com/yun.chung/' target="_blank" rel="noopener noreferrer">
                        <i class='fab fa-instagram'></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Footer);

import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/HomeStyles';

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.Home} id='top'>
                <div className={classes.HomeLeft}>
                    <h2>
                        <span className={classes.BlueH2}>Hello.</span>
                    </h2>
                    <h2>I'm a full stack</h2>
                    <h2>web developer</h2>
                    <h5>
                        My name is <span className={classes.BlueH5}>Yun</span>, and I help
            turn ideas into high-quality web-based products.
            </h5>
                    <div className={classes.emailButtonDiv}>
                        <a className={classes.emailButton} href='mailto:yun.chung@mac.com'>
                            Email Me
            </a>
                        <h6>Got a project? Shoot me an email!</h6>
                        <div id='work'></div>
                    </div>
                </div>
                <div className={classes.HomeRight}>
                    <div className={classes.HomeRightTitle}>
                        {/* <i class='fab fa-dev'> */}
                        {/* </i> */}
                        <span className={classes.HomeRightTitleText}> My Skills</span>
                    </div>

                    <div className={classes.skillsListRow}>
                        <div className={classes.skillsListBox}>
                            <div className={classes.devicon}>
                                <i class='devicon-javascript-plain'></i>
                            </div>
                            <span className={classes.liText}>JavaScript</span>
                        </div>

                        <div className={classes.skillsListBox}>
                            <div className={classes.deviconDiv}>
                                <i class='devicon-nodejs-plain'></i>
                            </div>
                            {/* <span className={classes.liText}>jQuery</span> */}
                            <span className={classes.liText}>Node.js</span>
                        </div>
                    </div>

                    <div className={classes.skillsListRow}>
                        <div className={classes.skillsListBox}>
                            <div className={classes.deviconDiv}>
                                <i class='devicon-react-original'></i>
                            </div>
                            <span className={classes.liText}>React</span>
                        </div>

                        <div className={classes.skillsListBox}>
                            <div className={classes.devicon}>
                                <i class='devicon-express-original'></i>
                            </div>
                            <span className={classes.liText}>Express</span>
                        </div>
                    </div>

                    <div className={classes.skillsListRow}>
                        <div className={classes.skillsListBox}>
                            <div className={classes.devicon}>
                                <i class='devicon-ruby-plain'></i>
                            </div>
                            <span className={classes.liText}>Ruby</span>
                        </div>
                        <div className={classes.skillsListBox}>
                            <div className={classes.devicon}>
                                <i class='devicon-rails-plain'></i>
                            </div>
                            <span className={classes.liText}>Ruby on Rails</span>
                        </div>
                    </div>
                    <div className={classes.skillsListRow}>
                        <div className={classes.skillsListBox}>
                            <div className={classes.devicon}>
                                <i class='devicon-html5-plain'></i>
                            </div>
                            <span className={classes.liText}>HTML</span>
                        </div>
                        <div className={classes.skillsListBox}>
                            <div className={classes.devicon}>
                                <i class='devicon-css3-plain'></i>
                            </div>

                            <span className={classes.liText}>CSS</span>
                        </div>
                    </div>
                    <div className={classes.skillsListRow}>
                        <div className={classes.skillsListBox}>
                            <div className={classes.devicon}>
                                <i class='devicon-bootstrap-plain'></i>
                            </div>
                            <span className={classes.liText}>Bootstrap</span>
                        </div>
                        <div className={classes.skillsListBox}>
                            <div>
                                <i class='fas fa-palette'></i>
                            </div>
                            <span className={classes.liText}>Material-UI</span>
                        </div>
                    </div>
                    <div className={classes.skillsListRow}>
                        <div className={classes.skillsListBox}>
                            <div className={classes.devicon}>
                                <i class='devicon-mongodb-plain'></i>
                            </div>
                            <span className={classes.liText}>MongoDB</span>
                        </div>
                        <div className={classes.skillsListBox}>
                            <div className={classes.devicon}>
                                <i class='devicon-postgresql-plain'></i>
                            </div>
                            <span className={classes.liText}>PostgreSQL</span>
                        </div>
                    </div>

                    <div className={classes.skillsListRow}>
                        <div className={classes.skillsListBox}>
                            <div className={classes.devicon}>
                                <i class='devicon-jquery-plain'></i>
                            </div>
                            {/* <span className={classes.liText}>Node.js</span> */}
                            <span className={classes.liText}>jQuery</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Home);

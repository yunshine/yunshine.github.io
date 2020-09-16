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
          </div>
          {/* <div>
              <i class='far fa-envelope'></i>
            </div>
            <div>
              <h6>Email</h6>
            </div>
          </a> */}
        </div>
        <div className={classes.HomeRight}>
          <div className={classes.HomeRightTitle}>
            <i class='fab fa-dev'>
              <span className={classes.HomeRightTitleText}> My Skills</span>
            </i>
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
                <i class='devicon-javascript-plain'></i>
              </div>
              <span className={classes.liText}> Javascript</span>
            </div>
          </div>
          <div className={classes.skillsListRow}>
            <div className={classes.skillsListBox}>
              <div className={classes.devicon}>
                <i class='devicon-rails-plain'></i>
              </div>
              <span className={classes.liText}> Ruby on Rails</span>
            </div>
            <div className={classes.skillsListBox}>
              <div className={classes.devicon}>
                <i class='devicon-ruby-plain'></i>
              </div>
              <span className={classes.liText}> Ruby</span>
            </div>
          </div>
          <div className={classes.skillsListRow}>
            <div className={classes.skillsListBox}>
              <div className={classes.devicon}>
                <i class='devicon-html5-plain'></i>
              </div>
              <span className={classes.liText}> HTML</span>
            </div>
            <div className={classes.skillsListBox}>
              <div className={classes.devicon}>
                <i class='devicon-css3-plain'></i>
              </div>

              <span className={classes.liText}> CSS</span>
            </div>
          </div>
          <div className={classes.skillsListRow}>
            <div className={classes.skillsListBox}>
              <div className={classes.devicon}>
                <i class='devicon-bootstrap-plain'></i>
              </div>
              <span className={classes.liText}> Bootstrap</span>
            </div>
            <div className={classes.skillsListBox}>
              <div>
                <i class='fas fa-palette'></i>
              </div>
              <span className={classes.liText}> Material-UI</span>
            </div>
          </div>
          <div className={classes.skillsListRow}>
            <div className={classes.skillsListBox}>
              <div>
                <i class='fas fa-database'></i>
              </div>
              <span className={classes.liText}> SQL & PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

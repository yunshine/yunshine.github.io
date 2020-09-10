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
            <i class='fas fa-layer-group'> Skills</i>
          </div>
          <div className={classes.HomeRightTitle}>
            <ul>
              <li>
                <i class='fas fa-layer-group'> React</i>
              </li>
              <li>
                <i class='fas fa-layer-group'> Javascript</i>
              </li>
              <li>
                <i class='fas fa-layer-group'> Ruby on Rails</i>
              </li>
              <li>
                <i class='fas fa-layer-group'> Ruby</i>
              </li>
              <li>
                <i class='fas fa-layer-group'> HTML</i>
              </li>
              <li>
                <i class='fas fa-layer-group'> CSS</i>
              </li>
              <li>
                <i class='fas fa-layer-group'> Material-UI</i>
              </li>
              <li>
                <i class='fas fa-layer-group'> Bootstrap</i>
              </li>
              <li>
                <i class='fas fa-layer-group'> SQL</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

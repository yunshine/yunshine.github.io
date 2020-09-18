import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyles';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class Footer extends Component {
  // static defaultProps = {
  //   key: value,
  // };

  // constructor(props) {
  //   super(props);
  // this.state = { key: value };
  // this.handleClick = this.handleClick.bind(this);
  // }

  // Footer() {
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
      <div className={classes.Footer}>
        <h5>© 2020 Built with React</h5>
        <div className={classes.iconDiv}>
          <a href='mailto:yun.chung@mac.com'>
            <i class='far fa-envelope'></i>
          </a>
          <a href='https://www.linkedin.com/in/yunchungio/'>
            <i class='fab fa-linkedin'></i>
          </a>
          <a href='https://github.com/yunshine'>
            <i class='fab fa-github'></i>
          </a>
          <a href='https://www.instagram.com/yun.chung/'>
            <i class='fab fa-instagram'></i>
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Footer); /// connect this component to App.js...

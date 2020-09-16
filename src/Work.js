import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import { withStyles } from '@material-ui/styles';
import styles from './styles/WorkStyles';

class Work extends Component {
  // static defaultProps = {
  //   key: value,
  // };

  // constructor(props) {
  //   super(props);
  // this.state = { key: value };
  // this.handleClick = this.handleClick.bind(this);
  // }

  // Work() {
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
      <div className={classes.Work}>
        <ProjectItem
          test={'test text...'}
          screenshot={'./screenshots/testphoto.jpg'}
          url={'Link here...'}
          gitHub={'Github link here...'}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Work);

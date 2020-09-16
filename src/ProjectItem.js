import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProjectItemStyles';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class ProjectItem extends Component {
  // static defaultProps = {
  //   key: value,
  // };

  // constructor(props) {
  //   super(props);
  // this.state = { key: value };
  // this.handleClick = this.handleClick.bind(this);
  // }

  // ProjectItem() {
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
    return (
      <div className='ProjectItem'>
        {/* <h1>{this.state.ProjectItem}</h1>
        <h1>{this.props.ProjectItem}</h1> */}
        <h1>This is the ProjectItem component in the Work component...</h1>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectItem);

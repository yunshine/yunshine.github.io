import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import { withStyles } from '@material-ui/styles';
import styles from './styles/WorkStyles';
import cocktail1 from './media/Cocktail1.jpg';
import cocktail2 from './media/Cocktail2.jpg';
import cocktail3 from './media/Cocktail3.jpg';

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
        <div className={classes.WorkTitle}>
          <h1>Portfolio</h1>
          <h2>My Work</h2>
        </div>
        <ProjectItem
          name={'Rails Cocktail Recipes'}
          photo1={cocktail1}
          photo2={cocktail2}
          photo3={cocktail3}
          url={'https://rails-cocktail-recipes.herokuapp.com/'}
          gitHub={'https://github.com/yunshine/Rails-Cocktail-Recipes'}
          description='something about what this app does...'
          tech={[
            'Ruby on Rails',
            'Ruby',
            'HTML',
            'CSS',
            'Bootstrap',
            'PostGreSQL',
          ]}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Work);

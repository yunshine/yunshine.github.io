import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import { withStyles } from '@material-ui/styles';
import styles from './styles/WorkStyles';
import Cocktail1 from './media/Cocktail1.jpeg';
import Cocktail2 from './media/Cocktail2.jpeg';
import Cocktail3 from './media/Cocktail3.jpeg';
import OneBite1 from './media/OneBite1.jpeg';
import OneBite2 from './media/OneBite2.jpeg';
import OneBite3 from './media/OneBite3.jpeg';

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
          photo1={Cocktail1}
          photo2={Cocktail2}
          photo3={Cocktail3}
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
        <ProjectItem
          name={'OneBite'}
          photo1={OneBite1}
          photo2={OneBite2}
          photo3={OneBite3}
          url={'http://onebite.fun/'}
          gitHub={'https://github.com/yunshine/OneBite'}
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
        <br></br>
      </div>
    );
  }
}

export default withStyles(styles)(Work);

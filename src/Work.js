import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import { withStyles } from '@material-ui/styles';
import styles from './styles/WorkStyles';
import Cocktail1 from './media/Cocktail1.jpg';
import Cocktail2 from './media/Cocktail2.jpg';
import Cocktail3 from './media/Cocktail3.jpg';
import OneBite1 from './media/OneBite1.jpg';
import OneBite2 from './media/OneBite2.jpg';
import OneBite3 from './media/OneBite3.jpg';

class Work extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Work}>
        <div className={classes.WorkTitle}>
          <h1>Portfolio</h1>
          <h2>My Work</h2>
        </div>
        <ProjectItem
          name={'Collocafe'}
          photo1={Cocktail1}
          photo2={Cocktail2}
          photo3={Cocktail3}
          url={'https://rails-cocktail-recipes.herokuapp.com/'}
          github={'https://github.com/yunshine/Collocafe'}
          description='An Express and MongoDB CRUD app.'
          tech1={['Javascript', 'Express', 'MongoDB', 'Node.js']}
          tech2={['HTML', 'CSS']}
        />
        <ProjectItem
          name={'Rails Cocktail Recipes'}
          photo1={Cocktail1}
          photo2={Cocktail2}
          photo3={Cocktail3}
          url={'https://rails-cocktail-recipes.herokuapp.com/'}
          github={'https://github.com/yunshine/Rails-Cocktail-Recipes'}
          description='This Ruby on Rails web application is used to create, edit, organize, and display cocktail recipes.'
          tech1={['Ruby on Rails', 'Ruby', 'HTML', 'CSS']}
          tech2={['Bootstrap', 'PostGreSQL']}
        />
        <ProjectItem
          name={'OneBite'}
          photo1={OneBite1}
          photo2={OneBite2}
          photo3={OneBite3}
          url={'http://onebite.fun/'}
          github={'https://github.com/yunshine/OneBite'}
          description='OneBite is a Ruby on Rails app that allows users to search for online courses, schedule lessons into their personal calendar, and track their progress.'
          tech1={['Ruby on Rails', 'Ruby', 'HTML', 'CSS']}
          tech2={['Bootstrap', 'PostGreSQL']}
        />
        <br></br>
      </div>
    );
  }
}

export default withStyles(styles)(Work);

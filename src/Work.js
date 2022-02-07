import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import ProjectItemOneBite from './ProjectItemOneBite';
import ProjectItemFlipped from './ProjectItemFlipped';
import ProjectItemFlippedPlateRate from './ProjectItemFlippedPlateRate';
import { withStyles } from '@material-ui/styles';
import styles from './styles/WorkStyles';
import DishDev1 from './media/DishDev1.jpg';
import DishDev2 from './media/DishDev2.jpg';
import DishDev3 from './media/DishDev3.jpg';
import PlateRate1 from './media/PlateRate1.jpg';
import PlateRate2 from './media/PlateRate2.jpg';
import PlateRate3 from './media/PlateRate3.jpg';
import Collocafe1 from './media/Collocafe1.jpg';
import Collocafe2 from './media/Collocafe2.jpg';
import Collocafe3 from './media/Collocafe3.jpg';
import OneBite1 from './media/OneBite1.jpg';
import OneBite2 from './media/OneBite2.jpg';
import OneBite3 from './media/OneBite3.jpg';
import Cocktail1 from './media/Cocktail1.jpg';
import Cocktail2 from './media/Cocktail2.jpg';
import Cocktail3 from './media/Cocktail3.jpg';

class Work extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.Work}>
                <hr className={classes.HR}></hr>
                <div className={classes.WorkTitle}>
                    <h1>Portfolio</h1>
                    <h2>My Work</h2>
                </div>
                <ProjectItem
                    name={'DishDev'}
                    photo1={DishDev1}
                    photo2={DishDev2}
                    photo3={DishDev3}
                    url={'https://dishdev.netlify.app/'}
                    github={'https://github.com/yunshine/DishDev'}
                    description="This MERN stack recipe organization app was primarily built to showcase my ability to develop with React and server-side APIs."
                    tech1={['React', 'Node.js', 'Express', 'MongoDB']}
                    tech2={['JavaScript', 'HTML', 'CSS', 'API']}
                />
                <hr className={classes.HR}></hr>
                <ProjectItemFlippedPlateRate
                    name={'PlateRate'}
                    photo1={PlateRate1}
                    photo2={PlateRate2}
                    photo3={PlateRate3}
                    workingUrl={'https://platerate.com/'}
                    description="An app where users can find, rate, and share their favorite dishes and restaurants. Built using the MERN stack."
                    tech1={['React', 'Node.js', 'Express', 'MongoDB']}
                    tech2={['JavaScript', 'HTML', 'CSS', 'API']}
                />
                <hr className={classes.HR}></hr>
                <ProjectItem
                    name={'Collocafe'}
                    photo1={Collocafe1}
                    photo2={Collocafe2}
                    photo3={Collocafe3}
                    url={'https://collocafe.herokuapp.com/'}
                    github={'https://github.com/yunshine/Collocafe'}
                    description="A Node.js, Express, and MongoDB CRUD app that allows users to share and dialogue about some of the best cafes in Tokyo."
                    tech1={['Node.js', 'Express', 'MongoDB', 'Bootstrap']}
                    tech2={['JavaScript', 'HTML', 'CSS', 'API']}
                />
                <hr className={classes.HR}></hr>
                <ProjectItemFlipped
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
                <hr className={classes.HR}></hr>
                <ProjectItemOneBite
                    name={'OneBite'}
                    photo1={OneBite1}
                    photo2={OneBite2}
                    photo3={OneBite3}
                    workingUrl={'https://github.com/yunshine/OneBite'}
                    description='OneBite is a Ruby on Rails app that allows users to search for online courses, schedule lessons into their personal calendar, and track their progress.'
                    tech1={['Ruby on Rails', 'Ruby', 'HTML', 'CSS']}
                    tech2={['Bootstrap', 'PostGreSQL']}
                />
                <br></br>
                <hr className={classes.HR}></hr>
            </div>
        );
    }
}

export default withStyles(styles)(Work);

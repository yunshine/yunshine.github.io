import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProjectItemStyles';

class ProjectItem extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.ProjectItem}>
                <div className={classes.ProjectItemLeft}>
                    <div
                        id='carouselExampleIndicators'
                        class='carousel slide'
                        data-ride='carousel'
                    >
                        <ol class='carousel-indicators'>
                            <li
                                data-target='#carouselExampleIndicators'
                                data-slide-to='0'
                                class='active'
                            ></li>
                            <li
                                data-target='#carouselExampleIndicators'
                                data-slide-to='1'
                            ></li>
                            <li
                                data-target='#carouselExampleIndicators'
                                data-slide-to='2'
                            ></li>
                        </ol>
                        <div class='carousel-inner'>
                            <div class='carousel-item active'>
                                <img
                                    class='d-block w-100'
                                    src={this.props.photo1}
                                    alt='First slide'
                                />
                            </div>
                            <div class='carousel-item'>
                                <img
                                    class='d-block w-100'
                                    src={this.props.photo2}
                                    alt='Second slide'
                                />
                            </div>
                            <div class='carousel-item'>
                                <img
                                    class='d-block w-100'
                                    src={this.props.photo3}
                                    alt='Third slide'
                                />
                            </div>
                        </div>
                        <a
                            class='carousel-control-prev'
                            href='#carouselExampleIndicators'
                            role='button'
                            data-slide='prev'
                        >
                            <span
                                class='carousel-control-prev-icon'
                                aria-hidden='true'
                            ></span>
                            <span class='sr-only'>Previous</span>
                        </a>
                        <a
                            class='carousel-control-next'
                            href='#carouselExampleIndicators'
                            role='button'
                            data-slide='next'
                        >
                            <span
                                class='carousel-control-next-icon'
                                aria-hidden='true'
                            ></span>
                            <span class='sr-only'>Next</span>
                        </a>
                    </div>
                </div>

                <div className={classes.ProjectItemRight}>
                    <div>
                        <h2>{this.props.name}</h2>
                        <div className={classes.buttonsDiv}>
                            <a href={this.props.url}>Visit Site</a>
                            <a href={this.props.github}>Visit GitHub</a>
                        </div>
                        <p>{this.props.description}</p>
                        <h5>Built using:</h5>
                        <pre>{this.props.tech1.join('   |   ')}</pre>
                        <pre>{this.props.tech2.join('   |   ')}</pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ProjectItem);

import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProjectItemStyles';

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
              <a href={this.props.url}>Visit App</a>
              <a href={this.props.github}>Visit Github</a>
            </div>
            <p>{this.props.description}</p>
            <br></br>
            <h5>Built using:</h5>
            {/* <h6> */}
            <pre>{this.props.tech.join('   |   ')}</pre>
            {/* </h6> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectItem);

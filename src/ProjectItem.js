import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProjectItemStyles';
import testphoto from './media/testphoto.jpg';
import cocktail1 from './media/Cocktail1.jpg';
import cocktail2 from './media/Cocktail2.jpg';
import cocktail3 from './media/Cocktail3.jpg';

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
        <h1>This is the ProjectItem component in the Work component...</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.props.url}</h1>
        <h1>{this.props.gitHub}</h1>
        <h1>{this.props.description}</h1>
        {/* <a href={testphoto} download> */}
        {/* <a href={testphoto}>
          <img src={testphoto} />
        </a> */}
        {/* <a href={CV} download>
          <h1>MY CV HERE...</h1>
        </a> */}
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
            <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
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
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='sr-only'>Previous</span>
          </a>
          <a
            class='carousel-control-next'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='sr-only'>Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectItem);

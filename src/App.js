import React, { Component } from 'react';
import Main from './Main';
// import { Route, Switch, NavLink } from 'react-router-dom';
// import -something-, { -something- } from './-something-';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Yun's Portfolio Coming Soon...</h1>
        <h6>Testing App Component...</h6>
        <Main />

        {/* <NavLink exact activeClassName="active-link" to="/-something-">-some-text-here-</NavLink> */}

        {/* <Switch> */}
        {/* use path="/" to assign a default page... */}
        {/* <Route exact path="/-something-" component={-something-} /> */}
        {/* <Route exact path="/-something-" component={() => <-something- name='Muffins"> } /> */}
        {/* <Route exact path="/-something-" render={() => <-something- name='Biscuit"> } /> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;

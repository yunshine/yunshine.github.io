import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';
import PlateRateMessage from './PlateRateMessage';
import OneBiteMessage from './OneBiteMessage';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/platerate" exact component={PlateRateMessage} />
                        <Route path="/onebite" exact component={OneBiteMessage} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';
import Header from './Header';
import Doc from './Doc';
import Private from './Private';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="App container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/doc/:md_file" component={ Doc } />
            <Route exact path="/private" component={ Private } />
          </Switch>
        </div>
      </Router>
    )
  }
}